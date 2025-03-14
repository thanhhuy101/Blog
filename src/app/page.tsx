"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "./components/Navigation";

export default function HomePage() {
  const blog_items = [
    {
      title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
      category: "Quản Lý Sản Xuất",
      date: "27/11/2023",
      read_time: "10 phút đọc",
      image: "/images/foso-small-logo.png",
      link: "/bai-viet/bom-quan-ly-san-xuat",
    },
    {
      title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
      category: "Quản Lý Sản Xuất",
      date: "27/11/2023",
      read_time: "10 phút đọc",
      image: "/images/foso-small-logo.png",
      link: "/bai-viet/bom-quan-ly-san-xuat",
    },
    {
      title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
      category: "Quản Lý Sản Xuất",
      date: "27/11/2023",
      read_time: "10 phút đọc",
      image: "/images/foso-small-logo.png",
      link: "/bai-viet/bom-quan-ly-san-xuat",
    },
    {
      title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
      category: "Quản Lý Sản Xuất",
      date: "27/11/2023",
      read_time: "10 phút đọc",
      image: "/images/foso-small-logo.png",
      link: "/bai-viet/bom-quan-ly-san-xuat",
    },
  ];

  const Categories = [
    { name: "Tất cả", count: 108, link: "/danh-muc/tat-ca" },
    { name: "Thiết Kế Website", count: 36, link: "/danh-muc/thiet-ke-website" },
    {
      name: "Thiết Kế App Mobile",
      count: 13,
      link: "/danh-muc/thiet-ke-app-mobile",
    },
    { name: "Quản Lý Sản Xuất", count: 25, link: "/blog/quan-ly-san-xuat" },
    { name: "Quản Lý Bán Hàng", count: 22, link: "/danh-muc/quan-ly-ban-hang" },
    {
      name: "Báo Chí Nói Về FOSO",
      count: 7,
      link: "/danh-muc/bao-chi-noi-ve-foso",
    },
    { name: "Tin Tức FOSO", count: 5, link: "/danh-muc/tin-tuc-foso" },
  ];
  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <Navigation />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center text-sm text-gray-500 md:justify-start">
          <Link href="/" className="hover:text-green-500">
            Trang chủ
          </Link>
          <span className="mx-2">&gt;</span>
          <Link href="/tai-nguyen" className="hover:text-green-500">
            Tài nguyên
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-700">Blog</span>
        </div>
      </div>

      {/* Blog Header */}
      {/* Blog Header */}
      <div className="container relative mx-auto px-4 py-6">
        {/* Desktop layout */}
        <div className="hidden md:flex md:items-center md:justify-between">
          <div className="absolute left-10 top-1/2 -translate-y-1/2 transform">
            <Image
              src="/images/calendar.png"
              alt="Calendar"
              width={120}
              height={120}
            />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-2 text-5xl font-bold">
              <span>Blog </span>
              <span className="text-green-500">FOSO</span>
              <span> – </span>
            </h1>
            <h2 className="mb-6 text-5xl font-bold">
              <span>Cập Nhật Tin Tức </span>
              <span className="rounded-lg bg-green-100 px-3 py-1 text-black">
                Mới Nhất
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
            </p>
          </div>

          <div className="absolute right-10 top-1/2 -translate-y-1/2 transform">
            <Image
              src="/images/hand-writing.png"
              alt="Hand Writing"
              width={120}
              height={120}
            />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col items-center md:hidden">
          <div className="mb-4 flex w-full justify-between px-4">
            <div>
              <Image
                src="/images/calendar.png"
                alt="Calendar"
                width={70}
                height={70}
              />
            </div>

            <div>
              <Image
                src="/images/hand-writing.png"
                alt="Hand Writing"
                width={70}
                height={70}
              />
            </div>
          </div>

          <div className="text-center">
            <h1 className="mb-2 text-3xl font-bold">
              <span>Blog </span>
              <span className="text-green-500">FOSO</span>
              <span> – </span>
            </h1>
            <h2 className="mb-4 text-3xl font-bold">
              <span>Cập Nhật Tin Tức </span>
              <span className="rounded-lg bg-green-100 px-2 py-1 text-black">
                Mới Nhất
              </span>
            </h2>
            <p className="text-base text-gray-600">
              Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Main Content - Blog Posts */}
          <div className="w-full lg:w-3/4 lg:pr-8">
            {/* Featured Post */}
            <div className="mb-8 pb-6">
              <h2 className="mb-6 p-3 text-xl font-bold">Tất Cả Bài Viết</h2>

              <div className="overflow-hidden rounded-lg bg-blue-600 text-white">
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 md:w-1/2">
                    <h3 className="mb-2 text-2xl font-bold">
                      Gia nhập cộng đồng FMRP - Kết nối, chia sẻ, cùng phát
                      triển!
                    </h3>
                    <div className="mt-4">
                      <Link
                        href="/tham-gia-ngay"
                        className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium text-white"
                      >
                        Tham Gia Ngay
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="/images/community-illustration.png"
                      alt="FMRP Community"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Blog Post 1 */}
              {blog_items.map((post, index) => (
                <div key={index} className="flex flex-col">
                  <div className="relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-600">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold">{post.title}</h3>
                  <div className="mt-2 flex items-center text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="rounded bg-amber-100 px-2 py-1 text-xs text-amber-800">
                        {post.date}
                      </span>
                    </div>
                    <div className="ml-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{post.read_time}</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center text-blue-600">
                    <Link href={post.link} className="text-sm font-medium">
                      Khám phá thêm
                    </Link>
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
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="mt-8 w-full lg:mt-0 lg:w-1/4">
            {/* Search */}
            <div className="mb-8">
              <h3 className="mb-3 font-bold">Tìm Kiếm</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết"
                  className="flex-grow rounded-l-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="rounded-r-lg bg-green-500 px-3 py-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="mb-3 font-bold">Danh Mục</h3>
              <ul>
                {Categories.map((category, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between border-b py-2"
                  >
                    <Link
                      href={category.link}
                      className="text-gray-700 hover:text-green-500"
                    >
                      {category.name}
                    </Link>
                    <span className="text-sm text-gray-500">
                      {category.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Promotion Banner */}
            <div className="mb-8 overflow-hidden rounded-lg bg-blue-600 text-white">
              <div className="p-4">
                <Image
                  src="/images/fhrp-promotion.png"
                  alt="FHRP Promotion"
                  width={300}
                  height={250}
                  className="ml-4 w-full rounded-t-lg"
                />
                <div className="mt-4 flex justify-center px-8 text-center">
                  <div className="flex-1">
                    <Image
                      src="/images/robo.png"
                      alt="FHRP Logo"
                      width={100}
                      height={30}
                      className="mx-auto my-2"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Miễn phí dùng thử</h3>
                    <Image
                      src="/images/fhrp-logo.png"
                      alt="FHRP Logo"
                      width={100}
                      height={30}
                      className="mx-auto my-2"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link
                    href="/dung-thu"
                    className="mt-4 inline-flex items-center rounded-full border px-6 py-2 text-sm font-medium text-white"
                  >
                    Trải Nghiệm Ngay
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-blue-600 text-white">
              <div className="p-4">
                <Image
                  src="/images/community-illustration.png"
                  alt="FHRP Promotion"
                  width={300}
                  height={450}
                  className="ml-4 w-full rounded-t-lg"
                />
                <div className="mt-4 flex justify-center px-8 text-center">
                  <span className="text-xl font-medium">
                    Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát
                    triển!
                  </span>
                </div>
                <div className="flex justify-center">
                  <Link
                    href="/dung-thu"
                    className="mt-4 inline-flex items-center rounded-full border px-6 py-2 text-sm font-medium text-white"
                  >
                    Trải Nghiệm Ngay
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <button className="flex items-center">
          <div className="mr-2 rounded-full bg-white p-1">
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>
          <span>Trang trước</span>
        </button>
        <nav
          className="shadow-xs mx-15 isolate mx-10 inline-flex -space-x-px rounded-md"
          aria-label="Pagination"
        >
          <a
            href=""
            aria-current="page"
            className="relative z-10 inline-flex items-center rounded-md bg-green-300 px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            1
          </a>
          <a
            href=""
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            2
          </a>
          <a
            href=""
            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
          >
            3
          </a>
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-500 focus:outline-offset-0">
            ...
          </span>
          <a
            href=""
            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
          >
            8
          </a>
          <a
            href=""
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            9
          </a>
          <a
            href=""
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            10
          </a>
        </nav>
        <button className="flex items-center">
          <span>Trang sau</span>
          <div className="ml-2 rounded-full bg-white p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
