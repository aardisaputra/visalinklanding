"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold">
          VisaLink
        </Link>
        <ul className={`flex space-x-6 mt-0`}>
          <li>
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              Interest Form
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
