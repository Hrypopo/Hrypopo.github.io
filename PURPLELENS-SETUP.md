# PurpleLens — go-live setup (about 10 minutes)

The site is wired for real bookings, print sales, and scheduling. You just need to
paste in three things. All have free tiers. Edit `purplelens.html` and replace the
placeholders below, then re-upload the file to GitHub.

---

## 1. Booking form emails — Web3Forms (free, no account)

The booking form already sends to your studio inbox. To switch it on:

1. Go to **https://web3forms.com**, enter `hloninchefu@gmail.com`, and verify the email.
2. Copy your **Access Key** (a long code like `a1b2c3d4-...`).
3. In `purplelens.html`, find:
   `value="YOUR-WEB3FORMS-ACCESS-KEY"`
   and replace `YOUR-WEB3FORMS-ACCESS-KEY` with your key.

That's it — enquiries now land in your inbox, with the customer's email as reply-to
so you can reply in one click.

**Optional — auto-confirm to the customer:** in the Web3Forms dashboard, turn on
the **Autoresponder** and write a short "thanks, I'll be in touch" message. Now the
customer gets an automatic confirmation too.

---

## 2. Print sales — Paystack (ZAR, South-Africa friendly)

1. Create an account at **https://paystack.com** (free; takes a card-less signup).
2. Go to **Payment → Payment Pages** and create one page per print
   (set the price, e.g. R1,450, and a title like "Dusk, Highveld — A2").
3. Copy each page's link and replace the matching placeholder in `purplelens.html`:
   - `YOUR-PAYSTACK-LINK-DUSK`   → Dusk, Highveld
   - `YOUR-PAYSTACK-LINK-SMOKE`  → Smoke & Gold
   - `YOUR-PAYSTACK-LINK-AMBER`  → Still Life, Amber
   - `YOUR-PAYSTACK-LINK-WINDOW` → Quiet Window

Buyers now check out securely; Paystack emails you on every sale and handles payouts.

---

## 3. Scheduling — Cal.com (free)

1. Sign up at **https://cal.com** and create your shoot event types
   (e.g. "Portrait session", "Discovery call").
2. Copy your handle (e.g. `cal.com/chevza`).
3. In `purplelens.html`, replace `YOUR-CAL-HANDLE` in the
   "Check live availability" link with your handle.

Clients can now self-book a time and both of you get calendar invites + reminders.

---

## Swapping in real photos

Each photo is a CSS background. In `purplelens.html`, find the `.img` elements and
replace the `url('https://picsum.photos/...')` part with your own image URL (or a
local path like `photos/portrait-01.jpg` if you add an image folder to the repo).
The gradient after the comma stays as a fallback.

## Later: the full custom admin app

When bookings/sales grow, the next step is a Next.js app on Vercel (which you already
use for FileMayor) with a login-protected admin dashboard, a database, photo uploads,
and automated branded emails. Ping me when you're ready and we'll build it.
