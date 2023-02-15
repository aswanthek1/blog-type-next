import HomeIcon from "@/components/Icons/HomeIcon";
import TickIcon from "@/components/Icons/TickIcon";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import axios from "../../services/axios";

type formData = {
  title: string;
  content: string;
  author: string;
};

const Create = () => {
  const [blogContent, setBlogContent] = useState<formData>({
    title: "",
    content: "",
    author: "",
  });

  const handleSubmit = () => {
    console.log(blogContent);
    if (
      blogContent?.title.trim() === "" ||
      blogContent?.content.trim() === "" ||
      blogContent?.author.trim() === ""
    ) {
      toast.error("All Fields are mandatory", {
        style: {
          width: "400px",
          fontSize: "18px",
          fontWeight: 700,
          backgroundColor: "palegreen",
          color: "black",
          fontFamily: "sans-serif",
        },
      });
    } else if (
      blogContent.title.length > 30 ||
      blogContent.title.length < 3
    ) {
      toast.error("Tittle can have minimum 3 and maximum 30 charachters", {
        style: {
          width: "400px",
          fontSize: "18px",
          fontWeight: 700,
          backgroundColor: "palegreen",
          color: "black",
          fontFamily: "sans-serif",
          textAlign: "center",
        },
      });
    } else {
      axios
        .post("/blog/addBlog", blogContent)
        .then((response) => {
          console.log("response of api", response);
          setBlogContent({ title: "", content: "", author: "" });
          toast.success("Your blog is successfully created", {
            style: {
              width: "400px",
              fontSize: "18px",
              fontWeight: 700,
              backgroundColor: "palegreen",
              color: "black",
              fontFamily: "sans-serif",
            },
          });
        })
        .catch((error) => console.log(error));
    }
  };

  const onHandleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBlogContent({ ...blogContent, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="flex gap-8 p-8 md:flex-row flex-col">
        <div className=" flex-row flex gap-2 md:flex-col w-24  ">
          <Link href={`/`} >
          <div className="cursor-pointer">
            <HomeIcon />
          </div>
            </Link>
          <div onClick={handleSubmit} className="cursor-pointer">
            <TickIcon/>
          </div>
        </div>
        <div className=" flex items-center flex-col  border-4 w-full h-full p-4 gap-10">
          <input
            name="title"
            value={blogContent?.title}
            onChange={onHandleChange}
            placeholder="Tittle..."
            className="text-2xl text-center focus:outline-none w-full"
          />
          <hr />
          <textarea
            name="content"
            id=""
            value={blogContent?.content}
            onChange={onHandleChange}
            placeholder="Type about the topic..."
            className="w-full p-4 h-[350px] focus:outline-none resize-none"
          ></textarea>
          <div className="flex justify-start w-full">
            <input
              className="focus:outline-none pl-4"
              placeholder="Enter your name here ..."
              type="text"
              name="author"
              id=""
              value={blogContent?.author}
              onChange={onHandleChange}
            />
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Create;
