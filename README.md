This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## To get it working in Plesk

Settings:

- Document Root - /httpdocs/.next/static
- Application Mode - production
- Application URL - http://jace.info
- Application Root - /httpdocs
- Application Startup File - node_modules/.bin/next edit

To get it working:

- Upload files
- In Plesk

  - NPM Install
  - Run the build script
  - Restart App

- Manaully edit the Application startup file `node_modules/.bin/next` NOT using the the plesk UI
  -- You can get the script from `node_modules/next/bin/next`, alter it and replace the one on the server
- Change defaultCommand from `dev'`to `start`
- Run the build script from plesk
- Cick Restart App in plesk
