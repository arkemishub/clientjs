"use client";

import { usePathname } from "next/navigation";
import sidebar from "@/config/sidebar";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const getPrevNextPages = (pathname: string) => {
  const index = sidebar.findIndex((item) => item?.href === pathname);

  return [sidebar[index - 1], sidebar[index + 1]];
};

function Pagination() {
  const pathname = usePathname();

  const [prevPage, nextPage] = getPrevNextPages(pathname);

  return (
    <div className="mt-16 flex items-center">
      {prevPage?.href && (
        <Link
          className="border-background-400 flex items-center rounded-lg border-2 px-4 py-2"
          href={prevPage.href}
        >
          <ChevronLeftIcon className="mr-2 h-5 w-5" />
          {prevPage.title}
        </Link>
      )}
      {nextPage?.href && (
        <Link
          className="border-background-400 ml-auto flex items-center rounded-lg border-2 px-4 py-2"
          href={nextPage.href}
        >
          {nextPage.title}
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </Link>
      )}
    </div>
  );
}

export default Pagination;
