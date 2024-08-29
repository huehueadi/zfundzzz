import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Banner from '../Masters/Banner';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Use the deployed backend URL
        const response = await axios.get('https://zfundzz-backend.onrender.com/api/admin/view-all-blog');
        
        if (response.data.success) {
          setBlogs(response.data.blogView);
        } else {
          setError('Failed to fetch blogs');
        }
      } catch (error) {
        setError('Error while fetching blogs');
        console.error('Error while fetching blogs', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="page-content bg-white">	
      <Banner />
      <section className="content-inner-2">
        <div className="container">
        <div className="section-head text-center">
      <h5 className="sub-title">CATEGORIES</h5>
      <h2 className="title">Explore Our Blogs</h2>
    
    </div>
          <div className="row">
            {blogs.length === 0 ? (
              <div>No blogs available</div>
            ) : (
              blogs.map((blog) => (
                <div key={blog._id} className="col-xl-4 col-md-6 m-b30">
                  <div className="dz-card style-1">
                    <div className="dz-media">
                      <a href="blog-details.html">
                        <img
                          src="assets/images/blog/blog-grid/pic4.jpg"
                          alt={blog.title}
                        />
                      </a>
                      <ul className="dz-badge-list">
                        <li>
                          <a href="javascript:void(0);" className="dz-badge">
                       
