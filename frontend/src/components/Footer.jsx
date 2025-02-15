import React from 'react'
import { FaFacebook, FaInstagram , FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-gray-400 p-8 w-screen">
        <div className="max-w-6xl mx-auto">
          <div className="flex space-x-6 mb-4">
            <Link to="/browse" className="text-xl"><FaFacebook /></Link>
            <Link to="/browse" className="text-xl"><FaInstagram/></Link>
            <Link to="/browse" className="text-xl"><FaSquareXTwitter/></Link>
            <Link to="/browse" className="text-xl"><FaYoutube/></Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex flex-col gap-4">
              <Link to="/browse" className='hover:underline'>Audio Description</Link>
              <Link to="/browse" className='hover:underline'>Investor Relations</Link>
              <Link to="/browse" className='hover:underline'>Legal Notices</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/browse" className='hover:underline'>Help Centre</Link>
              <Link to="/browse" className='hover:underline'>Jobs</Link>
              <Link to="/browse" className='hover:underline'>Cookie Preferences</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/browse" className='hover:underline'>Gift Cards</Link>
              <Link to="/browse" className='hover:underline'>Terms of Use</Link>
              <Link to="/browse" className='hover:underline'>Corporate Information</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/browse" className='hover:underline'>Media Centre</Link>
              <Link to="/browse" className='hover:underline'>Privacy</Link>
              <Link to="/browse" className='hover:underline'>Contact Us</Link>
            </div>
          </div>
  
          <div className="mt-4">
            <button className="border border-gray-400 px-4 py-2 text-sm hover:text-white cursor-pointer">
              Service Code
            </button>
          </div>
  
          <p className="text-xs mt-4">&copy; 1997-2025 Netflix, Inc.</p>
        </div>
      </footer>
    )
}
