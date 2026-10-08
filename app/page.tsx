import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          Advanced Web Technologies
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Welcome to the course catalog for exploring our frontend, backend,
          database, security, and AI courses.
        </p>
      </div>

      <Link
        href="/courses"
        className="inline-flex rounded-md bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
      >
        Browse courses
      </Link>
    </section>
  );
}
