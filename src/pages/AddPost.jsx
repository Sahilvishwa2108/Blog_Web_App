import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8 bg-gray-50 min-h-screen'>
        <Container>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Post</h1>
                <p className="text-gray-600">Share your knowledge with the community</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
                <PostForm />
            </div>
        </Container>
    </div>
  )
}

export default AddPost