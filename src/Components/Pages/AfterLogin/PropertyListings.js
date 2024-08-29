import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function PropertyListings() {
  const [properties, setProperties] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/admin/viewAll-property');
        setProperties(response.data);
      } catch (error) {
        console.log('Error while fetching properties', error);
      }
    };
    fetchProperties();
  
  }, []);
  const viewHandle =(propertyId)=>{
    navigate(`/dashboard/detail/${propertyId}`)
   }
  return (
    <div className="d-flex flex-column flex-grow-1 p-4">
      <div className="container mt-4">
        <div className="mb-4">
          <h3 className="text-3xl font-semibold mb-2">Property Listings</h3>
          <p className="text-sm text-gray-600">Explore our available rental properties</p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {properties.map((property) => (
            <div className="col" key={property._id}>
              <div className="card border-0 shadow-sm">
                <a href="#" className="d-block">
                  <img
                    src="https://via.placeholder.com/400x300"
                    alt="Property"
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                </a>
                <div className="card-body">
                  <p className="card-text text-muted">{property.propertyType}</p>
                  <a href="#" className="card-title text-dark text-decoration-none">
                    {property.propertyName}
                  </a>
                  <p className="card-text text-muted">{property.propertyAddress}</p>
                  <p className="card-text text-dark">
                    ${property.marketValue ? property.marketValue.toLocaleString() : 'N/A'}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      type="button"
                      className="btn btn-outline-primary" onClick={()=>viewHandle(property._id)} >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default PropertyListings;
 
// import React from 'react';

// function PropertyListings() {
//   return (
//     <section className="container">
//       <div className="row">
//         <div className="col-xl-4 col-md-6 mb-4">
//           <div className="card">
//             <img src="images/property/property1.jpg" className="card-img-top" alt="Property 1" />
//             <div className="card-body">
//               <h5 className="card-title"><a href="property-details.html">New Vaccine for Cattle Calf Loss</a></h5>
//               <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.</p>
//               <a href="property-details.html" className="btn btn-primary">Read More</a>
//             </div>
//             <div className="card-footer d-flex align-items-center">
//               <img src="images/avatar/avatar1.jpg" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} alt="Author 1" />
//               <div>
//                 <h6 className="mb-0">Hawkins Junior</h6>
//                 <small className="text-muted">November 21st, 2022</small>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Repeat similar blocks for other properties */}
//       </div>
//     </section>
//   );
// }

// export default PropertyListings;
