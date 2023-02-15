import Link from "next/link";
import { blogData } from "@/pages";

type blogsType = {
  blog: {
    _id?: string;
    tittle?: string;
    content?: string;
    author?: string;
  };
};

const Card = ({ blog }: blogsType) => {
  return (
    <>
      <div>
        <Link href={`/blog/${blog._id}`}>
          <div
            className="md:w-[300px] w-[280px] bg-[#D9D9D9] h-[180px] rounded-[15px] mx-auto my-[30px] flex flex-col justify-center items-center font-bold font-sans text-gray-600"
          >
            {blog?.tittle}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
