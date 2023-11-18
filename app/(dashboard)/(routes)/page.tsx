import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
      <h1 className="text-3xl">Dashboard</h1>
      <p>text</p>
      <Button>Button</Button>
    </>
  );
}
