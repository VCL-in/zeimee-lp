# FDE LP redesign

## Current implementation — 2026-09-08

Status: Draft; implemented locally, not deployed.

The user approved the final two abstract human illustrations, LINE Seed JP, and a LayerX-inspired color palette, then explicitly requested building the LP from that system. The root route and `/lp` now use this direction. The historical geometric/photo direction below is superseded.

- White editorial layout; blue violet `#534DFF`, navy `#152632`, light gray `#F6F6F7`. LINE Seed JP throughout. Existing installed Fontsource subsets are retained.
- Approved original illustrations: `public/lp/fieldwork-lineart.png` and `public/lp/review-lineart.png`, optimized with Next Image.
- Existing brand asset reused: `public/lp/zeimee-logo.png`, shared by the header, footer and mobile menu via `BrandLogo`. Original aspect ratio and transparent background are preserved. Older photos and colored people illustrations were reviewed and excluded to preserve the approved line-art direction.
- Latest hero decision: the user dropped abstract/3D creative in favor of an existing Zeimee screen in a PC mockup. `HeroVisual` renders a responsive CSS laptop frame. The old `hero-screen-review.png` has been replaced by `CurrentProductScreen`, a synthetic-data mock based on the live `/inbox` UI observed on 2026-09-08 and product `DESIGN.md` / `docs/ai/ui-map.md`. The user requested removing the visible demo caption; synthetic-data provenance remains documented here and in accessible screen text. No customer data was copied into LP assets. No continuous animation or WebGL dependency. Earlier generated concepts remain in `design/hero-3d/` as history.
- Copy simplified by user request: removed hero supporting paragraphs, decorative English, repeated tags/captions; concrete service headings and concise process/FAQ answers.
- User-selected structure: Hero → Zeimeeとは → Zeimeeが選ばれる理由 → contact CTA → 導入ツール一覧 → contact CTA → 導入事例 → お知らせ → FAQ → contact form → footer. Tool listing now includes the eight names explicitly supplied by the user on 2026-09-08; no additional capability, availability or performance claims are added; cases/news now link to verified company press releases (sources below). No case studies or announcements are fabricated. Intermediate CTAs link to the final form.
- Motion: brief entry/reveal transitions; no decorative ribbons or scroll interception. A three-step review demo supports click and arrow/Home/End keyboard navigation. Reduced-motion users receive static transitions.
- The existing contact API contract and delivery integration remain intact. Real email delivery was not exercised.
- Validation: production build and TypeScript passed; changed application TSX files pass ESLint. Desktop and 390px mobile checked in the browser without horizontal overflow; illustrations load; demo click/keyboard state changes, FAQ, form required-field validation, mobile dialog and destination focus passed. Browser error log empty during verification.
- Figma sync remains a separate unresolved issue; the user authorized LP implementation without waiting for it.

## Historical design notes — Superseded

Updated: 2026-09-08
Status: Superseded visual concept; not deployed to production.

The user rejected the strong visual resemblance to LayerX on 2026-09-08. The geometric ribbons and related visual direction below are historical implementation notes, not the accepted design direction. The [new reference study](../zeimee-strategy/research/2026-09-08-fde-lp-design-references.md) selects Takram, Work & Co and Ramp for distinct reference roles. The current local preview still shows the previous implementation; this research turn did not rebuild it.

## Intent

Present Zeimee as an FDE service for accounting and tax firms. Explain discovery, design, implementation, validation and operational improvement. The main action is a consultation about the firm's workflow.

## Design

White, navy and vivid blue; oversized Japanese and English typography; generous editorial spacing; original geometric photo composition and HTML/CSS workflow diagrams. Visual reference: https://layerx.co.jp/ (reviewed 2026-09-08). Original AI-generated concept photography is explicitly labeled; no LayerX assets or copy are reused. Responsive layouts, native keyboard-accessible FAQ disclosures, visible focus styles and reduced-motion support. Page content is server-rendered, with small client components for the contact form, menu and motion controller.

## Motion and research

- Hero text enters character by character; the photograph and geometric planes move with scroll.
- A sticky brand-message section combines crossing blue ribbons and reversible character rotation tied to scroll position.
- The full header becomes a compact Menu; the top link includes a reading-progress ring. Keyboard focus can retain the full header without overlapping controls.
- The native modal menu includes staggered entry, explicit Tab wrapping, Escape dismissal and focus restoration. Section navigation focuses the destination instead of returning focus to the opener.
- Supporting blocks reveal once; the process line advances with reading progress; buttons and cards respond on hover.
- A pause control and `prefers-reduced-motion` support retain readable content. Pausing preserves page height and scroll position. Native scrolling is not intercepted.
- Scroll updates use a scheduled animation frame and cached geometry, without React rendering each frame or adding a motion dependency.

Primary-source research covers OpenAI's Astra and frontend design guidance, Google web.dev, W3C WAI, NN/G and direct LayerX observation. Findings, source links, a reusable design brief and evidence limits are recorded in [the strategy research document](../zeimee-strategy/research/2026-09-08-lp-design-codex-astra.md).

## Content and integration

The root and `/lp` share the redesigned page. Contact fields keep the existing `/api/contact` contract. Sending states, errors and successful responses are announced accessibly. No email has been sent as part of verification. Local sending requires the existing email configuration; this change does not add credentials. The company link points to the existing public company website.

Examples are explicitly illustrative. No unsupported case studies, impact figures, prices or universal accounting integrations are claimed. Public positioning is recorded in the strategy repository's decision `2026-09-07-fde-lp-positioning`.

## Verification

- Local root page returns HTTP 200.
- `npm run build`: passed; `/` and `/lp` statically prerendered, contact route retained.
- `npm run lint`: passed.
- Production-build preview inspected at 1440×900, 390×844 and 375×812, plus the app's natural 601px width. No horizontal page overflow at these widths.
- Hero and sticky-story layouts inspected; scroll progress and character transforms advance and reverse. Service cards reveal as they enter view; process progress reaches its final step.
- Menu opening, initial focus, forward/backward Tab wrapping, Escape restoration, destination focus and scroll-lock release verified. Fixed a destination-focus bug and overlapping header controls discovered during verification.
- Pause/resume verified: text remains visible, pending reveals become readable, and page height/scroll position remain unchanged.
- Mobile FAQ expands, consultation links navigate correctly, and empty required fields block form submission with native validation. No contact email was sent.
- Browser console: no errors or warnings observed in the final preview session.
- OS reduced-motion and no-JavaScript fallbacks were reviewed in code, not tested by changing the browser/OS environment. No screen-reader audit, low-end-device performance measurement or production Core Web Vitals claim is made.
- Production deployment, live email delivery and conversion effects remain unverified.

## Reasons updated — 2026-09-08

User-selected headings: 会計業務特化のFDE / 事務所専用のカスタマイズ開発 / 対面出社でのヒアリング・開発 / 対面での徹底サポート. Four concise cards, without additional support-frequency or geographic claims.

User-selected closing message below the four reasons: 「作っておわりではなく、事務所に浸透するAIツールを開発」. Paired with the approved collaboration line illustration.

## Public case / news sources — verified 2026-09-08

The official homepage and sitemap did not list case/news detail pages. Reused company-issued PR TIMES announcements, with direct source links on each LP item:
- Case: 成和税理士法人, full-scale verification announced 2026-08-06. https://prtimes.jp/main/html/rd/p/000000003.000183909.html . The 70% reduction is a target, so no achieved reduction is claimed.
- News: JAFCO SEED Pitch 2026 runner-up, announced 2026-08-07 (event 2026-08-06). https://prtimes.jp/main/html/rd/p/000000004.000183909.html
- News: JPY 20 million raised from Skyland Ventures, announced 2026-08-06. Same release as the case above.
- News: early access launch, announced 2026-05-25. https://prtimes.jp/main/html/rd/p/000000002.000183909.html

## Tool catalogue mockups — 2026-09-08
User requested eight tool screen images. Original SVG UI concepts live in public/lp/tools; regenerate with design/tool-mocks/generate.py. All displayed records are synthetic. These images and descriptions communicate proposed tool workflows, not verified screenshots or a guarantee that each displayed function is released. Visual language follows the existing Zeimee review mock.

## Official team and company content — 2026-09-09
User requested the team introduction and company information from https://zeimee.com/ and supplied screenshots. Reused existing official portrait assets team-tax-advisor.png and team-ai-engineer.png. Names, roles, biographies and address verified against official homepage on 2026-09-09. Mission and business description follow user-supplied company screenshot. Team is within About; company information follows the contact form.

## 2026-09-09 SEO pages

- Added three service detail pages and an editorial field-development case. Source: https://note.com/shuma_sajimoto/n/n3824385dbdf2 (original 2026-08-23, checked 2026-09-09). The user authorized reuse/editing of their representative's article. Case content is rewritten with attribution, and does not infer the unnamed firm's identity or generalize a single test into an accuracy guarantee.
- Tool pages describe scoped FDE work, not an assertion that every integration is available as an off-the-shelf product. Screen assets remain synthetic demonstrations.
- Native links from detail pages back to homepage fragments intentionally avoid the observed client-router hash concatenation (/#tools#contact).
- LINE Seed JP page-content subsets can be regenerated using design/fonts/subset.py with fonttools[woff]. The original full font is retained as fallback for characters outside the subset. Public font redistribution license: public/fonts/OFL.txt. New source text still renders via the fallback before regeneration.
