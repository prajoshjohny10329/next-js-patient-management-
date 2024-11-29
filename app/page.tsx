import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl underline uppercase text-center text-white">home</h1>
      <Button>Click me</Button>
      <ModeToggle />
    </div>
  );
}
