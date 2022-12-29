import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="bg-sky-600 text-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
              SMAKDA RETAIL
            </span>
          </Link>
          <div className="flex md:order-2">
            <Link
              href="/logout"
              method="post"
              as="button"
              className="text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
