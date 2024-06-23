import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function blog() {
  return (
    <main className="container bg-blue-100 min-h-screen max-w-none p-24">
      <div className="container mx-auto px-40">
        <div className="mb-5">
          <Link href="/" className="text-sm flex gap-2 items-center">
            <MoveLeft size={14} /> Profile
          </Link>
        </div>
        <header className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-bold text-gray-800">My Blog</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/*BLOG 1*/}
          <article className="bg-white rounded-lg shadow-md p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Agile Software Development คือปรัชญา
                </h2>
                <p className="text-gray-600 mb-10">
                    ความแตกต่างของปรัชญาและกรอบปฏิบัติ
                </p>
                <Link
                  href="https://medium.com/agile-development-in-thai/agile-software-development-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%8A%E0%B8%8D%E0%B8%B2-147437f01d5b"
                  className="text-blue-500 hover:text-blue-700 font-bold"
                >
                  Read More
                </Link>
              </div>
              <div>
                <img
                  src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*2S-5-Wekzs8aKUKcDB_8lQ.png"
                  alt="Blog post image"
                  className="w-full h-48 object-cover mb-4"
                />
              </div>
            </div>
          </article>

          {/*BLOG 2*/}
          <article className="bg-white rounded-lg shadow-md p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                    First Principles Thinking สำหรับ Developer
                </h2>
                <p className="text-gray-600 mb-10">
                  
                </p>
                <Link
                  href="https://goangle.medium.com/first-principles-thinking-%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A-developer-8ba4afab1496"
                  className="text-blue-500 hover:text-blue-700 font-bold"
                >
                  Read More
                </Link>
              </div>
              <div>
                <img
                  src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*utVMQCIDwTPxp-CChhS_9g.png"
                  alt="Blog post image"
                  className="w-full h-48 object-cover mb-4"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
