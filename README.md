# Advokat Dejan Jovanović – Lawyer Website

Professional lawyer website for Advokat Dejan Jovanović, a Belgrade-based law firm. Built in Serbian (Latin script) with a clean, professional dark-navy and gold aesthetic.

## Tech Stack

- **Frontend:** Next.js 16 (App Router) + Tailwind CSS v4
- **Database:** Supabase (contact form submissions)
- **Hosting:** Vercel
- **Language:** TypeScript

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Fill in NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase Setup

Run the migration SQL in your [Supabase SQL Editor](https://supabase.com/dashboard/project/_/sql):

```sql
-- File: supabase/migrations/001_create_contact_submissions.sql
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
```

## Vercel Deployment

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the `advokat-dejan-jovanovic` GitHub repository
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy — target URL: `advokat-dejan-jovanovic.vercel.app`

## Folder Structure

```
/app
  layout.tsx               Root layout (Navbar + Footer)
  page.tsx                 Home page
  /o-nama/page.tsx         About page
  /oblasti-prava/page.tsx  Practice areas page
  /kontakt/page.tsx        Contact page
  /blog/page.tsx           Blog listing page
  /api/contact/route.ts    Contact form API route
/components
  Navbar.tsx               Sticky navigation bar
  Footer.tsx               Site footer
  HeroSection.tsx          Home hero section
  PracticeAreas.tsx        Practice areas grid
  WhyUs.tsx                Why choose us section
  ContactForm.tsx          Supabase-wired contact form
  BlogCard.tsx             Blog article card
/lib
  supabaseClient.ts        Supabase client singleton
/supabase
  migrations/001_create_contact_submissions.sql
/public
  (static assets)
.env.local                 Real secrets — gitignored
.env.local.example         Template with empty values
vercel.json                Vercel deployment config
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, bio preview, practice areas, why us, CTA |
| `/o-nama` | Full biography, education, bar membership |
| `/oblasti-prava` | All 6 practice areas with details |
| `/kontakt` | Contact form + office info + Google Maps |
| `/blog` | Blog article listing |
