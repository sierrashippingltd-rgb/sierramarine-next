// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isEn = pathname?.startsWith("/en");

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

  // Dil değiştirirken aynı path'in /en versiyonuna ya da tersine git
  const toggleHref = (() => {
    if (!pathname) return isEn ? "/" : "/en";
    if (isEn) {
      // /en veya /en/...  -> / veya ...
      if (pathname === "/en") return "/";
