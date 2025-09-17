import React,{useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import authService from "./appwrite/auth.js";
import {login, logout} from "./store/authSlice.js";
import './App.css'
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import {Outlet} from 'react-router-dom';

function App() {
  
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() =>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      }
    })
    .finally(()=>{
      setLoading(false);
    })
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <Header/>
      <main className='flex-grow'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">Loading TechBlog...</h2>
      </div>
    </div>
  );
}

export default App
