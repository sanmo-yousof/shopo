"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/blogCard";
import { BlogPosts } from "@/utils/utils";
import BlogSkeleton from "@/components/blogCardSkeleton";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlogs(BlogPosts);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Banner */}
      <div className="bg-blue-100 w-full h-[180px] flex items-center justify-center">
        <h2 className="sectionHeading">ShopO Blog</h2>
      </div>

      {/* Blog Cards */}
      <div className="grid max-w-7xl px-4 my-8 lg:my-16 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, i) => <BlogSkeleton key={i} />)
          : blogs.map((post) => <BlogCard key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Blog;
