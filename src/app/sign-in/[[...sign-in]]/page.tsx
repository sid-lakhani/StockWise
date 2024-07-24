import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 min-h-screen items-center justify-center">
      <SignIn />
      <Link href="/">
        <Button className="px-4 py-2 rounded-lg">
          Cancel
        </Button>
      </Link>
    </div>
  );
}
