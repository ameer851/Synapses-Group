# Site SEO handoff

- [x] Configure production build output in `dist/` and pass preview checks.
- [x] Apply Tier 1 metadata, social image, and five-URL sitemap updates.
- [x] Add About, Companies, and Insights pages with distinct metadata and shared navigation.
- [x] Fix preview import and stylesheet resolution; verify all routes, metadata, and assets.
- [x] Run the required package security update and confirm the project remains green.
- [x] Report deployment and infrastructure items that remain outside this code change.

## External handoff (requires account access)

- [ ] Deploy `main` to Vercel and confirm apex primary with `www` redirected to apex.
- [ ] Verify the domain in Google Search Console, submit the sitemap, and request indexing for five URLs.
- [ ] Remove the obsolete Google verification TXT record while keeping the active record.
- [ ] Confirm mail routing for the visible `.org` contact address; the supplied handoff reported no MX for `.co`.