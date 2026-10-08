import Link from "next/link";

export default function CourseNotFound() {
  return (
    <section className="space-y-4 py-12">
      <h1 className="text-3xl font-bold">Course not found</h1>
      <p className="text-slate-600">
        The course you are looking for does not exist.
      </p>
      <Link
        href="/courses"
        className="inline-flex rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        Back to courses
      </Link>
    </section>
  );
}
