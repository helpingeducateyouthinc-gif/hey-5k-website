import './globals.css';

export const metadata = {
  title: 'HEY Inc. 5K Run',
  description: 'Helping Educate Youth Inc. 5K Run/Walk supporting the Turner Fellowship.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
