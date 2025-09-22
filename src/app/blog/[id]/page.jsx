"use client";
import { BlogPosts } from "@/utils/utils";
import { Calendar, MessageSquare, Share2Icon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import facebook from "@/asset/socialImages/facebook.png";
import x from "@/asset/socialImages/x.png";
import instagram from "@/asset/socialImages/instagram.png";
import youtube from "@/asset/socialImages/youtube.png";

const BlogDetails = () => {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState(null);

  useEffect(() => {
    if (!id) return;
    const blog = BlogPosts.find((b) => String(b.id) === String(id));
    setSingleBlog(blog || null);
  }, [id]);

  const social = [facebook, x, instagram, youtube];
  return (
    <div className="grid gap-12 max-w-7xl px-4 py-6 mx-auto grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-2 ">
        <div className=" justify-center my-4 flex items-center  gap-2 text-sm ">
          <span className="bg-primary rounded text-white p-1">
            {singleBlog?.category}
          </span>
        </div>

        <div className="md:text-2xl text-center sm:text-lg text-sm lg:mb-4 mb-2 leading-tight group-hover:text-primary transition-colors">
          {singleBlog?.title}
        </div>

        <div className="flex justify-center gap-3 mb-3">
          <div className="text-xs gap-2 text-gray-500 flex items-center">
            <p>Posted by</p>
            <User className="w-5 h-5 rounded-full border" />
          </div>
          <div className="flex gap-2">
            <Share2Icon className="w-5 text-gray-500 h-5" />
            <MessageSquare className="w-5 text-gray-500 h-5" />
          </div>
        </div>
        <div className="sm:h-[300px]  h-[250px] lg:h-[450px]">
          <Image
            src={singleBlog?.image}
            alt="blog"
            width={500}
            height={500}
            className="h-full w-full"
          />
        </div>
        <p className="mt-6 text-xs text-justify text-gray-500  sm:text-sm">
          {singleBlog?.fullDescription}
        </p>

        <div className="my-12">
          <h3 className="text-base text-gray-600 font-semibold sm:text-2xl">
            Eva Solo: Danish Furnishing Accessories
          </h3>
          <hr />
          <div className="flex flex-col lg:flex-row mt-4 gap-4">
            <div className="flex-1 grid  grid-cols-2 gap-3">
              <Image
                src={singleBlog?.image}
                alt="blog"
                width={500}
                height={500}
                className="h-full w-full"
              />
              <Image
                src={singleBlog?.image}
                alt="blog"
                width={300}
                height={300}
                className="h-full w-full"
              />
              <Image
                src={singleBlog?.image}
                alt="blog"
                width={300}
                height={300}
                className="h-full w-full"
              />
              <Image
                src={singleBlog?.image}
                alt="blog"
                width={300}
                height={300}
                className="h-full w-full"
              />
            </div>
            <div className="flex-1">
              <p className="mt-2 text-xs text-justify text-gray-500  sm:text-[13px]">
                A taciti cras scelerisque scelerisque gravida natoque nulla
                vestibulum turpis primis adipiscing faucibus scelerisque
                adipiscing aliquet pretium. Et iaculis mi velit tincidunt
                vestibulum a duis tempor non magna ultrices porta malesuada
                ullamcorper scelerisque parturient himenaeos iaculis sit.
                Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum
                pretium commodo inceptos.
              </p>
              <p className="mt-2 text-xs text-justify text-gray-500  sm:text-[13px]">
                A taciti cras scelerisque scelerisque gravida natoque nulla
                vestibulum turpis primis adipiscing faucibus scelerisque
                adipiscing aliquet pretium. Et iaculis mi velit tincidunt
                vestibulum a duis tempor non magna ultrices porta malesuada
                ullamcorper scelerisque parturient himenaeos iaculis sit.
                Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum
                pretium commodo inceptos.
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs text-justify text-gray-500  sm:text-sm">
            {singleBlog?.fullDescription}
          </p>
        </div>
        <div className="">
          <h3 className="text-base text-gray-600 font-semibold sm:text-2xl">
            Leave a Reply
          </h3>
          <hr />
          <p className="mt-4 text-xs text-gray-500  sm:text-sm">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form className="text-xs">
            <div className="flex flex-col space-y-2 mt-4">
              <label className="text-gray-500" htmlFor="comment">
                Comment*
              </label>
              <textarea
                id="comment"
                name="comment"
                placeholder="Enter your full address"
                className="border p-3 rounded-md w-full focus:outline-none focus:ring-0"
                rows={4}
              ></textarea>
            </div>
            <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label className="text-gray-600" htmlFor="name">
                  Name*
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="border p-3 rounded-md focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-gray-600" htmlFor="email">
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="border p-3 rounded-md focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full space-y-2">
              <label className="text-gray-600" htmlFor="website">
                Website*
              </label>
              <input
                id="website"
                type="url"
                name="website"
                placeholder="Your Website (url)"
                className="border w-full rounded-md p-3 focus:outline-none"
                required
              />
            </div>
            <div className="mt-6">
              <input
                type="submit"
                className="px-6 text-white rounded cursor-pointer py-3 bg-primary"
                value={"Post Comment"}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="md:col-span-1  ">
        <div>
          <h3 className="text-sm font-semibold sm:text-lg text-gray-700">
            Categories
          </h3>
          <hr />
          <div className="text-xs md:text-sm mt-4 flex flex-col space-y-2 text-gray-500">
            <span>
              <Link href={"#"}>Gameing</Link>
            </span>
            <span>
              <Link href={"#"}>Laptop</Link>
            </span>
            <span>
              <Link href={"#"}>Headphone</Link>
            </span>
            <span>
              <Link href={"#"}>Mobile</Link>
            </span>
            <span>
              <Link href={"#"}>Laptop</Link>
            </span>
            <span>
              <Link href={"#"}>Headphone</Link>
            </span>
            <span>
              <Link href={"#"}>Mobile</Link>
            </span>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-sm font-semibold sm:text-lg text-gray-700">
            Recent Post
          </h3>
          <hr />
          <div className="space-y-3 mt-4">
            {BlogPosts?.slice(0, 3)?.map((blog, indx) => {
              return (
                <div key={indx} className="flex  gap-4">
                  <div className="w-20 h-16 md:h-12 md:w-14 lg:h-18 lg:w-20">
                    <Image
                      alt="blog"
                      src={blog.image}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="">
                    <h4 className="text-xs lg:text-sm font-semibold">
                      Purus lobortis senectus faucibus lobortis....
                    </h4>
                    <p className="text-xs flex gap-1 items-center text-gray-500">
                      <Calendar className="w-4" /> 17 Jan
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-sm font-semibold sm:text-lg text-gray-700">
            Our Instagram
          </h3>
          <hr />
          <div className="mt-4 grid grid-cols-4 gap-2">
            {BlogPosts?.map((blog, indx) => {
              return (
                <div key={indx} className="">
                  <Image
                    alt="blog"
                    src={blog.image}
                    className="w-full h-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-6">
          <h3 className="text-sm font-semibold sm:text-lg text-gray-700">
            Recent Comments
          </h3>
          <hr />
          <div className="text-xs  mt-4 flex  items-center gap-2 text-gray-500">
            <MessageSquare className="h-5 w-5" />
            <p>
              Mr. Mackay on <span className="text-black">Indoor bench</span>
            </p>
          </div>
          <div className="text-xs  mt-2 flex  items-center gap-2 text-gray-500">
            <MessageSquare className="h-5 w-5" />
            <p>
              Donald Holmes on{" "}
              <span className="text-black"> Best clock parallels</span>
            </p>
          </div>
          <div className="text-xs  mt-2 flex  items-center gap-2 text-gray-500">
            <MessageSquare className="h-5 w-5" />
            <p>
              Mr. Mackay on <span className="text-black">Char with love</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="flex space-x-2 justify-center mt-4">
          {social?.map((single, indx) => {
            return (
              <div key={indx}>
                <Link href={"#"}>
                  <Image width={30} height={30} alt="social" src={single} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
