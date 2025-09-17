import React from 'react'

function Logo({width = '100px', className = '', textColor = 'text-white'}) {
  return (
    <div className={`flex items-center ${className}`} style={{width}}>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">T</span>
        </div>
        <span className={`text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent`}>TechBlog</span>
      </div>
    </div>
  )
}

export default Logo