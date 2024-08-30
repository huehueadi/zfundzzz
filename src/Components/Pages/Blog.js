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
        const response = await axios.get('https://zfundz-backend.onrender.com/api/admin/view-all-blog');
        
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
                            {blog.category}
                          </a>
                        </li>
                      </ul>
                      <a href="blog-details.html" className="btn btn-secondary">Read More</a>
                    </div>
                    <div className="dz-info">
                      <h5 className="dz-title">
                        <a href="blog-details.html">{blog.title}</a>
                      </h5>
                      <p>{blog.description}</p>
                      <div className="author-wrappper">
                        <div className="author-media">
                          <img
                            src="assets/images/avatar/avatar2.jpg"
                            alt="Author"
                          />
                        </div>
                        <div className="author-content">
                          <div className="author-head">
                            <h6 className="author-name">Hawkins Junior</h6>
                          </div>
                          <ul className="author-meta">
                            <li className="date">
                              {new Date(blog.created_at).toLocaleDateString()}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
