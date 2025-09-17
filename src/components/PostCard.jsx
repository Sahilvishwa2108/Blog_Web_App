import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage, createdAt, status}) {
    const formatDate = (dateString) => {
        if (!dateString) return 'Recently'
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        })
    }
    
    return (
        <Link to={`/post/${$id}`} className="block">
            <div className='w-full bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group'>
                <div className='w-full mb-4 relative overflow-hidden'>
                    <img 
                        src={appwriteService.getFilePreview(featuredImage)} 
                        alt={title}
                        className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300' 
                    />
                </div>
                <div className="p-4">
                    <div className="mb-2">
                        <span className="text-sm text-blue-600 font-medium">
                            {formatDate(createdAt)}
                        </span>
                        {status === 'active' && (
                            <span className="ml-2 inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                        )}
                    </div>
                    <h2 className='text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2'>
                        {title}
                    </h2>
                </div>
            </div>
        </Link>
    )
}


export default PostCard