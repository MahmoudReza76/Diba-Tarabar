import React from "react";
import BlogTabs from "@/components/blog page/BlogTabs";
import { client } from "@/app/lib/sanity";

async function getData() {
  const query = `*[_type=="post"][0...4]{
    "imageUrl":image.asset->url,
      title,
      overview
   }
   `;
  const data = await client.fetch(query);
  return data;
}

async function Blog() {
  const data = await getData();
  return (
    <div className="w-full h-full">
      <div className="w-full h-full py-10 my-10 flex justify-center items-center">
        <BlogTabs data={data} />
      </div>
    </div>
  );
}

export default Blog;
