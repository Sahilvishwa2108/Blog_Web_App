# TechBlog - Modern Blog Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.0-06B6D4?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Appwrite-13.0.1-FD366E?logo=appwrite" alt="Appwrite" />
</div>

## 🚀 Overview

TechBlog is a modern, full-featured blog platform built for developers and tech enthusiasts. It provides a seamless experience for creating, editing, and sharing technical content with a beautiful, responsive interface.

### ✨ Key Features

- **🔐 User Authentication**: Secure signup/login with Appwrite
- **📝 Rich Text Editor**: Advanced WYSIWYG editor powered by TinyMCE
- **🔍 Smart Search**: Real-time search functionality across all posts
- **📱 Responsive Design**: Mobile-first design that works on all devices
- **🎨 Modern UI/UX**: Clean, professional interface with smooth animations
- **🚀 Fast Performance**: Built with Vite for lightning-fast development and builds
- **📊 State Management**: Redux Toolkit for efficient state management
- **🌟 Social Sharing**: Built-in social media sharing capabilities
- **⚡ Loading States**: Professional loading indicators throughout the app
- **🎯 SEO Optimized**: Meta tags and structured data for better discoverability

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Next generation frontend tooling
- **Redux Toolkit** - Efficient Redux logic
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **TinyMCE** - Rich text editor for content creation

### Backend & Database
- **Appwrite** - Open-source backend platform
- **Cloud Storage** - File upload and management
- **Authentication** - User management and sessions
- **Database** - Document-based data storage

### Additional Libraries
- **React Hook Form** - Performant forms with easy validation
- **HTML React Parser** - Safely render HTML content
- **Lucide React** - Beautiful icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Appwrite account and project setup

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sahilvishwa2108/Blog_Web_App.git
   cd Blog_Web_App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_APPWRITE_URL=your_appwrite_endpoint
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   VITE_APPWRITE_BUCKET_ID=your_bucket_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Features in Detail

### Authentication System
- Secure user registration and login
- Session management with automatic logout
- Protected routes for authenticated users
- Form validation and error handling

### Content Management
- Create and edit blog posts with rich text editor
- Image upload and management
- Draft and publish functionality
- SEO-friendly URLs with slugs

### Search & Discovery
- Real-time search across post titles and content
- Responsive search interface
- No results state handling
- Search result highlighting

### User Interface
- Modern, clean design with consistent spacing
- Smooth hover effects and transitions
- Loading states for all async operations
- Mobile-responsive grid layouts
- Professional typography and color scheme

### Social Features
- Share posts on Twitter, LinkedIn, and Facebook
- Reading time calculation
- Post metadata display
- Author attribution

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header/          # Navigation components
│   ├── Footer/          # Footer component
│   ├── post-form/       # Post creation/editing
│   └── container/       # Layout wrapper
├── pages/               # Page components
│   ├── Home.jsx         # Landing page
│   ├── AllPosts.jsx     # Posts listing
│   ├── Post.jsx         # Individual post view
│   ├── AddPost.jsx      # Create new post
│   ├── EditPost.jsx     # Edit existing post
│   ├── Login.jsx        # Login page
│   └── Signup.jsx       # Registration page
├── appwrite/            # Backend configuration
│   ├── auth.js          # Authentication service
│   └── config.js        # Database operations
├── store/               # Redux store
│   ├── store.js         # Store configuration
│   └── authSlice.js     # Authentication state
└── conf/                # Environment configuration
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3B82F6 to #8B5CF6)
- **Success**: Green (#10B981)
- **Error**: Red (#EF4444)
- **Text**: Gray scale (#111827 to #6B7280)

### Typography
- **Font Family**: Inter, system fonts
- **Headings**: Bold, large sizes with proper hierarchy
- **Body Text**: Regular weight with good line height

### Components
- Consistent spacing using Tailwind's spacing scale
- Rounded corners (8px radius)
- Subtle shadows for depth
- Smooth transitions (200ms)

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Quality
- ESLint configuration for React
- Consistent code formatting
- Component-based architecture
- Proper error handling

## 🌐 Deployment

### Netlify/Vercel Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure environment variables on the platform
4. Set up custom domain (optional)

### Environment Variables
Ensure all Appwrite configuration variables are set in your deployment environment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sahil Vishwa**
- GitHub: [@Sahilvishwa2108](https://github.com/Sahilvishwa2108)
- Portfolio: [Add your portfolio link]
- LinkedIn: [Add your LinkedIn profile]

## 🙏 Acknowledgments

- [ChaiAurCode](https://github.com/hiteshchoudhary) for the inspiration and learning resources
- [Appwrite](https://appwrite.io) for the excellent backend platform
- [TinyMCE](https://www.tiny.cloud) for the rich text editor
- [Unsplash](https://unsplash.com) for the beautiful stock images
- React and Vite teams for amazing development tools

## 🔮 Future Enhancements

- [ ] User profiles and bio pages
- [ ] Post categories and tags
- [ ] Comment system
- [ ] Email notifications
- [ ] Advanced search filters
- [ ] Dark mode toggle
- [ ] Post analytics
- [ ] Image optimization
- [ ] Progressive Web App (PWA) features

---

<div align="center">
  <strong>Built with ❤️ using modern web technologies</strong>
</div>
