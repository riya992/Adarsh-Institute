-- Adarsh Institute enquiry form database reset.
-- Run this in Supabase Dashboard -> SQL Editor -> New query.
--
-- WARNING: This deletes the old public.enquiries table and its existing rows.
-- It does not delete unrelated Supabase/Auth tables.

create extension if not exists pgcrypto;

drop table if exists public.enquiries cascade;

create table public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  state text not null,
  course text not null,
  source text not null check (source in ('enrollment_form', 'modal_form')),
  created_at timestamptz not null default now()
);

create index enquiries_created_at_idx
  on public.enquiries (created_at desc);

create index enquiries_email_idx
  on public.enquiries (email);

alter table public.enquiries enable row level security;

create policy "Anyone can insert enquiries"
  on public.enquiries
  for insert
  to anon, authenticated
  with check (true);

create policy "Authenticated users can read enquiries"
  on public.enquiries
  for select
  to authenticated
  using (true);

grant usage on schema public to anon, authenticated;
grant insert on public.enquiries to anon, authenticated;
grant select on public.enquiries to authenticated;

notify pgrst, 'reload schema';
