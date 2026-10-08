import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "Advanced Web Technologies course catalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="flex flex-wrap gap-2 border-b border-slate-200 px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100 hover:text-blue-600"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100 hover:text-blue-600"
          >
            About
          </Link>
        </nav>

        <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
