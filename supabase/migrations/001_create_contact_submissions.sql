create table if not exists contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  created_at timestamptz default now()
);

alter table contact_submissions enable row level security;

create policy "Allow anonymous inserts"
  on contact_submissions
  for insert
  to anon
  with check (true);
