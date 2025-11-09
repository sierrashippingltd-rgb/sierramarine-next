// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export function Navbar() {
  const rawPathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const isEn = rawPathname.startsWith("/en");
  const pathname = rawPathname;

  // TR / EN menü linkleri
  const navItems = isEn
    ? [
        { href: "/en", label: "Home" },
        { href: "/en/hakkimizda", label: "About" },
        { href: "/en/hizmetler", label: "Services" },
        { href: "/en/iletisim", label: "Contact" },
      ]
    : [
        { href: "/", label: "Anasayfa" },
        { href: "/hakkimizda", label: "Hakkımızda" },
        { href: "/hizmetler", label: "Hizmetler" },
        { href: "/iletisim", label: "İletişim" },
      ];

  // Dil değiştirirken gidilecek adres
  function getToggleHref(path: string, isEnglish: boolean): string {
    if (isEnglish) {
      // /en veya /en/... -> / veya ...
      if (path === "/en") return "/";
      const withoutPrefix = path.replace(/^\/en/, "");
      return withoutPrefix === "" ? "/" : withoutPrefix;
    } else {
      // / veya /... -> /en veya /en/...
      if (path === "/") return "/en";
      return `/en${path}`;
    }
  }

  const toggleHref = getToggleHref(pathname, isEn);

  return (
    <header className="relative border-b">
      {/* Arka plan: gemi + Piri Reis haritası görseli */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[url('/header-bg.png')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link href={isEn ? "/en" : "/"} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Sierra Marine Logo"
            width={180}
            height={70}
            className="h-auto w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-3">
          {/* Dil butonu (masaüstü) */}
          <Link
            href={toggleHref}
            className="hidden md:inline-flex items-center rounded-full border border-sky-900 px-3 py-1 text-xs font-semibold text-sky-900 bg-white/80 hover:bg-sky-50"
          >
            {isEn ? "TR" : "EN"}
          </Link>

          {/* Mobil menü butonu */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border px-2 py-1 text-sm bg-white/70"
            onClick={() => setOpen((v) => !v)}
          >
            Menü
          </button>
        </div>

        {/* Menü linkleri */}
        <nav
          className={`${
            open ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center gap-2 md:gap-4 text-sm`}
        >
          {navItems.map((item) => {
            const active =
              item.href === (isEn ? "/en" : "/")
                ? pathname === item.href
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

          {/* Dil butonu (mobil menü içinde) */}
          <Link
            href={toggleHref}
            className="md:hidden inline-flex items-center justify-center rounded-full border border-sky-900 px-3 py-1 text-xs font-semibold text-sky-900 bg-white/80 hover:bg-sky-50 mt-2"
            onClick={() => setOpen(false)}
          >
            {isEn ? "TR" : "EN"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
