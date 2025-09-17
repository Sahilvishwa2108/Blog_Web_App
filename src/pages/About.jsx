import React, { useState, useEffect } from "react";
import { Container } from "../components";

function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Former Google engineer with 10+ years in tech. Passionate about democratizing knowledge and empowering developers worldwide.",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Alex Rodriguez",
      role: "CTO & Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack architect and AI enthusiast. Builds scalable systems and loves exploring cutting-edge technologies.",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Maya Patel",
      role: "Head of Content",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Technical writer and developer advocate. Makes complex topics accessible and engaging for all skill levels.",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "David Kim",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Community builder and former startup founder. Connects developers and fosters meaningful conversations.",
      social: { twitter: "#", linkedin: "#", github: "#" }
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Readers", icon: "👥" },
    { number: "2K+", label: "Published Articles", icon: "📚" },
    { number: "100+", label: "Expert Contributors", icon: "✍️" },
    { number: "95%", label: "Reader Satisfaction", icon: "⭐" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Innovation First",
      description: "We're always at the forefront of technology, sharing the latest innovations and breakthrough discoveries."
    },
    {
      icon: "🤝",
      title: "Community Driven",
      description: "Our platform thrives on collaboration, knowledge sharing, and supporting each other's growth journey."
    },
    {
      icon: "📈",
      title: "Quality Content",
      description: "Every article is carefully curated and reviewed to ensure accuracy, relevance, and practical value."
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "We're building a worldwide community of developers, creators, and tech enthusiasts making a difference."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px)` }}
        ></div>
      </div>

      <Container>
        {/* Hero Section */}
        <div className="relative z-10 pt-20 pb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                About Us
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-white mb-8 opacity-90 font-light">
              Where <span className="text-yellow-400 font-semibold">passion</span> meets <span className="text-cyan-400 font-semibold">innovation</span>
            </p>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-1000">
              We're a team of passionate developers, writers, and tech enthusiasts dedicated to sharing knowledge, 
              fostering innovation, and building the future of technology together.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Our <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Mission</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  To democratize technology education and create a world where anyone, regardless of background, 
                  can learn, grow, and contribute to the tech ecosystem.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  We believe that knowledge should be accessible, engaging, and practical. Through our platform, 
                  we're building bridges between complex technologies and real-world applications.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Innovation", "Education", "Community", "Growth"].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium border border-white/20 animate-fade-in-up"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="relative animate-fade-in-up animation-delay-1000">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center group">
                        <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                          {stat.icon}
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-pink-600/0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="relative z-10 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-gradient bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{value.description}</p>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="relative z-10 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The brilliant minds behind TechBlog's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white/20 group-hover:border-white/40 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a 
                        key={platform}
                        href={url}
                        className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                      >
                        <span className="text-white text-xs font-bold">{platform[0].toUpperCase()}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of a community that's shaping the future of technology. Share your knowledge, learn from others, and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center">
                  <span className="text-gray-100 font-semibold text-lg">Start Writing</span>
                </div>
              </button>
              
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/25">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;