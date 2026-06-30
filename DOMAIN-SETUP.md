# Connecting chevza.com to this site (GitHub Pages)

This repo is published with **GitHub Pages** and is being pointed at the custom
apex domain **chevza.com** (registered at **domains.co.za**).

The repo side is already done: a [`CNAME`](CNAME) file containing `chevza.com`
ships on the default branch, and every canonical / OG / sitemap / robots URL
uses `https://chevza.com`. What's left is **DNS** (at domains.co.za) and
**flipping HTTPS on** (in GitHub).

> Do the DNS step first. DNS changes take time to propagate (minutes to a few
> hours), so starting it early means GitHub can verify the domain sooner.

---

## Step 1 — Add DNS records at domains.co.za

1. Log in to the **domains.co.za Customer Portal**.
2. Left menu → **Manage Services → Domains**.
3. Find **chevza.com** in the list and open it (the **Manage** / cog button on
   its row).
4. Open the **DNS** area — it may be called **DNS Management**, **Manage DNS**,
   **Zone File**, or **Advanced DNS**.
5. **Remove** any existing default `A` record on the root/`@` that points to a
   parking page or web-hosting IP, and any default `CNAME` on `www` that points
   to hosting. (Leave `MX`/email records alone if you use email on the domain.)
6. **Add the four GitHub Pages `A` records** on the root host (`@`, sometimes
   shown as blank or `chevza.com`):

   | Type | Host / Name | Value | TTL |
   |------|-------------|-------|-----|
   | A | @ | `185.199.108.153` | 3600 |
   | A | @ | `185.199.109.153` | 3600 |
   | A | @ | `185.199.110.153` | 3600 |
   | A | @ | `185.199.111.153` | 3600 |

7. *(Optional but recommended — IPv6)* add the four `AAAA` records on `@`:

   | Type | Host / Name | Value |
   |------|-------------|-------|
   | AAAA | @ | `2606:50c0:8000::153` |
   | AAAA | @ | `2606:50c0:8001::153` |
   | AAAA | @ | `2606:50c0:8002::153` |
   | AAAA | @ | `2606:50c0:8003::153` |

8. **Add the `www` redirect** so `www.chevza.com` works too:

   | Type | Host / Name | Value | TTL |
   |------|-------------|-------|-----|
   | CNAME | www | `hrypopo.github.io.` | 3600 |

   (The trailing dot on `hrypopo.github.io.` is correct if the form expects an
   FQDN; if it rejects it, drop the dot.)

9. **Save** the zone.

> If domains.co.za won't let you edit individual records (only "park" or
> "forward" the domain), switch the domain's mode to **"Use our DNS / Manage
> DNS"** or **custom DNS / advanced zone** first, then add the records above.

---

## Step 2 — Publish the domain on GitHub

The `CNAME` file does this automatically once it's on the **default branch**.
Either:

- **Merge the open pull request** (it adds `CNAME` + the URL migration), **or**
- In the repo: **Settings → Pages → Custom domain**, type `chevza.com`, **Save**
  (GitHub will create/commit the `CNAME` for you).

GitHub will then run a DNS check. It may show "DNS check in progress" until the
records from Step 1 propagate — that's normal.

---

## Step 3 — Enforce HTTPS

1. After the DNS check passes, GitHub auto-provisions a TLS certificate
   (can take a few minutes up to ~24h the first time).
2. In **Settings → Pages**, tick **Enforce HTTPS**.

That's it — `https://chevza.com` (and `https://www.chevza.com`) will serve the
site, and `hrypopo.github.io` will redirect to it.

---

## Verifying (optional, from any terminal)

```sh
# A records should list the four 185.199.108–111.153 addresses
dig +short chevza.com

# www should resolve to the github.io host
dig +short www.chevza.com

# once live, headers should show GitHub.com and a 200
curl -sSI https://chevza.com | head -n 1
```

GitHub's own reference: **Settings → Pages**, and the docs at
<https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site>.

---

## Troubleshooting

- **"Domain does not resolve to the GitHub Pages server"** — DNS hasn't
  propagated yet, or an old `A`/parking record is still present. Re-check Step 1.
- **Certificate stuck / HTTPS greyed out** — remove and re-add the custom domain
  in Settings → Pages to re-trigger provisioning after DNS is correct.
- **`www` doesn't work** — confirm the `www` `CNAME` → `hrypopo.github.io`.
- **Email broke** — you removed an `MX` record; restore your mail provider's
  `MX`/`TXT` records (only the `A`/`AAAA`/`www` records above should change).
