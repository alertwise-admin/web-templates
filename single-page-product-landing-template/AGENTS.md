# AGENTS

This file tracks contributors and project ownership for this template repository.

## Project
- **Name**: Alertwise(TM) Product Landing Page
- **Path**: `index.html`
- **Status**: Rebranded from a generic public template for Alertwise and prepared for external-link hardening.

## Content Rules
- Keep all copy in English.
- Do not reference external template vendors, providers, or third-party branding.
- Use Alertwise(TM) branding consistently in titles, sections, forms, and footer.

## Security and Outbound Data Rules
- Do not add analytics or tracking tags (`gtag`, GTM, GA, pixels, Hotjar, Mixpanel, Segment, PostHog, Sentry) unless explicitly approved.
- Do not post form data to third-party domains.
- Prefer local/static assets over third-party hosted assets.
- Any new outbound endpoint in HTML/CSS/JS must be documented in this file.

## Current External References (Audit)
- `index.html`: YouTube link in video section (`https://www.youtube.com/...`).
- `index.html`: Embedded Google Maps iframe (`https://maps.google.com/...`).
- `index.html`: Contact form action is `#` (no configured outbound form endpoint).
- `assets/js/plugins.js`: AJAX submit logic exists and posts to the form action URL.

## Contributors
- **Owner**: Alertwise Team
- **Maintainer**: Web Templates Team
- **Last Updated**: 2026-02-16
