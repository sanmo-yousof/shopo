import {
  ArrowRight,
  MessageSquare,
  Share2Icon,
  User,
} from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post }) => {
  return (
    <div
      key={post.id}
      className="group hover:shadow-lg border rounded-md transition-all duration-300 overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div
          variant="secondary"
          className="absolute top-3 rounded shadow p-3 left-3 bg-background/90 backdrop-blur-sm"
        >
          {post.date}
        </div>
      </div>

      <div className="p-4">
        <div className=" text-center my-4 flex items-center  gap-2 text-sm ">
          <span className="bg-[#1867d6] rounded text-white p-1">
            {post.category}
          </span>
        </div>

        <div className="md:text-xl text-center sm:text-lg text-sm lg:mb-4 mb-2 leading-tight group-hover:text-primary transition-colors">
          {post.title}
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

        <div className="pt-0 text-center">
          <div className="text-xs text-gray-500 leading-relaxed mb-4">
            {post.description}
          </div>

          <Link href={`/blog/${post?.id}`}>
            <Button variant="outline" className="cursor-pointer font-medium ">
              Read more
              <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
