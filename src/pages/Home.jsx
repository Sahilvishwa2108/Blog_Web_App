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
            <span className="mb-4 inline-block rounded-full bg-blue-600 bg-opacity-20 px-3 py-1 text-lg font-semibold text-blue-600">
              Welcome to TechBlog
            </span>
            <h1 className="text-5xl font-bold text-gray-900">Discover Amazing Tech Stories</h1>
            <p className="mt-4 text-lg text-gray-600">
              Join our community of developers and tech enthusiasts. Share your knowledge and learn from others.
            </p>
          </div>
          <div className="my-18 -mx-4 flex flex-wrap px-4">
            <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2">
              <a className="group block w-full" href="#">
                <img
                  className="mb-5 block w-full rounded-lg transition-transform duration-300 hover:scale-105"
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                  alt="Featured Article"
                />
                <span className="mb-3 block text-sm text-blue-600 font-medium">FEATURED • Dec 15, 2024</span>
                <h4 className="mb-4 text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  The Future of Web Development: React 19 and Beyond
                </h4>
                <p className="max-w-xl text-gray-600 leading-relaxed">
                  Explore the latest features in React 19, including Server Components, Concurrent Features, and 
                  how they're reshaping modern web development. Learn what these changes mean for developers.
                </p>
              </a>
            </div>
            <div className="w-full px-4 lg:w-1/2 space-y-6">
              <a className="group flex flex-col sm:flex-row hover:bg-gray-50 p-4 rounded-lg transition-colors" href="#">
                <img
                  className="h-32 w-full sm:w-40 sm:h-32 rounded-lg object-cover flex-shrink-0"
                  src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="AI and Machine Learning"
                />
                <div className="mt-4 sm:mt-0 sm:ml-6 flex-grow">
                  <span className="mb-2 block text-sm text-blue-600 font-medium">AI & ML • Dec 12, 2024</span>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Building Your First AI-Powered Web Application
                  </h4>
                  <p className="text-gray-600 text-sm">Learn how to integrate AI capabilities into your web apps using modern APIs and frameworks.</p>
                </div>
              </a>
              <a className="group flex flex-col sm:flex-row hover:bg-gray-50 p-4 rounded-lg transition-colors" href="#">
                <img
                  className="h-32 w-full sm:w-40 sm:h-32 rounded-lg object-cover flex-shrink-0"
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Mobile Development"
                />
                <div className="mt-4 sm:mt-0 sm:ml-6 flex-grow">
                  <span className="mb-2 block text-sm text-blue-600 font-medium">MOBILE • Dec 10, 2024</span>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    React Native vs Flutter: A Comprehensive Comparison
                  </h4>
                  <p className="text-gray-600 text-sm">Detailed analysis of both frameworks to help you choose the right tool for your next mobile project.</p>
                </div>
              </a>
              <a className="group flex flex-col sm:flex-row hover:bg-gray-50 p-4 rounded-lg transition-colors" href="#">
                <img
                  className="h-32 w-full sm:w-40 sm:h-32 rounded-lg object-cover flex-shrink-0"
                  src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="DevOps and Cloud"
                />
                <div className="mt-4 sm:mt-0 sm:ml-6 flex-grow">
                  <span className="mb-2 block text-sm text-blue-600 font-medium">DEVOPS • Dec 8, 2024</span>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Mastering Docker and Kubernetes for Modern Applications
                  </h4>
                  <p className="text-gray-600 text-sm">Essential containerization and orchestration concepts every developer should know.</p>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8 bg-gray-50 min-h-screen">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Latest Posts</h1>
          <p className="text-gray-600">Discover the latest stories from our community</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
