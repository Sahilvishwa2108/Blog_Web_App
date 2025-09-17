import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function LandingPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents.slice(0, 6)); // Show only 6 latest posts
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <Container>
        {/* Hero Section */}
        <div className="relative z-10 pt-20 pb-16 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading with Gradient Text */}
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                TechBlog
              </span>
            </h1>
            
            {/* Animated Subheading */}
            <div className="text-2xl md:text-4xl font-bold text-white mb-8 opacity-90">
              <span className="inline-block animate-bounce-slow">Where</span>
              <span className="inline-block mx-3 text-yellow-400 animate-pulse">Innovation</span>
              <span className="inline-block animate-bounce-slow animation-delay-1000">Meets</span>
              <span className="inline-block mx-3 text-cyan-400 animate-pulse animation-delay-2000">Code</span>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-1000">
              Dive into the future of technology with cutting-edge insights, tutorials, and stories from the world's most innovative developers. Join our community of creators, learners, and tech enthusiasts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animation-delay-2000">
              <Link to="/all-posts" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <span className="flex items-center space-x-5">
                    <span className="pr-6 text-gray-100 font-semibold text-lg">Explore Posts</span>
                  </span>
                  <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
              </Link>

              <Link to="/signup" className="group">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/25 animate-pulse-slow">
                  Start Writing Today
                </button>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative z-10 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why Choose <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">TechBlog?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of tech blogging with our cutting-edge platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Feature Cards */}
            {[
              {
                icon: "🚀",
                title: "Lightning Fast",
                description: "Built with modern tech stack for blazing fast performance and smooth user experience."
              },
              {
                icon: "🎨",
                title: "Beautiful Design",
                description: "Stunning, responsive design that looks amazing on every device and screen size."
              },
              {
                icon: "🔒",
                title: "Secure & Reliable",
                description: "Enterprise-grade security with reliable cloud infrastructure and data protection."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Posts Section */}
        {posts.length > 0 && (
          <div className="relative z-10 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Latest <span className="text-gradient bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Stories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover the most recent insights from our community of tech innovators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post, index) => (
                <div 
                  key={post.$id} 
                  className="transform hover:scale-105 transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
                    <PostCard {...post} />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/all-posts" className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl">
                View All Posts →
              </Link>
            </div>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay in the <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Loop</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest tech insights, tutorials, and exclusive content delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LandingPage;