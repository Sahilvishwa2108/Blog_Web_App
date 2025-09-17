import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                } else {
                    navigate('/')
                }
                setLoading(false)
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

  return post ? (
    <div className='py-8 bg-gray-50 min-h-screen'>
        <Container>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Post</h1>
                <p className="text-gray-600">Update your story</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
                <PostForm post={post} />
            </div>
        </Container>
    </div>
  ) : null
}

export default EditPost