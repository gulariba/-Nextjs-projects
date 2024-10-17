export const metadata = {
  title: 'To-Do List App',
  description: 'A simple  to-do list app built with Next.js.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
