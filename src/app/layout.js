import './globals.css';

export const metadata = {
  title: 'Fat Nigga Season',
  description: 'A meme token project on Solana',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="preload" as="image" href="https://raw.githubusercontent.com/fatfellas/fellawebsite/refs/heads/main/FNS%20logo%20v1.png" />
        <link rel="preload" as="image" href="https://raw.githubusercontent.com/fatfellas/fellawebsite/main/ACCESS%20RESTRICTED@0.75x.png" />
        <link rel="preload" as="image" href="https://raw.githubusercontent.com/fatfellas/fellawebsite/main/CONFIRM%20BUTTON@0.75x.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}