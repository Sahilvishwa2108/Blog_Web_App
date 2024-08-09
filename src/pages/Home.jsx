import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="mt-4 text-center">
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-gray-400 bg-opacity-20 px-3 py-1 text-lg font-semibold text-black">
              Login to see Latest Blogs
            </span>
            <h1 className="text-5xl font-bold">Let's See Some Sample Blogs</h1>
          </div>
          <div className="my-18 -mx-4 flex flex-wrap px-4">
            <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2">
              <a className="group block w-full" href="#">
                <img
                  className="mb-5 block w-full rounded-lg"
                  src="https://plus.unsplash.com/premium_photo-1663852297654-56d979cf72d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                />
                <span className="mb-5 block text-gray-500">Jul 20, 2023</span>
                <h4 className="mb-5 text-3xl font-semibold text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h4>
                <p className="max-w-xl text-lg text-gray-500">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  xercitation veniam consequat sunt nostrud amet.
                </p>
              </a>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <a className="group mb-8 md:flex" href="#">
                <img
                  className="h-40 w-48 rounded-lg"
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <div className="my-4 pt-2 md:ml-6 md:mt-0">
                  <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </h4>
                </div>
              </a>
              <a className="group mb-8 md:flex" href="#">
                <img
                  className="h-40 w-48 rounded-lg"
                  src="https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <div className="my-4 pt-2 md:ml-6 md:mt-0">
                  <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </h4>
                </div>
              </a>
              <a className="group mb-8 md:flex" href="#">
                <img
                  className="h-40 w-48 rounded-lg"
                  src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <div className="my-4 pt-2 md:ml-6 md:mt-0">
                  <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </h4>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
