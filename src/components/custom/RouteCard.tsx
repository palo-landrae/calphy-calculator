"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useEffect, useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  title: string;
  formula: string;
  content: string;
  href: string;
};

export default function RouteCard({ ...props }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Skeleton className="flex rounded-lg" />;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>
          <BlockMath math={props.formula} />
        </CardDescription>
      </CardHeader>
      <CardContent>{props.content}</CardContent>
      <CardFooter className="justify-end">
        <Link href={props.href}>
          <Button variant="link">Read more</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
