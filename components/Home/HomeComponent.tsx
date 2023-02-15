import Link from 'next/link'
import Card from "../card/Card";
import CreateIcon from "../Icons/CreateIcon";
import { blogData } from '@/pages';

type data ={
  blogs:[]
}


const HomeComponent = ({blogs}:data) => {
  console.log(blogs,"ata props");
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-4">
     {blogs.map((blog:any) => {
        return <Card blog={blog} key={blog._id} />;
        })}
      </div>
      <Link href={`/create`}>
      <div className="fixed left-[43%]  md:left-[91%]  bottom-[61px] cursor-pointer "  >
        <CreateIcon />
      </div>
        </Link>
    </>
  );
};

export default HomeComponent;
