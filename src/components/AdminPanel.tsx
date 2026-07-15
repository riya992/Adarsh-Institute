import React, { useMemo, useState } from "react";
import {
  AlertCircle,
  CalendarDays,
  Download,
  Eye,
  Filter,
  Lock,
  LogOut,
  Mail,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  UserRound,
} from "lucide-react";

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  course: string;
  source: "enrollment_form" | "modal_form";
  created_at: string;
}

type DateFilter = "today" | "7days" | "30days" | "all";
type SourceFilter = "all" | Enquiry["source"];

const ADMIN_SESSION_KEY = "adarsh_admin_password";

function getAdminEndpoint() {
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    return "/api/admin/enquiries";
  }

  return "/.netlify/functions/admin-enquiries";
}

function isSameLocalDate(date: Date, compareDate: Date) {
  return date.getFullYear() === compareDate.getFullYear()
    && date.getMonth() === compareDate.getMonth()
    && date.getDate() === compareDate.getDate();
}

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function escapeCsvCell(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

export default function AdminPanel() {
  const [password, setPassword] = useState(() => sessionStorage.getItem(ADMIN_SESSION_KEY) ?? "");
  const [isUnlocked, setIsUnlocked] = useState(() => Boolean(sessionStorage.getItem(ADMIN_SESSION_KEY)));
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState<DateFilter>("today");
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>("all");
  const [courseFilter, setCourseFilter] = useState("all");

  const fetchEnquiries = async (adminPassword = password) => {
    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(getAdminEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: adminPassword }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to load enquiries.");
      }

      setEnquiries(result.enquiries ?? []);
      setIsUnlocked(true);
      sessionStorage.setItem(ADMIN_SESSION_KEY, adminPassword);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Unable to load enquiries.");
      setIsUnlocked(false);
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    await fetchEnquiries(password);
  };

  const handleLogout = () => {
    setIsUnlocked(false);
    setPassword("");
    setEnquiries([]);
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  };

  const filteredEnquiries = useMemo(() => {
    const now = new Date();
    const query = searchTerm.trim().toLowerCase();

    return enquiries.filter((enquiry) => {
      const createdAt = new Date(enquiry.created_at);

      if (dateFilter === "today" && !isSameLocalDate(createdAt, now)) {
        return false;
      }

      if (dateFilter === "7days") {
        const sevenDaysAgo = new Date(now);
        sevenDaysAgo.setDate(now.getDate() - 7);
        if (createdAt < sevenDaysAgo) return false;
      }

      if (dateFilter === "30days") {
        const thirtyDaysAgo = new Date(now);
        thirtyDaysAgo.setDate(now.getDate() - 30);
        if (createdAt < thirtyDaysAgo) return false;
      }

      if (sourceFilter !== "all" && enquiry.source !== sourceFilter) {
        return false;
      }

      if (courseFilter !== "all" && enquiry.course !== courseFilter) {
        return false;
      }

      if (!query) {
        return true;
      }

      return [
        enquiry.name,
        enquiry.email,
        enquiry.phone,
        enquiry.state,
        enquiry.course,
        enquiry.source,
      ].some((value) => value.toLowerCase().includes(query));
    });
  }, [courseFilter, dateFilter, enquiries, searchTerm, sourceFilter]);

  const stats = useMemo(() => {
    const now = new Date();
    const today = enquiries.filter((enquiry) => isSameLocalDate(new Date(enquiry.created_at), now)).length;
    const modal = enquiries.filter((enquiry) => enquiry.source === "modal_form").length;
    const enrollment = enquiries.filter((enquiry) => enquiry.source === "enrollment_form").length;
    const uniqueCourses = new Set(enquiries.map((enquiry) => enquiry.course)).size;

    return { today, modal, enrollment, uniqueCourses };
  }, [enquiries]);

  const courseOptions = useMemo(() => {
    return Array.from(new Set<string>(enquiries.map((enquiry) => enquiry.course))).sort((a, b) => a.localeCompare(b));
  }, [enquiries]);

  const handleExportCsv = () => {
    const rows = filteredEnquiries.map((enquiry) => [
      enquiry.name,
      enquiry.email,
      enquiry.phone,
      enquiry.state,
      enquiry.course,
      enquiry.source === "enrollment_form" ? "Enrollment form" : "Popup modal",
      formatDateTime(enquiry.created_at),
    ]);

    const csv = [
      ["Name", "Email", "Phone", "State", "Course", "Source", "Submitted At"],
      ...rows,
    ].map((row) => row.map(escapeCsvCell).join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `adarsh-enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!isUnlocked) {
    return (
      <section className="min-h-[72vh] bg-slate-950 px-4 py-16 text-white">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-[1fr_420px] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-200">
              <ShieldCheck className="h-4 w-4" />
              Admin Access
            </span>
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                Enquiry Control Panel
              </h1>
              <p className="max-w-xl text-sm leading-6 text-slate-300">
                View admission enquiries, track today&apos;s submissions, filter by course/source, and export leads for follow-up.
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl dark:bg-slate-900">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-red-600 p-3 text-white">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-lg font-bold text-slate-950 dark:text-white">Admin Login</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Enter dashboard password</p>
              </div>
            </div>

            {errorMessage && (
              <div className="mb-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-200">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mb-5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none ring-red-500/20 transition focus:border-red-500 focus:ring-4 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              placeholder="Enter admin password"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Eye className="h-4 w-4" />}
              {isLoading ? "Loading" : "Open Dashboard"}
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-100 px-4 py-8 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:flex-row md:items-center">
          <div>
            <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              <ShieldCheck className="h-3.5 w-3.5" />
              Admin Dashboard
            </span>
            <h1 className="font-display text-2xl font-extrabold text-slate-950 dark:text-white">Admission Enquiries</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Track, filter, call, email, and export all submitted leads.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => fetchEnquiries()}
              disabled={isLoading}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={handleExportCsv}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              <Download className="h-4 w-4" />
              Export CSV
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              <LogOut className="h-4 w-4" />
              Lock
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {[
            ["Total", enquiries.length.toString(), "All enquiries"],
            ["Today", stats.today.toString(), "New today"],
            ["Visible", filteredEnquiries.length.toString(), "After filters"],
            ["Courses", stats.uniqueCourses.toString(), "Interested courses"],
            ["Sources", `${stats.enrollment}/${stats.modal}`, "Form / popup"],
          ].map(([label, value, helper]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</p>
              <p className="mt-2 font-display text-2xl font-extrabold text-slate-950 dark:text-white">{value}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{helper}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <label className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search name, email, phone, state, course"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-950 outline-none focus:border-red-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </label>

            <label className="relative">
              <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select
                value={dateFilter}
                onChange={(event) => setDateFilter(event.target.value as DateFilter)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-950 outline-none focus:border-red-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              >
                <option value="today">Today</option>
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="all">All time</option>
              </select>
            </label>

            <label className="relative">
              <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select
                value={sourceFilter}
                onChange={(event) => setSourceFilter(event.target.value as SourceFilter)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-950 outline-none focus:border-red-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              >
                <option value="all">All sources</option>
                <option value="enrollment_form">Enrollment form</option>
                <option value="modal_form">Popup modal</option>
              </select>
            </label>

            <select
              value={courseFilter}
              onChange={(event) => setCourseFilter(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-950 outline-none focus:border-red-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              <option value="all">All courses</option>
              {courseOptions.map((course) => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
              <thead className="bg-slate-50 dark:bg-slate-950/60">
                <tr>
                  {["Student", "Contact", "State", "Course", "Source", "Submitted"].map((heading) => (
                    <th key={heading} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredEnquiries.map((enquiry) => (
                  <tr key={enquiry.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white">
                          <UserRound className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-950 dark:text-white">{enquiry.name}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{enquiry.id.slice(0, 8)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="space-y-1">
                        <a href={`tel:${enquiry.phone}`} className="flex items-center gap-2 text-slate-700 hover:text-red-600 dark:text-slate-200">
                          <Phone className="h-3.5 w-3.5" />
                          {enquiry.phone}
                        </a>
                        <a href={`mailto:${enquiry.email}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-red-600 dark:text-slate-400">
                          <Mail className="h-3.5 w-3.5" />
                          {enquiry.email}
                        </a>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-slate-600 dark:text-slate-300">{enquiry.state}</td>
                    <td className="max-w-xs px-4 py-4">
                      <p className="line-clamp-2 font-medium text-slate-900 dark:text-white">{enquiry.course}</p>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        enquiry.source === "enrollment_form"
                          ? "bg-blue-500/10 text-blue-700 dark:text-blue-300"
                          : "bg-amber-500/10 text-amber-700 dark:text-amber-300"
                      }`}>
                        {enquiry.source === "enrollment_form" ? "Enrollment" : "Popup"}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-xs text-slate-500 dark:text-slate-400">{formatDateTime(enquiry.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredEnquiries.length === 0 && (
            <div className="flex flex-col items-center justify-center px-4 py-14 text-center">
              <Search className="mb-3 h-8 w-8 text-slate-300" />
              <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">No enquiries found</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Try changing filters or refresh after new submissions.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
