import React, {useState, useEffect} from 'react'
import { Container, PostCard, SearchBar } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                setFilteredPosts(posts.documents)
            }
            setLoading(false)
        })
    }, [])

    const handleSearch = (term) => {
        setSearchTerm(term)
        if (!term.trim()) {
            setFilteredPosts(posts)
        } else {
            const filtered = posts.filter(post => 
                post.title.toLowerCase().includes(term.toLowerCase()) ||
                post.content.toLowerCase().includes(term.toLowerCase())
            )
            setFilteredPosts(filtered)
        }
    }

    if (loading) {
        return (
            <div className='w-full py-8 text-center bg-gray-50 min-h-screen'>
                <Container>
                    <div className="flex justify-center items-center min-h-[200px]">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8 bg-gray-50 min-h-screen'>
            <Container>
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">All Blog Posts</h1>
                    <p className="text-gray-600 mb-6">Discover all the amazing stories shared by our community</p>
                    
                    <div className="max-w-md">
                        <SearchBar 
                            onSearch={handleSearch} 
                            placeholder="Search posts by title or content..."
                        />
                    </div>
                </div>

                {searchTerm && (
                    <div className="mb-4">
                        <p className="text-gray-600">
                            {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} found for "{searchTerm}"
                        </p>
                    </div>
                )}

                {filteredPosts.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {filteredPosts.map((post) => (
                            <div key={post.$id}>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        {searchTerm ? (
                            <>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">No posts found</h2>
                                <p className="text-gray-600">Try adjusting your search terms or browse all posts.</p>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">No posts found</h2>
                                <p className="text-gray-600">Be the first to share your story!</p>
                            </>
                        )}
                    </div>
                )}
            </Container>
        </div>
    )
}

export default AllPosts