import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                // Create an Axios instance
                const axiosInstance = axios.create({
                    baseURL: 'http://localhost:7000/api/admin',
                    withCredentials: true, 
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                // Fetch portfolio data
                const response = await axiosInstance.get('/portfolio');
                setPortfolio(response.data.portfolio);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching portfolio:', error.response || error.message);
              
                setLoading(false);
            }
        };

        fetchPortfolio();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mt-4">
            <div className="container-fluid py-4">
                <div className="row">
                    {/* Total Investment Card */}
                    <div className="col-xl-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-column align-items-center">
                                    <p className="text-muted align-items-center mb-0">Total Investment</p>
                                    <h4 className="mb-0">$3,462</h4> {/* Use dynamic value if needed */}
                                </div>
                                <i className="bi bi-cash-stack fs-2"></i> {/* Bootstrap Icons */}
                            </div>
                            <div className="card-body text-center">
                                <p className="mb-0"><span className="text-danger">-2%</span> than yesterday</p>
                            </div>
                        </div>
                    </div>

                    {/* Anticipated Return Card */}
                    <div className="col-xl-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-column align-items-center">
                                    <p className="text-muted mb-0">Anticipated Return</p>
                                    <h4 className="mb-0">$3,462</h4> {/* Use dynamic value if needed */}
                                </div>
                                <i className="bi bi-graph-up-arrow fs-2"></i> {/* Bootstrap Icons */}
                            </div>
                            <div className="card-body text-center">
                                <p className="mb-0"><span className="text-danger">-2%</span> than yesterday</p>
                            </div>
                        </div>
                    </div>

                    {/* Maximum ROI Card */}
                    <div className="col-xl-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-column align-items-center">
                                    <p className="text-muted mb-0">Maximum ROI</p>
                                    <h4 className="mb-0">$3,462</h4> {/* Use dynamic value if needed */}
                                </div>
                                <i className="bi bi-percent fs-2"></i> {/* Bootstrap Icons */}
                            </div>
                            <div className="card-body text-center">
                                <p className="mb-0"><span className="text-danger">-2%</span> than yesterday</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Property Name</th>
                        <th style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Location</th>
                        <th style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Anticipated Cost</th>
                        <th style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Total Investment</th>
                        <th style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Number of Tickets</th>
                        <th style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Each Ticket Price</th>
                        <th style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Purchase Time</th>
                    </tr>
                </thead>
                <tbody>
                    {portfolio.length > 0 ? (
                        portfolio.map((property, index) => (
                            <tr key={index}>
                                <td style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', textAlign: 'center', verticalAlign: 'middle' }}>{property.propertyName}</td>
                                <td style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', textAlign: 'center', verticalAlign: 'middle' }}>{property.propertyLocation}</td>
                                <td style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', textAlign: 'center', verticalAlign: 'middle' }}>${property.anticipatedCost.toLocaleString()}</td>
                                <td style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', textAlign: 'center', verticalAlign: 'middle' }}>${property.totalInvestment.toLocaleString()}</td>
                                <td style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', textAlign: 'center', verticalAlign: 'middle' }}>{property.numberOfTickets}</td>
                                <td style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', textAlign: 'center', verticalAlign: 'middle' }}>${property.ticketPrice.toLocaleString()}</td>
                                <td style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', textAlign: 'center', verticalAlign: 'middle' }}>{new Date(property.purchaseTime).toLocaleString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>No portfolio data available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Portfolio;
