/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
"use client";

import Link from "next/link";
import Navigation from "~/app/components/Navigation";
import { useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import { FaTwitter, FaFacebook, FaLinkedin, FaReddit } from "react-icons/fa";

export default function BlogDetail() {
  const params = useParams();
  const slug = Array.isArray(params.slug)
    ? params.slug[0]
    : (params.slug ?? ""); // Lấy slug từ URL

  const slugToTitleMap: { [key: string]: string } = {
    "quan-ly-san-xuat": "Quản lý sản xuất",
  };

  const title = slug ? (slugToTitleMap[slug] ?? slug) : "";

  const [isTableOfContentsOpen, setIsTableOfContentsOpen] = useState(true);

  const toggleTableOfContents = () => {
    setIsTableOfContentsOpen(!isTableOfContentsOpen);
  };
  const tableOfContents = [
    { id: "1", title: "Quy trình 5S là gì?", subItems: [] },
    { id: "2", title: "Lợi ích quy trình 5S đem lại", subItems: [] },
    {
      id: "3",
      title: "Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
      subItems: [
        { id: "3.1", title: "Cải thiện nơi môi trường làm việc" },
        { id: "3.2", title: "Tiết kiệm thời gian đáng kể" },
        { id: "3.3", title: "Tăng năng suất làm việc" },
        { id: "3.4", title: "Tiết kiệm chi phí" },
        { id: "3.5", title: "Tăng chất lượng sản phẩm" },
      ],
    },
    {
      id: "4",
      title: "Quy trình 5S gồm các bước:",
      subItems: [
        { id: "4.1", title: "Seiri (Ngăn nắp)" },
        { id: "4.2", title: "Seiton (Sắp xếp)" },
        { id: "4.3", title: "Seiso (Vệ sinh)" },
        { id: "4.4", title: "Seiketsu (Tiêu chuẩn hóa)" },
        { id: "4.5", title: "Shitsuke (Kỷ luật)" },
      ],
    },
    {
      id: "5",
      title: "Quy trình được thực hiện như sau:",
      subItems: [
        { id: "5.1", title: "Giai đoạn chuẩn bị" },
        { id: "5.2", title: "Triển khai rộng rãi" },
        { id: "5.3", title: "Thực hiện vệ sinh toàn bộ doanh nghiệp" },
        { id: "5.4", title: "Sàng lọc: sắp xếp và đánh giá" },
        { id: "5.5", title: "Đánh giá" },
      ],
    },
    { id: "6", title: "Quy trình 5S có giống với Kaizen?", subItems: [] },
    { id: "7", title: "Đối tượng nào nên áp dụng 5S?", subItems: [] },
    {
      id: "8",
      title: "Các yếu tố tạo nên thành công cho quy trình 5S",
      subItems: [],
    },
  ];

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
  ];

  return (
    <div className="w-full">
      {/* Navigation bar */}
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
          <Link href="/blog" className="hover:text-green-500">
            Blog
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-700">{title}</span>
        </div>
      </div>

      {/* Content */}
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nên Biết</title>
          <meta
            name="description"
            content="Tìm hiểu về quy trình 5S và cách ứng dụng hiệu quả trong doanh nghiệp"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col gap-8 md:flex-row">
            {/* Main Content */}
            <div className="w-full md:w-2/3">
              <div className="mb-6">
                <div className="mt-2">
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-600">
                    Quản lý sản xuất
                  </span>
                </div>
                <h1 className="mb-4 text-3xl font-bold">
                  Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nên Biết
                </h1>

                <div className="mb-4 flex items-center justify-between gap-4 text-sm text-gray-500">
                  <div className="flex flex-row gap-4">
                    <Image
                      src="/images/ava.png"
                      alt="Quy trình 5S là gì?"
                      width={40}
                      height={40}
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="flex flex-col gap-2 md:justify-start">
                      <span>Tác giả</span>
                      <span className="font-bold">FOSO Creator</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-6">
                    <div className="flex items-center gap-2">
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Cập nhật vào 17/11/2022</span>
                    </div>
                    <span className="border border-l"></span>
                    <div className="flex items-center gap-2">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>10 phút đọc</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share buttons */}
              <div className="fixed left-16 top-1/3 hidden flex-col space-y-4 md:flex">
                <span className="font-bold">Chia sẻ</span>

                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-green-500 bg-white text-green-400">
                  <FaTwitter size={20} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-green-500 bg-white text-green-600">
                  <FaFacebook size={20} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-green-500 bg-white text-green-700">
                  <FaLinkedin size={20} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-green-500 bg-white text-green-500">
                  <FaReddit size={20} />
                </div>
              </div>

              {/* Featured Image */}
              <div className="h-90 relative mb-8 w-full overflow-hidden rounded-lg bg-blue-50">
                <Image
                  src="/images/process.png"
                  alt="Quy trình 5S là gì?"
                  width={400}
                  height={650}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="text-center text-sm text-gray-600">
                Quy trình 5S là gì?
              </div>

              {/* Quote */}
              <div className="mb-8 border-l-4 border-green-500 pl-6 italic text-gray-700">
                <p className="text-lg">
                  Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì?
                  Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả
                  lời cho bạn thông tin chi tiết và mô hình này cùng như yếu tố
                  tạo nên thành công của quy trình bạn nhé.
                </p>
              </div>

              {/* Article Content */}
              <div className="prose max-w-none">
                <h2
                  id="1"
                  className="mb-4 flex items-center text-lg font-semibold text-green-600"
                >
                  <span className="mr-2">1.</span>
                  Quy trình 5S là gì?
                </h2>
                <p className="mb-4">
                  Quy trình 5S được biết đến là một hành quản trị tinh gọn trong
                  sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh
                  đào Nhật Bản.
                </p>
                <p className="mb-4">
                  Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới
                  vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao
                  gồm 5 chữ S đều trong tiếng Nhật:
                </p>
                <ul className="mb-6 space-y-2">
                  <li>
                    <span className="text-green-600">• Seiri</span> (Ngăn nắp)
                  </li>
                  <li>
                    <span className="text-green-600">• Seiton</span> (Sắp xếp)
                  </li>
                  <li>
                    <span className="text-green-600">• Seiso</span> (Sạch sẽ)
                  </li>
                  <li>
                    <span className="text-green-600">• Shitsuke</span> (Kỷ luật)
                  </li>
                  <li>
                    <span className="text-green-600">• Seiketsu</span> (Tiêu
                    chuẩn hóa)
                  </li>
                </ul>
                <h2
                  id="2"
                  className="mb-4 flex items-center text-lg font-semibold text-green-600"
                >
                  <span className="mr-2">2.</span>
                  Lợi ích quy trình 5S đem lại
                </h2>
                <p className="mb-4">
                  Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho
                  một bước của quy trình với mục đích cải tiến môi trường làm
                  việc của doanh nghiệp.
                </p>
                <p className="mb-4">
                  Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh
                  nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc
                  logic. Nói làm sao để trực quan, dễ làm việc, các công cụ, đồ
                  dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi
                  cần thiết.
                </p>
                <p className="mb-4">
                  Vì khi doanh nghiệp áp dụng như vậy cũng hình thành bảo vệ
                  thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào
                  bảo vệ môi trường vật hóa doanh nghiệp tích cực.
                </p>
                <div className="h-90 relative mb-5 w-full overflow-hidden rounded-lg bg-blue-100">
                  <Image
                    src="/images/process2.png"
                    alt="Tại sao doanh nghiệp cần quy trình 5S?"
                    width={400}
                    height={650}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="text-center text-sm text-gray-600">
                  Tại sao doanh nghiệp cần quy trình 5S?
                </div>
                {/* Section 3 with image */}
                <h2
                  id="3"
                  className="mb-4 flex items-center text-lg font-semibold text-green-600"
                >
                  <span className="mr-2">3.</span>
                  Tại sao doanh nghiệp cần quy trình 5S?
                </h2>{" "}
                <p className="mb-4">
                  Có thể nói quy trình được áp dụng rộng rãi tại các doanh
                  nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng
                  chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây
                  là những lợi ích cụ thể:
                </p>
                <h3
                  id="3.1"
                  className="mb-3 flex items-center text-lg font-semibold text-green-500"
                >
                  <span className="mr-2">3.1</span>
                  Cải thiện nơi môi trường làm việc
                </h3>
                <p className="mb-4">
                  Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn,
                  gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian
                  làm việc hiệu quả cho doanh nghiệp.
                </p>
                <h3
                  id="3.2"
                  className="mb-3 flex items-center text-lg font-semibold text-green-500"
                >
                  <span className="mr-2">3.2</span>
                  Tiết kiệm thời gian đáng kể
                </h3>
                <p className="mb-4">
                  Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được
                  thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm
                  đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi
                  thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.
                </p>
                <h3
                  id="3.3"
                  className="mb-3 flex items-center text-lg font-semibold text-green-500"
                >
                  <span className="mr-2">3.3</span>
                  Tăng năng suất làm việc
                </h3>
                <p className="mb-4">
                  Nhờ vào quy tắc 5S, doanh nghiệp bạn không chỉ không cần
                  thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng
                  tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp
                  tiết kiệm thời gian và tăng năng suất làm việc.
                </p>
                <h3
                  id="3.4"
                  className="mb-3 flex items-center text-lg font-semibold text-green-500"
                >
                  <span className="mr-2">3.4</span>
                  Tiết kiệm chi phí
                </h3>
                <p className="mb-4">
                  Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí
                  và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm
                  thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.
                </p>
                <h3
                  id="3.5"
                  className="mb-3 flex items-center text-lg font-semibold text-green-500"
                >
                  <span className="mr-2">3.5</span>
                  Tăng chất lượng sản phẩm
                </h3>
                <p className="mb-4">
                  5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng.
                  Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu tỷ
                  lệu xuất hàng không mong muốn.
                </p>
                <div className="h-90 relative mb-5 w-full overflow-hidden rounded-lg bg-blue-100">
                  <Image
                    src="/images/step.png"
                    alt="Tại sao doanh nghiệp cần quy trình 5S?"
                    width={400}
                    height={650}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="text-center text-sm text-gray-600">
                  Quy trình 5S gồm các bước
                </div>
                <h2
                  id="4"
                  className="mb-4 flex items-center text-lg font-semibold text-green-600"
                >
                  <span className="mr-2">4.</span>
                  Quy trình 5S gồm các bước
                </h2>{" "}
                <p className="mb-4">
                  5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường
                  hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao
                  gồm năm bước cơ bản sau:
                </p>
                <h3
                  id="4.1"
                  className="mb-3 flex items-center text-lg font-semibold text-green-500"
                >
                  <span className="mr-2">4.1</span>
                  Seiri (Ngăn nắp)
                </h3>
                <p className="mb-4">
                  Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn
                  nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần
                  thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và
                  tiết kiệm thời gian.
                </p>
                <h3
                  id="4.2"
                  className="mb-3 flex items-center text-lg font-semibold text-green-500"
                >
                  <span className="mr-2">4.2</span>
                  Seiton (Sắp xếp)
                </h3>
                <p className="mb-4">
                  Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết
                  bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm
                  kiếm và sử dụng chúng một cách dễ dàng.
                </p>
                <h3
                  id="4.3"
                  className="mb-3 flex items-center text-lg font-semibold text-green-500"
                >
                  <span className="mr-2">4.3</span>
                  Seiso (Vệ sinh)
                </h3>
                <p className="mb-4">
                  Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân
                  trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch
                  sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự
                  lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.
                </p>
                <h3
                  id="4.4"
                  className="mb-3 flex items-center text-lg font-semibold text-green-500"
                >
                  <span className="mr-2">4.4</span>
                  Seiketsu (Tiêu chuẩn hóa)
                </h3>
                <p className="mb-4">
                  Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước
                  này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách
                  thức sử dụng các dụng cụ, thiết bị, tài liệu.
                </p>
                <h3
                  id="4.5"
                  className="mb-3 flex items-center text-lg font-semibold text-green-500"
                >
                  <span className="mr-2">4.5</span>
                  Shitsuke (Kỷ luật)
                </h3>
                <p className="mb-4">
                  Đây được xem là bước cuối cùng trong quy trình. Và bước này
                  đóng vai trò quan trọng trong duy trì tính hiệu quả của quy
                  tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ
                  thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong
                  tổ chức duy trì và tuân thủ theo quy trình.
                </p>
                <div className="h-90 relative mb-5 w-full overflow-hidden rounded-lg bg-blue-100">
                  <Image
                    src="/images/step2.png"
                    alt="Tại sao doanh nghiệp cần quy trình 5S?"
                    width={400}
                    height={650}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="text-center text-sm text-gray-600">
                  Các bước thực hiện quy trình 5s
                </div>
                <h2
                  id="5"
                  className="mb-4 flex items-center text-lg font-semibold text-green-600"
                >
                  <span className="mr-2">5.</span>
                  Quy trình được thực hiện như sau:
                </h2>{" "}
                <p className="mb-4">
                  Có thể nói quy trình được áp dụng rộng rãi tại các doanh
                  nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng
                  chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây
                  là các lý do vì sao bạn nên lựa chọn quy trình:
                </p>
                <h3
                  id="5.1"
                  className="mb-3 flex items-center text-lg font-semibold text-green-500"
                >
                  <span className="mr-2">5.1</span>
                  Giai đoạn chuẩn bị
                </h3>
                <p className="mb-4">
                  Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực
                  đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S.
                  Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc
                  5S sẽ hiệu quả hơn.
                </p>
                <h3
                  id="5.2"
                  className="mb-3 flex items-center text-lg font-semibold text-green-500"
                >
                  <span className="mr-2">5.2</span>
                  Triển khai rộng rãi
                </h3>
                <p className="mb-4">
                  Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy
                  trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến
                  thức cũng như cách áp dụng như thế nào vào doanh nghiệp của
                  bạn.
                </p>
                <h3
                  id="5.3"
                  className="mb-3 flex items-center text-lg font-semibold text-green-500"
                >
                  <span className="mr-2">5.3</span>
                  Thực hiện vệ sinh toàn bộ doanh nghiệp
                </h3>
                <p className="mb-4">
                  Đây là bước có thể khiến mọi người không hào hứng trong các
                  bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và
                  tạo không khí hào hứng cho từng cá nhân.
                </p>
                <h3
                  id="5.4"
                  className="mb-3 flex items-center text-lg font-semibold text-green-500"
                >
                  <span className="mr-2">5.4</span>
                  Sàng lọc, sắp xếp và đánh giá
                </h3>
                <p className="mb-4">
                  Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn
                  bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để
                  việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu
                  quả hơn và dễ dàng tìm kiếm sau này.
                </p>
                <h3
                  id="5.5"
                  className="mb-3 flex items-center text-lg font-semibold text-green-500"
                >
                  <span className="mr-2">5.5</span>
                  Đánh giá
                </h3>
                <p className="mb-4">
                  Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại
                  quá trình cải tiến và xem xét cần cải tiến phương diện nào hay
                  không trong quá trình thực hiện quy trình 5S.
                </p>
                <h2
                  id="6"
                  className="mb-4 flex items-center text-lg font-semibold text-green-600"
                >
                  <span className="mr-2">6.</span>
                  Quy trình 5S có giống với Kaizen?
                </h2>{" "}
                <p className="mb-4">
                  Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen
                  hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau
                  nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.
                </p>
                <div className="mb-8 border-l-4 border-green-500 pl-6 italic text-gray-700">
                  <p className="text-lg">
                    Về Kaizen, thì đây được xem là một triết lý cải tiến liên
                    tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay
                    đổi tích cực, mang tính liên tục và bền vững. 
                  </p>
                </div>
                <div className="mb-8 border-l-4 border-green-500 pl-6 italic text-gray-700">
                  <p className="text-lg">
                    Còn đối với quy tắc 5S, đây là một phương pháp quản lý và
                    cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch
                    sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm
                    việc. 
                  </p>
                </div>
                <p className="mb-4">
                  Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và
                  quy tắc này đóng vai trò quan trọng trong việc tạo ra môi
                  trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử
                  dụng làm bước đầu tiên trong quá trình cải tiến liên tục của
                  phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các
                  hoạt động cải tiến tiếp theo. 
                </p>
                <h2
                  id="7"
                  className="mb-4 flex items-center text-lg font-semibold text-green-600"
                >
                  <span className="mr-2">7.</span>
                  Đối tượng nào nên áp dụng 5S?
                </h2>{" "}
                <p className="mb-4">
                  Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng
                  rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác
                  nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản
                  xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các
                  doanh nghiệp nhỏ.
                </p>
                Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức
                tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng
                hiệu quả.
                <div className="h-90 relative mb-5 w-full overflow-hidden rounded-lg bg-blue-100">
                  <Image
                    src="/images/factor.png"
                    alt=""
                    width={400}
                    height={450}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="text-center text-sm text-gray-600">
                  Các yếu tố tạo nên thành công cho quy trình 5S
                </div>
                <h2
                  id="8"
                  className="mb-4 flex items-center text-lg font-semibold text-green-600"
                >
                  <span className="mr-2">8.</span>
                  Các yếu tố tạo nên thành công cho quy trình 5S
                </h2>{" "}
                <p className="mb-4">
                  Và những nhân tố quyết định đến quá trình thành công của quy
                  trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là
                  từ phía:
                </p>
                <ul className="mb-6 space-y-2">
                  {" "}
                  <li>
                    • Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh
                    nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh
                    nghiệp có áp dụng quy tắc này hay không.
                  </li>
                  <li>
                    • Chương trình, kế hoạch thực hiện quy trình: Sau khi phía
                    lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng,
                    kế hoạch thực hiện triển khai 5S. 
                  </li>
                  <li>
                    • Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp
                    cần huy động và khuyến khích nhân viên tự nguyện thực hiện
                    vì lợi ích chung của tổ chức, của doanh nghiệp.
                  </li>
                </ul>
                <p className="mb-4">
                  Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng
                  cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi
                  bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình.
                  Và với những thông tin bổ ích như trên, FOSO mong rằng phần
                  nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt
                  bậc trong tương lai.
                </p>
                {/* Additional content would go here */}
              </div>
              <div className="rounded-3xl border bg-white p-8">
                <h3 className="mb-2 text-center text-lg font-medium">
                  Bạn thấy bài viết như thế nào?
                </h3>
                <p className="mb-6 text-center text-sm text-gray-500">
                  4 phản hồi
                </p>

                <div className="flex flex-wrap justify-center gap-8">
                  {/* Hữu ích - Active item with border */}
                  <div className="flex w-16 flex-col items-center rounded-lg border border-green-400 bg-white p-2">
                    <span className="text-2xl">👍</span>
                    <span className="text-sm font-medium">1</span>
                    <span className="text-xs text-gray-500">Hữu ích</span>
                  </div>

                  {/* Yêu thích */}
                  <div className="w-17 flex flex-col items-center rounded-lg bg-white p-2">
                    <span className="text-2xl">💚</span>
                    <span className="text-sm font-medium">2</span>
                    <span className="text-xs text-gray-500">Yêu thích</span>
                  </div>

                  {/* Thú vị */}
                  <div className="flex w-16 flex-col items-center rounded-lg bg-white p-2">
                    <span className="text-2xl">🤩</span>
                    <span className="text-sm font-medium">0</span>
                    <span className="text-xs text-gray-500">Thú vị</span>
                  </div>

                  {/* Bất ngờ */}
                  <div className="flex w-16 flex-col items-center rounded-lg bg-white p-2">
                    <span className="text-2xl">😲</span>
                    <span className="text-sm font-medium">1</span>
                    <span className="text-xs text-gray-500">Bất ngờ</span>
                  </div>

                  {/* Nhàm chán */}
                  <div className="w-17 flex flex-col items-center rounded-lg bg-white p-2">
                    <span className="text-2xl">😢</span>
                    <span className="text-sm font-medium">0</span>
                    <span className="text-xs text-gray-500">Nhàm chán</span>
                  </div>

                  {/* Túc giận */}
                  <div className="flex w-16 flex-col items-center rounded-lg bg-white p-2">
                    <span className="text-2xl">🤓</span>
                    <span className="text-sm font-medium">0</span>
                    <span className="text-xs text-gray-500">Túc giận</span>
                  </div>
                </div>
              </div>
              {/* Related articles section */}
              <h2 className="mb-6 mt-4 text-2xl font-bold">
                Bài Viết Liên Quan
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                        <span className="flex rounded bg-amber-100 px-2 py-1 text-xs text-amber-800">
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
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
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

            {/* Table of Contents Sidebar */}
            <div className="w-full md:w-1/3">
              <div className="top-4 rounded-lg bg-white p-4 shadow-sm">
                <div
                  className="flex cursor-pointer items-center justify-between"
                  onClick={toggleTableOfContents}
                >
                  <h3 className="text-lg font-semibold">Nội Dung Bài Viết</h3>
                  <svg
                    className={`h-6 w-6 transition-transform duration-200 ${isTableOfContentsOpen ? "rotate-180 transform" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    ></path>
                  </svg>
                </div>

                {isTableOfContentsOpen && (
                  <div className="mt-4 border-t pt-4">
                    <ul className="space-y-3">
                      {tableOfContents.map((item, index) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className={`flex items-start gap-2 ${
                              index === 0 ? "text-green-600" : "text-gray-600"
                            } hover:underline`}
                          >
                            <span>{item.id}.</span>
                            <span>{item.title}</span>
                          </a>

                          {item.subItems.length > 0 && (
                            <ul className="ml-6 mt-2 space-y-2">
                              {item.subItems.map((subItem) => (
                                <li key={subItem.id}>
                                  <a
                                    href={`#${subItem.id}`}
                                    className="flex items-start gap-2 text-gray-600 hover:text-blue-600 hover:underline"
                                  >
                                    <span>{subItem.id}</span>
                                    <span>{subItem.title}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Product Preview */}
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
        </main>
      </div>
    </div>
  );
}
