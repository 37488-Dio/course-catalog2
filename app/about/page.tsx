export default function AboutPage() {
  return (
    <section className="max-w-2xl space-y-4">
      <h1 className="text-3xl font-bold">About the project</h1>
      <p className="text-slate-600">
        This course catalog is a semester project for the Advanced Web
        Technologies course.
      </p>
      <p className="text-slate-600">
        It is built with Next.js App Router, TypeScript, Tailwind CSS, and
        shadcn/ui. The catalog demonstrates responsive layouts and reusable
        components.
      </p>
    </section>
  );
}
