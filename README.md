This is a reproduction of an environment variable issue with Next.js v14.2.x.

## Issue

Empty environment variables (or "") are not consistent between server and client.

Zod throws a validation error on the client after validating properly on the server.

## Steps to reproduce

1. Run `pnpm build` and see a successful build
2. Run `pnpm start` and see an application error and a Zod validation error in browser console

Note: `pnpm dev` also validates on the server and errors in the browser.

I would expect this behaviour to be consistent between server and client.

## Notes

- Downgrading to Next.js v14.1.4 results in the expected behaviour. It appears to affect v14.2.0 and later
- Adding a non-empty string in `.env` works as expected
