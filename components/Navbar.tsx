// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/iletisim", label: "İletişim" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative border-b">
      {/* Arka plan: gemi + Piri Reis haritası görseli */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[url('/header-bg.png')] bg-cover bg-center bg-no-repeat" />
        {/* Hafif beyaz overlay: logo ve menü okunaklı kalsın */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Sierra Marine Logo"
            width={180}
            height={70}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Mobil menü butonu */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border px-2 py-1 text-sm bg-white/70"
          onClick={() => setOpen((v) => !v)}
        >
          Menü
        </button>

        {/* Menü linkleri */}
        <nav
          className={`${
            open ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center gap-2 md:gap-6 text-sm`}
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2 py-1 rounded-md transition-colors ${
                  active
                    ? "bg-sky-900 text-white"
                    : "text-slate-800 hover:bg-sky-50"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
