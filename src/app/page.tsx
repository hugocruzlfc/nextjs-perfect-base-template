import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center space-y-5 p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Nextjs (15.3.0) + Shadcn UI + Tailwindcss V4 + Typescript + Eslint 9 +
        Prettier + Husky + Lint-staged + Commitlint + Commitizen
      </h1>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Base Project Template
      </h2>
      <Button asChild>
        <Link
          href="https://github.com/hugocruzlfc/nextjs-perfect-base-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="flex items-center">
            Go to Github Repo
            <span className="ml-2">
              <Github />
            </span>
          </p>
        </Link>
      </Button>
    </main>
  );
}
