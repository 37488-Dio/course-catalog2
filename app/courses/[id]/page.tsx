import { LikeButton } from "@/components/LikeButton";
import { getCourse, getCourses } from "@/lib/courses";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const courses = await getCourses();

  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <article className="max-w-3xl space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-medium text-blue-600">
          {course.isElective ? "Elective course" : "Core course"}
        </p>
        <h1 className="text-4xl font-bold tracking-tight">{course.title}</h1>
        <p className="text-lg leading-8 text-slate-600">
          {course.description}
        </p>
      </div>

      <div className="rounded-xl border bg-slate-50 p-5">
        <p className="font-medium">{course.credits} credits</p>
        <p className="mt-1 text-sm text-slate-600">
          Current likes: {course.likes}
        </p>
      </div>

      <LikeButton initialLikes={course.likes} />
    </article>
  );
}
