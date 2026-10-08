"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type LikeButtonProps = {
  initialLikes: number;
};

export function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <Button
      type="button"
      onClick={() => setLikes((current) => current + 1)}
      className="mt-4"
    >
      ❤ {likes}
    </Button>
  );
}
