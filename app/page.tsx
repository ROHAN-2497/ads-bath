import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="m-20 gap-4 flex">
      <Button variant="outline">Button</Button>

      <Button variant={"destructive"}>Click me</Button>
    </main>
  );
}
