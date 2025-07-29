import SingleBlog from "@/components/construction/SingleBlog";
import blogData from "@/components/construction/constructionData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "더오름이앤씨 | 031-869-3453",
  // description: "",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="시공실적"
        description="더오름이앤씨의 시공실적을 확인하세요. 다양한 건설 프로젝트와 성공적인 사례들을 소개합니다."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div key={blog.id} className="w-full px-4 pb-[40px] md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                {/* <li className="mx-1">
                  <a href="#0" className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white">
                    Prev
                  </a>
                </li> */}
                <li className="mx-1">
                  <a href="#0" className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white">
                    1
                  </a>
                </li>
                {/* <li className="mx-1">
                  <a href="#0" className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white">
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a href="#0" className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white">
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="bg-body-color/15 text-body-color flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md px-4 text-sm">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a href="#0" className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white">
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a href="#0" className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white">
                    Next
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
