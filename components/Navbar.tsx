"use client";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { DEFAULT_COLOR, HOVER_TEXT } from "@/contants";

export default function Navbar() {
  const { userId } = useAuth();
  const navRoutes = [
    { id: 1, label: "Instructor", path: "/instructor/courses" },
    { id: 2, label: "Learning", path: "/learning" },
  ];
  return (
    <div className="flex justify-between items-center p-4 bg-zinc-100">
      <div className="flex items-center gap-x-2">
        {" "}
        <Link href={"/"}>
          <Image src={"/logo.png"} height={100} width={100} alt={"logo"} />
        </Link>
        <span className="text-lg md:text-xl lg:text-2xl font-serif flex whitespace-nowrap">
          Coursify Academy
        </span>
      </div>

      <div className="max-md:hidden md:w-[400px] rounded-full md:flex mx-4">
        <input
          className="flex-grow bg-[#FF8EB] rounded-l-full border-none outline-none text-sm pl-4 py-3"
          placeholder="search for courses"
        />
        <button
          className={`rounded-r-full bg-[${DEFAULT_COLOR}] px-4 border-none outline-none py-3 hover:bg-[#0c66ed]/70`}
        >
          <Search className="h-4 w-4" color="white" />
        </button>
      </div>
      <div className="flex gap-6 items-center">
        <div className="max-sm:hidden flex gap-6">
          {navRoutes.map((routeObj) => (
            <Link
              href={routeObj.path}
              key={routeObj.id}
              className={`text-sm font-medium hover:text-[${DEFAULT_COLOR}]`}
            >
              {routeObj.label}
            </Link>
          ))}
        </div>
        {userId ? (
          <UserButton afterSwitchSessionUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <Button className="text-sm font-medium hover:text-[#0c66ed] whitespace-nowrap">
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
