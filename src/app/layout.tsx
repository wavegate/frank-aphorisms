import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className={`flex gap-[12px]`}>
          <Link href="/">Home</Link>
          <Link href="/users">Users</Link>
          <Link href="/posts">Posts</Link>
        </nav>
        <section>{children}</section>
      </body>
    </html>
  );
}
