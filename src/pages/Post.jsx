import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container, SocialShare } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    // Calculate reading time based on content length
    const calculateReadingTime = (content) => {
        if (!content) return 1;
        const wordsPerMinute = 200;
        const textLength = content.replace(/<[^>]+>/g, '').length;
        const words = textLength / 5; // Average word length is 5 characters
        return Math.max(1, Math.ceil(words / wordsPerMinute));
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Recently';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                } else {
                    navigate("/");
                }
                setLoading(false);
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    const deletePost = () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            appwriteService.deletePost(post.$id).then((status) => {
                if (status) {
                    appwriteService.deleteFile(post.featuredImage);
                    navigate("/");
                }
            });
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return post ? (
        <div className="py-8 bg-gray-50 min-h-screen">
            <Container>
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="relative">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-64 md:h-80 object-cover"
                        />
                        {isAuthor && (
                            <div className="absolute top-4 right-4 flex space-x-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button className="bg-white text-green-600 hover:bg-green-50 border border-green-600">
                                        Edit
                                    </Button>
                                </Link>
                                <Button 
                                    onClick={deletePost}
                                    className="bg-white text-red-600 hover:bg-red-50 border border-red-600"
                                >
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                    
                    <div className="p-6 md:p-8">
                        <div className="mb-4">
                            <div className="flex items-center text-sm text-gray-600 mb-2">
                                <span>{formatDate(post.$createdAt)}</span>
                                <span className="mx-2">•</span>
                                <span>{calculateReadingTime(post.content)} min read</span>
                                {post.status === 'active' && (
                                    <>
                                        <span className="mx-2">•</span>
                                        <span className="text-green-600 font-medium">Published</span>
                                    </>
                                )}
                            </div>
                        </div>
                        
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            {post.title}
                        </h1>
                        
                        <div className="prose prose-lg max-w-none">
                            {parse(post.content)}
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <SocialShare 
                                url={window.location.href}
                                title={post.title}
                            />
                        </div>
                        
                        <div className="mt-6">
                            <Link 
                                to="/all-posts"
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                            >
                                ← Back to all posts
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
