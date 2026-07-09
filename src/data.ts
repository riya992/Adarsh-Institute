import { CourseCategory, FAQItem } from "./types";

export const COURSE_CATEGORIES: CourseCategory[] = [
  {
    id: "regular",
    title: "Regular Courses",
    description: "Highly focused, skill-based curriculum with hands-on lab sessions, standard examinations, and industry certification.",
    eligibilitySummary: "Minimum 10th or 12th Pass (course-specific)",
    courses: [
      {
        name: "Diploma in Computer Applications (DCA)",
        duration: "6 Months",
        fee: "₹12,000",
        eligibility: "10th or 12th Pass",
        description: "Covers the fundamentals of computers, MS Office, basic databases, internet operations, and programming concepts.",
        syllabus: ["Computer Fundamentals & OS", "MS Office (Word, Excel, PowerPoint)", "Database Management (MS Access)", "HTML & Web Design Basics", "Project Work"]
      },
      {
        name: "Advanced Diploma in Computer Applications (ADCA)",
        duration: "1 Year",
        fee: "₹22,000",
        eligibility: "12th Pass from a recognized board",
        description: "An extensive course covering core programming, web development, financial accounting, and hardware essentials.",
        syllabus: ["All DCA Modules", "Programming in C++", "Web Development (HTML, CSS, JS)", "Desktop Publishing (Photoshop, CorelDraw)", "Financial Accounting (Tally Prime)", "Systems Hardware & Networking"]
      },
      {
        name: "Tally Prime ERP",
        duration: "3 Months",
        fee: "₹6,500",
        eligibility: "10th Pass (Accounting familiarity is a plus)",
        description: "Professional accounting training using the latest Tally software, covering GST, payroll, inventory, and taxation.",
        syllabus: ["Accounting Principles", "Company Creation & Ledgers", "Voucher Entry & Invoicing", "GST & TDS Computation", "Inventory Management", "Payroll & Financial Reports"]
      },
      {
        name: "Course on Computer Concepts (CCC)",
        duration: "2 Months",
        fee: "₹3,500",
        eligibility: "Open to all (Highly recommended for government job applicants)",
        description: "Basic digital literacy program certified for core government exam prerequisites and basic computer knowledge.",
        syllabus: ["Introduction to GUI OS", "Word Processing (MS Word)", "Spreadsheets (MS Excel)", "Cyber Security Basics", "Email, Social Media & Digital Financial Services"]
      }
    ]
  },
  {
    id: "distance",
    title: "Distance Learning",
    description: "Flexible self-paced courses supported by dynamic online lectures, video catalogs, and online assignments.",
    eligibilitySummary: "10th, 12th, or Graduate depending on the program",
    courses: [
      {
        name: "Distance BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fee: "₹18,000 / Year",
        eligibility: "12th Pass from any recognized board",
        description: "Flexible graduation option for students balancing professional life or living in remote locations.",
        syllabus: ["Computer Architecture", "Data Structures using C", "Database Management Systems", "Software Engineering", "Mathematics & Statistics", "Online Practical Sessions"]
      },
      {
        name: "Distance MCA (Master of Computer Applications)",
        duration: "2 Years",
        fee: "₹28,000 / Year",
        eligibility: "Graduation with Computer Science background or Maths at 12th level",
        description: "Advance your technical knowledge and get a master's degree via flexible study modules and digital submissions.",
        syllabus: ["Advanced Software Engineering", "Cloud Computing & DevOps", "Artificial Intelligence & ML", "Advanced Java & Web Services", "Big Data Analytics", "PG Project"]
      },
      {
        name: "Distance PGCDA (Post Graduate Diploma in Computer Applications)",
        duration: "1 Year",
        fee: "₹15,000",
        eligibility: "Graduation in any stream",
        description: "Tailored for graduates who want a fast-track professional computer diploma with complete online support.",
        syllabus: ["IT Tools & Business Systems", "Database Management", "Object Oriented Programming", "Systems Analysis & Design"]
      }
    ]
  },
  {
    id: "ug",
    title: "Undergraduate (UG) Programmes",
    description: "Full-time premier collegiate programs emphasizing rigorous academic theory, algorithmic skills, and industry internships.",
    eligibilitySummary: "12th Pass from a recognized board (Science/Math preferred for B.Sc.)",
    courses: [
      {
        name: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years (6 Semesters)",
        fee: "₹45,000 / Year",
        eligibility: "12th Pass with minimum 50% marks (Any stream)",
        description: "Our flagship program designed to build core developer skills, web application design, database engineering, and software project management.",
        syllabus: ["C & C++ Programming", "Data Structures & Algorithms", "Operating Systems & Unix", "Relational DBMS", "Web Technology (Full-Stack)", "Java Programming & Python", "Major Internship & Project"]
      },
      {
        name: "B.Sc. (Computer Science)",
        duration: "3 Years (6 Semesters)",
        fee: "₹42,000 / Year",
        eligibility: "12th Pass with Mathematics / Computer Science",
        description: "A research and foundation-oriented degree focus on computation theory, discrete mathematics, digital electronics, and AI basics.",
        syllabus: ["Discrete Mathematics", "Digital Electronics", "Computer Networks", "Theory of Computation", "Artificial Intelligence & Logic Programming", "Numerical Methods"]
      },
      {
        name: "B.Com (Computerized Accounting)",
        duration: "3 Years (6 Semesters)",
        fee: "₹38,000 / Year",
        eligibility: "12th Pass with Commerce or Mathematics background",
        description: "Blends conventional business studies with modern computerized accounting packages, ERP tools, and financial databases.",
        syllabus: ["Financial Accounting", "Corporate Law", "E-Commerce Platforms", "Database Management for Business", "Tally ERP & GST Auditing", "Corporate Finance"]
      },
      {
        name: "BA (Information Technology)",
        duration: "3 Years (6 Semesters)",
        fee: "₹34,000 / Year",
        eligibility: "12th Pass in any stream",
        description: "A unique interdisciplinary degree combining liberal arts values with modern information technology tools and communications.",
        syllabus: ["Information Systems Management", "Communication & Tech Writing", "Digital Media & Web Design", "Cyber Laws & Tech Ethics"]
      }
    ]
  },
  {
    id: "pg",
    title: "Postgraduate (PG) Programmes",
    description: "High-tier academic programs featuring advanced software engineering, research pathways, and leadership competencies.",
    eligibilitySummary: "Bachelor's Degree in relevant field (BCA, B.Sc. CS, or B.Tech preferred)",
    courses: [
      {
        name: "MCA (Master of Computer Applications)",
        duration: "2 Years (4 Semesters)",
        fee: "₹65,000 / Year",
        eligibility: "BCA/B.Sc. (CS)/B.Tech or Graduation with Mathematics at 12th level",
        description: "A premium postgraduate professional course that builds top-tier programmers, cloud architects, database developers, and technical leaders.",
        syllabus: ["Advanced Design & Analysis of Algorithms", "Cloud Architecture & Security", "Enterprise Java & Node.js Microservices", "Data Science & Machine Learning", "Mobile App Development", "Industry Capstone Project"]
      },
      {
        name: "M.Sc. (Computer Science)",
        duration: "2 Years (4 Semesters)",
        fee: "₹55,000 / Year",
        eligibility: "B.Sc. (CS) or BCA with 55% aggregate marks",
        description: "Deep research and specialized training in cybersecurity, network protocols, artificial intelligence, and computation theory.",
        syllabus: ["Advanced Cryptography", "Neural Networks & Deep Learning", "Parallel & Distributed Computing", "Information Security & Digital Forensics", "Research Methodology & Thesis"]
      },
      {
        name: "MBA in IT Systems",
        duration: "2 Years (4 Semesters)",
        fee: "₹75,000 / Year",
        eligibility: "Bachelor's degree in any stream with 50% aggregate",
        description: "Prepares managers with strong technical background to lead global tech teams, IT consulting practices, and technology startups.",
        syllabus: ["Management Principles", "IT Project & Service Management", "ERP & Enterprise Systems", "Business Analytics & BI", "Strategic IT Leadership"]
      },
      {
        name: "M.Com (Business Tech)",
        duration: "2 Years (4 Semesters)",
        fee: "₹48,000 / Year",
        eligibility: "B.Com / BBA degree with relevant subjects",
        description: "Tailored for postgraduate students pursuing advanced financial modeling, automated corporate tax preparation, and big-data auditing.",
        syllabus: ["Advanced Corporate Accounting", "Digital Banking & Fintech", "Data Analytics in Finance", "Research Seminar & Internship"]
      }
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How can I take admission to Adarsh Institute?",
    answer: "You can apply easily by clicking the 'Enquiry Now' button on our website. Fill out the registration form with your basic academic details, choose your program, and submit. Our admissions counselor will contact you within 24 hours to guide you through verification, fee payment, and course allotment."
  },
  {
    question: "What documents are required for registration?",
    answer: "To finalize admission, you will need scanned copies of: 1) Your 10th & 12th Marksheets (and graduation marksheet if applying for PG), 2) Government-issued ID proof (e.g., Aadhaar Card or Passport), 3) Passport-sized photographs, and 4) Transfer/Migration Certificate from your previous school or university."
  },
  {
    question: "Are online classes and hybrid modes available?",
    answer: "Yes, indeed! To help working professionals and remote students, we offer standard hybrid programs. You get access to our online portal featuring live streams and recorded sessions. Regular practical examinations and lab sessions can be scheduled on-campus on weekends."
  },
  {
    question: "Is there placement assistance provided?",
    answer: "Absolutely. Adarsh Institute houses a dedicated placement cell. We conduct resume-building workshops, mock technical interviews, and invite premium tech companies and financial agencies for campus recruitment drives. Graduates receive lifetime access to our legacy alumni network and job boards."
  },
  {
    question: "What is the duration of each course category?",
    answer: "Regular short-term courses like Tally Prime or CCC last 2 to 3 months. Diplomas like DCA and ADCA span 6 to 12 months. Undergraduate degrees (BCA, B.Sc.) are strictly 3 years, and postgraduate programs (MCA, M.Sc.) are completed over 2 years."
  },
  {
    question: "Can I apply online from other regions?",
    answer: "Yes! Adarsh Institute accepts national and international online admissions. Our distance learning and collegiate modules are designed to onboard students globally, ensuring smooth digitial document verification and payment gateways."
  },
  {
    question: "Is there any merit scholarship available?",
    answer: "Yes, Adarsh Institute rewards brilliance. Students with 85% or higher in their 12th Board examinations are eligible for an automatic 20% to 50% tuition fee waiver. We also run an annual Adarsh Legacy Scholarship Test (ALST) for additional fee concessions."
  }
];

export const CONTACT_INFO = {
  address: "Adarsh Building, Computer Legacy Block, Tech City, Sector 62",
  phone: "+91 92126 21301",
  email: "info@adarshinstitute.edu",
  website: "www.adarshinstitute.edu",
  instagram: "https://www.instagram.com/adarsh_computereducationnarela?igsh=bnhodXlqbzB5Mnls",
  whatsappGroup: "https://chat.whatsapp.com/invite/AdarshComputerLegacyCircle",
  facebook: "https://facebook.com/adarsh.computer.legacy",
  youtube: "https://youtube.com/c/AdarshInstituteLegacy"
};
