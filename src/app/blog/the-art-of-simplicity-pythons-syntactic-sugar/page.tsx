import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function blog2() {
  return (
    <main className="container bg-blue-100 min-h-screen max-w-none p-24">
      <div className="container mx-auto px-40">
        <div className="mb-5">
          <Link href="/blog" className="text-sm flex gap-2 items-center">
            <MoveLeft size={14} /> Back
          </Link>
        </div>
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            The Art of Simplicity: Python’s Syntactic Sugar?
          </h1>
        </header>
        <div className="my-10">
          <img
            alt=""
            className="bg nj nk c"
            width="700"
            height="394"
            loading="eager"
            role="presentation"
            src="https://miro.medium.com/v2/resize:fit:1400/1*G-09XWU9P6bPCgSCu2wQKg.png"
          />
        </div>
        <div>
          <blockquote className="border-l-4 pl-4 my-4">
            <p className="text-lg font-medium leading-relaxed">
              Good code, It should work and It should keep working.
            </p>
            <cite className="text-sm font-light block mt-2">
              การที่ Code ณ ขณะนั้น “ทำงานได้” เป็นเรื่องสำคัญเรื่องนึง
              และการที่มันทำหน้าที่ของมันได้อย่างสง่างามก็เป็นเรื่องสำคัญอีกเรื่องเช่นกัน
            </cite>
          </blockquote>
        </div>
      </div>
    </main>
  );
}