import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="block h-full">
      <Card className="h-full transition hover:border-blue-300 hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-3">
          <p className="text-sm leading-6 text-muted-foreground">
            {description}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <span className="text-sm font-medium">
              {credits} credits
            </span>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              tabIndex={-1}
              aria-label={`${likes} likes`}
            >
              ❤ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
