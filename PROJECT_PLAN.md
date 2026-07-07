# Project Plan — Corporate Website (Fuel/Oil/Gas/ERP/Cybersecurity/Physical Security)

Execution plan derived from the SRS. Focus: how to actually build and ship this, in what order, with what stack, who does what, and what's needed from the client before work can start.

---

## 1. Recommended Technology Stack

**Option A (static, Section 24.1) is the wrong default here** — the SRS's own Phase 3/4 roadmap calls for a support request form with attachments, a future customer portal, CRM integration, and admin content management. Building static now and rewriting later costs more than starting with the right foundation.

**Recommendation: Option C, scoped down for Phase 1 — a custom web app, not a full CMS.**

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router), TypeScript | SSG/ISR for marketing pages = SEO + speed; same codebase scales to portal/dashboard in Phase 4 without a rewrite |
| Styling | Tailwind CSS + shadcn/ui | Fast to build, consistent design tokens, easy responsive work |
| Content | MDX or JSON content files in repo for Phase 1 (products/services/industries are structured, repeating data — model as typed content collections, not free-text CMS) | Avoids building/paying for a CMS before there's a real editing workload |
| Forms backend | Next.js API routes → email via transactional provider (Resend/SendGrid) + DB row (Postgres) for every submission | Satisfies FR-053/054 without a separate service |
| Database | PostgreSQL (Neon/Supabase or VPS-hosted) | Only needed for form storage + future admin/portal; skip if truly Phase-1-only and email delivery is deemed sufficient |
| Hosting | Vercel (fastest path) or VPS (Hetzner/DigitalOcean) + Coolify/Docker if the company wants full data control in-region | Either satisfies NFR-001/004/010; VPS preferred if company has KRG data-residency preference |
| Spam protection | Cloudflare Turnstile (or hCaptcha) | Free, low-friction, satisfies NFR-007/FR-055 |
| Analytics/SEO | Plausible or GA4 + `next-sitemap` + `next-seo` | FR-058–064 |

**When to introduce a real CMS:** Phase 2/3, once blog + case studies + frequent non-dev edits become real (FR-047–051). At that point, bolt on a headless CMS (Sanity or Strapi) rather than rebuilding the frontend — Next.js content collections migrate cleanly into headless CMS queries.

**Decision needed from you before dev starts:** Vercel vs. self-hosted VPS (affects cost, control, deployment pipeline). Flagging as open — see Section 8.

---

## 2. Information Architecture (Phase 1 scope)

Full sitemap per SRS Section 29, trimmed to what ships in Phase 1 (Section 25.1) vs. deferred:

**Phase 1 pages (13):**
`/` `/products` `/services` `/industries` `/solutions` `/cybersecurity` `/cctv-physical-security` `/products/location-based-task-management` `/about` `/contact` — plus at least stub detail pages for the flagship products (Fuel ERP, Gas Station POS, Fuel Card/Quota) since these carry the core value proposition.

**Deferred to Phase 2+:** `/case-studies`, `/support`, `/faq`, `/blog`, remaining 9 product detail pages, remaining 10 service detail pages, remaining industry detail pages beyond the summary section.

Rationale for trimming: SRS Section 25.1 explicitly scopes Phase 1 to 10 sections plus Contact; building all 12 product pages and 12 service pages in full detail before launch delays time-to-market for no marketing benefit — a strong Products/Services **index page** with rich cards (FR-009/010, FR-024) covers the same information density and detail pages can ship incrementally in Phase 2 without blocking launch.

---

## 3. Phased Delivery Plan

### Phase 0 — Setup & Content Collection (Week 1)
Nothing gets built well without this. Blocking items from the client (Section 2.6 assumptions):
- Final company/brand name, logo, color palette
- Contact details: phone, email, office address, WhatsApp, social links, working hours
- Decision: publish real customer names/logos, or anonymized case studies only (Section 11)
- Final product/service names (may differ from SRS placeholder names)
- Copy for hero headline/subheadline (SRS suggests defaults — confirm or replace)
- Photography/imagery direction: stock vs. real site photos (stations, CCTV, dashboards)
- Vercel vs. VPS hosting decision, domain registrar access

**Deliverable:** signed-off content brief + brand assets folder + finalized Phase-1 sitemap.

### Phase 1 — Core Corporate Website (Weeks 2–6)
1. **Week 2 — Design system & wireframes:** color/type tokens (UI-002/003), component library (hero, product card, service card, industry card, CTA band, nav, footer), low-fi wireframes for Home + 2 template types (listing page, detail page).
2. **Week 3 — High-fidelity design:** Home, Products index, Services index, Contact, About. Review checkpoint with client.
3. **Weeks 4–5 — Build:** Next.js scaffold, shared layout/nav/footer (FR-069–071), all Phase 1 pages, contact form + validation + email delivery + spam protection (FR-042–057), SEO metadata per page (FR-058–064), responsive QA (UI-005).
4. **Week 6 — Content population, QA, launch prep:** load real copy/images, cross-browser test (Section 2.4), Lighthouse/perf pass (NFR-001–003), HTTPS + domain cutover (NFR-004), sitemap.xml + robots.txt (FR-060/061), analytics wired up.

**Exit criteria:** Section 26 acceptance criteria items 1–17 all pass.

### Phase 2 — Trust & Content Expansion (Weeks 7–10, post-launch)
Case studies page + 2–4 real/anonymized case studies, FAQ page, remaining product/service detail pages (prioritize by sales team's most-asked-about items), downloadable brochures, customer logos if approved.

### Phase 3 — Support & Multilingual (scope after Phase 2 ships)
Support page + support request form with attachment upload, lightweight admin (Content Manager + Support User roles per FR-050), Kurdish Sorani + Arabic translations with RTL layout (FR-065–068), knowledge base.

### Phase 4 — Advanced Customer Platform (future, separate scoping exercise)
Customer login, ticketing, demo portal, CRM integration — do not scope in detail now; revisit once Phase 1–3 traffic/lead data shows demand.

---

## 4. Team & Roles

| Role | Responsibility | Phase 1 effort (rough) |
|---|---|---|
| Project lead / PM | Content collection, client sign-offs, timeline | throughout |
| UI/UX designer | Design system, wireframes, hi-fi comps | Weeks 2–3 |
| Frontend/full-stack dev | Build, forms, SEO, deployment | Weeks 4–6 |
| Copywriter | Refine SRS placeholder copy into final voice per page | Weeks 2–4 |
| SEO specialist (part-time/consult) | Keyword mapping (Section 18.1), metadata review | Week 6 |

For a solo/small-team build, designer+dev can be the same person using shadcn/ui to compress the design phase.

---

## 5. Form & Data Handling

- Contact form (FR-043–045) and Support form (FR-041, Phase 3) both post to an API route → send email via Resend/SendGrid to the company inbox → insert row into Postgres `submissions` table (type, payload JSON, created_at) so nothing is lost if email delivery fails.
- Turnstile/hCaptcha token verified server-side before processing (NFR-007).
- Success/error UI states per FR-056/057.
- No PII beyond what's asked; no payment processing in Phase 1 (Section 27 confirms out of scope).

---

## 6. SEO Baseline (build into Phase 1, not bolted on after)

- Per-page `<title>`/meta description driven by content collection frontmatter (FR-058).
- `next-sitemap` generates `/sitemap.xml` and `/robots.txt` at build time (FR-060/061).
- Semantic heading hierarchy enforced in shared page templates (FR-062).
- All images require alt text at the content layer — make it a required field, not optional (FR-063).
- Seed initial copy with the keyword list in Section 18.1 (Fuel ERP KRG, Gas station POS Kurdistan, etc.) naturally in H1/H2s and body copy, not stuffed.

---

## 7. Risks (carried from SRS Section 28) and how this plan addresses them

- **Generic-sounding site:** mitigated by leading every page with fuel/energy-sector language and the Solutions page's problem-first framing (Section 9) rather than a features list.
- **Too many products overwhelm visitors:** Phase 1 ships index pages with clear category grouping + the Solutions page as the problem-based entry point; full detail pages roll out gradually.
- **Customer names unusable:** case studies page (Phase 2) is built to support anonymized entries from day one, not retrofitted.
- **Multilingual delay:** explicitly deferred to Phase 3; Phase 1 ships English-only, but page templates should avoid hardcoding LTR assumptions in layout CSS so RTL later is a styling change, not a rebuild.
- **Admin panel complexity:** avoided in Phase 1 by using file-based content collections instead of a CMS; CMS introduced only when Phase 2/3 editing volume justifies it.

---

## 8. Open Decisions (need your input before Phase 0 closes)

1. Hosting: Vercel (faster, less ops) vs. self-hosted VPS (more control/data residency)?
2. Case studies: real customer names/logos approved, or anonymized only?
3. Launch language: English-only Phase 1 confirmed, or is Kurdish/Arabic needed sooner?
4. Do you have existing brand assets (logo, colors) or does this plan need to include a mini brand identity pass?

---

## 9. Immediate Next Steps

1. Answer the open decisions in Section 8.
2. I set up the Next.js + Tailwind scaffold and repo structure.
3. Build the design system (tokens + core components) so every subsequent page is fast to assemble.
4. Build Home page first as the design/content template others follow, then Products/Services/Industries/Solutions/Cybersecurity/CCTV/About/Contact.
