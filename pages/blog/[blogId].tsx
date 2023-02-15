import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import HomeIcon from "@/components/Icons/HomeIcon";
import axios from "../../services/axios";
import { blogData } from "..";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get<blogData>(`/blog/getBlog/${params?.blogId}`);
  const blog: blogData = response.data;
  return {
    props: {
      blog,
    },
  };
};

const BlogSingle = ({blog}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(blog, "params of props");

  return (
    <>
      <div className="flex md:flex-row flex-col mt-7 px-6 md:px-14 py-6 gap-9">
        <Link href={`/`}>
          <div className="fixed cursor-pointer">
            <HomeIcon />
          </div>
        </Link>
        <div className="flex flex-col gap-16 px-6 md:px-36 w-full ">
          <h1 className="text-center text-4xl font-bold text-red-400 ">
            {blog?.tittle}
          </h1>
          <p className=" font-serif text-justify text-[20px] text-[#767676] ">
            {blog?.content}
          </p>
          <h1 className="text-2xl font-bold text-red-400">
            By: {blog?.author}
          </h1>
        </div>
      </div>
    </>
  );
};
export default BlogSingle;
