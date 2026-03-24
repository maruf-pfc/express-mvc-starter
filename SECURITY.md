# Security Policy

## Supported Versions

This is a starter template. Security fixes are applied to the `main` branch only.

| Version | Supported          |
| ------- | ------------------ |
| latest  | ✅ Yes              |

## Reporting a Vulnerability

**Please do NOT open a public GitHub issue for security vulnerabilities.**

Instead, report vulnerabilities privately by emailing:

**📧 mdmarufsarker.mms@gmail.com**

Include the following in your report:

- A description of the vulnerability
- Steps to reproduce it
- Potential impact / affected versions
- Any suggested fix (optional)

You will receive a response within **72 hours**. If the vulnerability is confirmed, a fix will be released as soon as possible and you will be credited in the changelog (unless you prefer to remain anonymous).

## Security Best Practices for Users

When using this starter in production:

1. **Never commit `.env`** — it is in `.gitignore` by default
2. **Rotate secrets regularly** — especially `DATABASE_URL` credentials
3. **Keep dependencies up to date** — run `bun update` periodically
4. **Use environment-specific configs** — don't expose dev settings in production
5. **Set strict CORS origins** — replace `cors()` with `cors({ origin: 'https://yourdomain.com' })`
6. **Use MongoDB Atlas IP allowlist** — restrict database access to your server IP
