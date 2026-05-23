# FileMayor Marketing Materials

_Started 2026-05-21 19:41 UTC_

---

## User

Visit filemayor.com and create a impactful pitch deck. And also socials carousels to market the product. Investors and techies both important targets

## Assistant

_[tool: questions_v2]_

_[tool: web_fetch]_

I'll dig into Filemayor and pull together an investor + techie pitch deck plus marketing carousels. Before I start designing, a few questions to get the direction right:

## User

Questions answered:
- deck_length: Decide for me
- deck_purpose: A bit of all
- audience_split: One deck that works for both (recommended)
- tone: Mix — bold opens, calm body
- aesthetic: 5
- story_emphasis: Local-first / privacy moat, Solo founder from South Africa story, Distribution: 25k npm installs, CLI+Desktop+PWA, Pricing & unit economics, The Chevza Doctrine (6 security layers), Decide for me
- include_ask: Decide for me
- carousel_platform: All of the above (1080×1350 works on all)
- carousel_count: 5+ carousels (full launch kit)
- carousel_topics: "Your AI can suggest. FileMayor can act." hero, 5 verbs walkthrough (scan→explain→cure→apply→undo), Founder story (Chevza / SA), Before/after: messy ~/Downloads, Decide for me
- real_numbers: Still very new so maybe the plus 700 installs in the week on npm
- variations: No — just commit to one

## Assistant

_[tool: update_todos]_

_[tool: copy_starter_component]_

_[tool: copy_starter_component]_

Great, I have what I need. Let me build:
1. **Pitch deck** — ~16 slides, editorial+terminal aesthetic, with speaker notes carrying the narrative
2. **Social carousels** — 5 carousels at 1080×1350 on a design canvas

Starting now.

_[tool: write_file]_

## Assistant

_[tool: set_project_title]_

_[tool: web_fetch]_

_[tool: web_fetch]_

## Assistant

## Assistant

_[tool: write_file]_

_[tool: web_fetch]_

Got rich content from the site. Now building the deck.

_[tool: show_html]_

_[tool: show_to_user]_

_[tool: read_file]_

Now the carousels.

_[tool: write_file]_

_[tool: write_file]_

Now let me build a simple index page linking both, and verify everything.

_[tool: write_file]_

_[tool: update_todos]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Done — launch kit is live on the index page.

**What's in the kit:**

📑 **Pitch deck** — 16 slides at 1920×1080, dual-audience (investors + engineers). Opens bold ("Your AI can suggest. FileMayor can act."), settles into calm body for the moat/doctrine/business model, closes with a $1.2M pre-seed ask. Speaker notes included — press `S` in the deck to see them.

🎠 **Social carousels** — 5 carousels × 7 slides = 35 frames at 1080×1350 (works for LI, X, IG):
1. **Hero manifesto** — suggest vs. act
2. **Five verbs walkthrough** — real CLI output, devs
3. **Founder story** — Chevza, solo, South Africa
4. **Before/after ~/Downloads** — most shareable
5. **MCP + Claude** — 30-second setup, AI-builder bait

**Aesthetic** matches filemayor.com: warm cream `#f5f1e8`, terra `#a8552a` accent, terminal green `#a3c977`, Instrument Serif italic for headlines, Geist Mono for command lines. Dark slides break the rhythm at the wedge / doctrine / closing moments.

**Caveats / next steps:**
- The $1.2M ask + use-of-funds breakdown is a placeholder — swap in your real numbers before sending
- TAM/SAM/SOM figures on the market slide are rough estimates; replace with your own
- Carousels are on a pan/zoom canvas — to export individual frames, click any slide's expand icon and screenshot, or print the page
- If you want a separate dev-only deck or a 60-second investor cut, say the word

## User

Can you also develop a brand identity doc

## User

Send this design to Canva: index.html

## Assistant

_[tool: questions_v2]_

_[tool: tool_search_tool_bm25]_

I see two requests here — let me handle both:

**Canva** — I don't see a Canva connector available. To send the design to Canva, please connect it via the **Connectors panel** (no reload needed — once connected, I'll pick it up automatically). 

While you do that, a quick check: `index.html` is just the launch-kit landing page (two link cards). I'm guessing you'd rather send the **Pitch Deck** or the **Social Carousels** to Canva, since those are the actual editable deliverables. Want me to bundle one of those instead? Or do you want a downloadable self-contained HTML fallback while we wait?

**Brand identity doc** — happy to build it. Quick questions so I aim correctly:

## User

Export this design as a PPTX (screenshot mode): index.html

## Assistant

_[tool: show_to_user]_

The `index.html` file is the landing page (just two link cards) — not a slide deck, so PPTX wouldn't make sense for it. You almost certainly want the **Pitch Deck** exported. Let me do that.

_[tool: gen_pptx]_

_[tool: sleep]_

_[tool: gen_pptx]_

_[tool: show_to_user]_

_[tool: sleep]_

_[tool: gen_pptx]_

The export is failing because the preview pane isn't showing the deck. Could you click the **`FileMayor Pitch Deck.html`** tab in the preview pane to make sure it's actively displayed, then ask me to retry? The exporter reads from your live preview, and right now it can't see it.

Once it's open, just say "retry" and I'll run the export.

## User

Questions answered:
- scope: All of the above
- format: Slide-style brand book (1920×1080, presentable)
- depth: Deep — full brand book with examples, do/don'ts, applications
- audience: Public-facing reference, Investors, Internal (you + future hires), Press / partnerships
- logo_status: Decide for me

## Assistant

_[tool: gen_pptx]_

Great — deck is showing now. Let me first complete the PPTX export, then build the brand book.

## Assistant

_[tool: update_todos]_

_[tool: write_file]_

PPTX downloaded. ✓ Now building the brand book.

_[tool: str_replace_edit]_

_[tool: update_todos]_

_[tool: done]_

_[tool: fork_verifier_agent]_

The flagged sub-24px text is intentional brand chrome (eyebrows, page numbers, captions in monospace) and the "overlaps" are italic-serif glyph bounding boxes — both expected. Forking the verifier to confirm visually.Done — brand book is live and linked from the index.

**📘 FileMayor Brand Book — 29 pages, 1920×1080:**
- **Part 1** Essence — brand idea, mission/vision/values, personality (5 adjectives)
- **Part 2** Voice — 6 principles + "say this, not that" examples + tagline architecture
- **Part 3** Naming — FileMayor / Chevza / verbs / Doctrine / surfaces
- **Part 4** Logo — wordmark system, endorsement lockup, clearspace + min sizes, 8 misuse examples
- **Part 5** Color — palette of 5, 70/20/7/3 proportions, accessibility ratios
- **Part 6** Type — 3-family system (Instrument Serif / Geist / Geist Mono), full scale, 3 pairing laws
- **Part 7** Motifs — the dot, the prompt, the rule, the chip + terminal block anatomy
- **Part 8** Imagery — placeholder rule, do's & don'ts
- **Part 9** Application — pitch deck, social, web + CLI, Chevza Doctrine pillar, anti-patterns, close

The book matches the deck and carousels exactly — same warm cream, terra accent, italic serif voice, terminal motifs. Use it as a public reference doc (link it from filemayor.com/brand if you want) and as onboarding for future hires.

**Also delivered earlier this turn:** PPTX export of the pitch deck (`filemayor-pitch-deck.pptx`, 16 slides with speaker notes) — should be in your downloads.

**On Canva:** still need to be connected before I can push designs over. Let me know when you've connected it and which file to send (the deck, the carousels, or the brand book).

## User

Send this design to Canva: FileMayor Brand Book.html

## Assistant

_[tool: copy_files]_

_[tool: tool_search_tool_bm25]_

Canva isn't connected yet. Please connect it via the **Connectors panel** (after you authorize in the new tab, switching back picks it up automatically — no reload needed).

While you do that, I'll bundle the brand book as a self-contained HTML you can download as a fallback.

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

_[tool: present_fs_item_for_download]_

Canva isn't connected yet — please connect it via the **Connectors panel** and then re-ask. In the meantime, here's the brand book as a single offline HTML file (download above). Once Canva is connected, I'll push it straight over.

## User

Send this design to Canva: FileMayor Brand Book.html

## Assistant

_[tool: get_public_file_url]_

_[tool: tool_search_tool_bm25]_

Canva connected. Pushing the brand book now.

_[tool: canva__import-design-from-url]_

✅ Brand book is in Canva — 29 pages imported successfully.

**Open in Canva:** [Edit the design →](https://www.canva.com/d/PnDoacnV6_3Ikja)

[View-only link](https://www.canva.com/d/mgy2XIubfXjcdBF)

Want me to push the **Pitch Deck** and **Social Carousels** over too?

## User

Send this design to Canva: FileMayor Brand Book.html

## Assistant

_[tool: copy_files]_

User edited the brand book — re-bundling with the latest version.

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

_[tool: get_public_file_url]_

_[tool: canva__import-design-from-url]_

✅ Updated brand book re-imported into Canva — 29 pages.

**Edit in Canva →** https://www.canva.com/d/k7UjtVf9f48BDpt

[View-only](https://www.canva.com/d/wX-eFzmdNuly-IM)

## User

Save as standalone HTML: index.html

## Assistant

_[tool: read_file]_

_[tool: copy_files]_

Quick note: index.html just links to the other 3 HTMLs (deck, carousels, brand book). When bundled as a single offline file, the **navigation links won't work** because the linked files aren't in the bundle — you'd need to bundle those separately too. Proceeding anyway so you have a standalone landing page.

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: present_fs_item_for_download]_

Downloaded above ↑

Heads up: as noted, the navigation links inside this standalone file point to the deck / carousels / brand book — those aren't included in this bundle. Want me to bundle each of those as standalone HTMLs too?

