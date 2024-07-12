import Navbar from "@/components/Navbar";
import { UserButton } from "@clerk/nextjs";

export default function Homepage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center gap-x-2 mt-4">
        Home
        <UserButton />
      </div>
      {children}
    </>
  );
}
