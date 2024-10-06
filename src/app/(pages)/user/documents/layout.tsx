"use client";

import { Metadata } from "next";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "./_components/sidebar-nav";
import { useContext, useEffect, useState } from "react";
import { Document } from "@prisma/client";
import { DataContext, UserDataContext } from "@/components/mols/providers";

const _rootPath = "/user/documents";

const sidebarNavItems = [
  {
    title: "Profile",
    href: _rootPath,
  },
  {
    title: "Account",
    href: _rootPath + "/account",
  },
  {
    title: "Appearance",
    href: _rootPath + "/appearance",
  },
  {
    title: "Notifications",
    href: _rootPath + "/notifications",
  },
  {
    title: "Display",
    href: _rootPath + "/display",
  },
];

export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { documents }: { documents: Document[] } = useContext(UserDataContext);
  const [docList, setDocList] = useState<
    { title: string; href: string }[] | null
  >(null);

  useEffect(() => {
    setDocList(
      documents
        ? documents.map(({ id, subject }) => ({
            title: subject,
            href: `${_rootPath}/${id}`,
          }))
        : []
    );
    return () => {
      // Cleanup logic here
    };
  }, [documents]);

  return (
    <main className="block space-y-6 px-8 py-4 pb-16">
      {docList && (
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="hidden sm:block sm: -mx-4 lg:w-1/5">
            <SidebarNav items={docList} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      )}
    </main>
  );
}
