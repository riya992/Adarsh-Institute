-- Run this in Supabase Dashboard → SQL Editor → New query → Run

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  state text not null,
  course text not null,
  source text not null check (source in ('enrollment_form', 'modal_form')),
  created_at timestamptz not null default now()
);

create index if not exists enquiries_created_at_idx on public.enquiries (created_at desc);
create index if not exists enquiries_email_idx on public.enquiries (email);

alter table public.enquiries enable row level security;

-- Allow anonymous website visitors to submit enquiries
create policy "Anyone can insert enquiries"
  on public.enquiries
  for insert
  to anon, authenticated
  with check (true);

-- Only authenticated admins can read (adjust later if you add an admin dashboard)
create policy "Authenticated users can read enquiries"
  on public.enquiries
  for select
  to authenticated
  using (true);
