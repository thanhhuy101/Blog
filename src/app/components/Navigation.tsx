"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-3 md:px-8 lg:px-16">
        <div className="flex items-center justify-between rounded-full bg-white px-4 py-3 shadow-md md:px-8 lg:px-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-8 w-24 md:h-10 md:w-28">
              <Image
                src="/images/foso-logo.png"
                alt="FOSO Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-green-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation for Desktop */}
          <div className="hidden items-center space-x-6 md:flex lg:space-x-8">
            <Link
              href="/ve-chung-toi"
              className="text-sm font-medium text-gray-700 hover:text-green-500"
            >
              Về Chúng tôi
            </Link>
            <div className="group relative">
              <Link
                href="/giai-phap"
                className="flex items-center text-sm font-medium text-gray-700 hover:text-green-500"
              >
                Giải pháp
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              {/* Dropdown could be added here */}
            </div>
            <div className="group relative">
              <Link
                href="/tai-nguyen"
                className="flex items-center text-sm font-medium text-gray-700 hover:text-green-500"
              >
                Tài nguyên
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              {/* Green dot indicator */}
              <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-green-500"></div>
              {/* Dropdown could be added here */}
            </div>
            <Link
              href="/lien-he"
              className="text-sm font-medium text-gray-700 hover:text-green-500"
            >
              Liên hệ
            </Link>
          </div>

          {/* Right side - Language and CTA button for Desktop */}
          <div className="hidden items-center space-x-4 md:flex">
            {/* Language selector */}
            <div className="flex items-center rounded-full bg-gray-100 px-3 py-1 hover:cursor-pointer">
              <span className="mr-1">
                <Image
                  src="/images/vietnam-flag.png"
                  alt="VI"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              </span>
              <span className="text-sm font-medium">VI</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* CTA Button */}
            <button className="flex items-center rounded-full bg-green-400 px-4 py-2 text-sm font-medium text-white shadow-sm transition duration-300 hover:bg-green-600">
              <span className="text-black">Trở Thành Khách Hàng</span>
              <div className="ml-2 rounded-full bg-black p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 19l14-14m0 0l-14 0m14 0l0 14"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide down when open */}
      <div
        className={`overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4 pb-4">
            <Link
              href="/ve-chung-toi"
              className="border-b border-gray-100 py-2 text-sm font-medium text-gray-700 hover:text-green-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Về Chúng tôi
            </Link>
            <Link
              href="/giai-phap"
              className="flex items-center justify-between border-b border-gray-100 py-2 text-sm font-medium text-gray-700 hover:text-green-500"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Giải pháp</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              href="/tai-nguyen"
              className="relative flex items-center justify-between border-b border-gray-100 py-2 text-sm font-medium text-gray-700 hover:text-green-500"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Tài nguyên</span>
              <div className="flex items-center">
                <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-green-500"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
            <Link
              href="/lien-he"
              className="border-b border-gray-100 py-2 text-sm font-medium text-gray-700 hover:text-green-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ
            </Link>

            {/* Language selector for mobile */}
            <div className="flex items-center border-b border-gray-100 py-2">
              <span className="text-sm font-medium text-gray-700">
                Ngôn ngữ:
              </span>
              <div className="ml-3 flex items-center rounded-full bg-gray-100 px-3 py-1">
                <span className="mr-1">
                  <Image
                    src="/images/vietnam-flag.png"
                    alt="VI"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                </span>
                <span className="text-sm font-medium">VI</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* CTA Button for mobile */}
            <button className="flex w-full items-center justify-center rounded-full bg-green-400 px-4 py-3 text-sm font-medium text-white shadow-sm">
              <span className="text-black">Trở Thành Khách Hàng</span>
              <div className="ml-2 rounded-full bg-black p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 19l14-14m0 0l-14 0m14 0l0 14"
                  />
                </svg>
              </div>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
