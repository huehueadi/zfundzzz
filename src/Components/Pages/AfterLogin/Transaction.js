import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Fetch transactions with cookies automatically sent
        const response = await axios.get('http://localhost:7000/api/admin/details', {
          withCredentials: true // Ensure cookies are included
        });
        setTransactions(response.data.transactionsDetails);
      } catch (err) {
        setError('Error fetching transactions');
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <div className="container-fluid py-4">
        <div className="mb-4">
          <h3 className="text-3xl font-semibold mb-2">Transaction Details</h3>
        </div>
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Property Name</th>
              <th style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Address</th>
              <th style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Amount</th>
              <th style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Order ID</th>
              <th style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Payment ID</th>
              <th style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Created At</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
                  No transactions available.
                </td>
              </tr>
            ) : (
              transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td style={{ textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {transaction.propertyId?.property_name || 'N/A'}
                  </td>
                  <td style={{ textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {transaction.propertyId?.property_address || 'N/A'}
                  </td>
                  <td style={{ textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    ${transaction.amount.toLocaleString()}
                  </td>
                  <td style={{ textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {transaction.razorpay_order_id}
                  </td>
                  <td style={{ textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {transaction.razorpay_payment_id}
                  </td>
                  <td style={{ textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {new Date(transaction.created_at).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
