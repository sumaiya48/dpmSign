import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Star, Loader2 } from 'lucide-react';
import { useParams } from 'react-router-dom';


export default function CustomersReview() {
  const { productId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', rating: 0, description: '' });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  // Fetch existing reviews
  const fetchReviews = async () => {
    try {
      const res = await axios.get(`https://test.api.dpmsign.com/api/product/${productId}`);
      setReviews(res.data.data.product.reviews || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingSelect = (rating) => {
    setForm((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.rating || !form.description) {
      setAlert({ type: 'error', message: 'Please complete all fields.' });
      return;
    }

    setLoading(true);
    setAlert({ type: '', message: '' });

    try {
      // 🔴 When review POST API is available, enable below:
      // await axios.post(`https://test.api.dpmsign.com/api/product/${productId}/reviews`, form);

      console.log('Submitting review:', { productId, ...form });

      setAlert({ type: 'success', message: 'Thank you! Your review has been submitted.' });
      setForm({ name: '', email: '', rating: 0, description: '' });
      fetchReviews();
    } catch {
      setAlert({ type: 'error', message: 'Submission failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 py-12">
      <div className="w-full ">
          <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>

          {reviews.length === 0 ? (
            <p className="text-gray-500 mb-6">Be the first to review this product.</p>
          ) : (
            <div className="space-y-4 mb-6">
              {reviews.map((review) => (
                <div
                  key={review.reviewId}
                  className="border p-4 rounded-xl shadow-sm bg-white"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{review.customer?.name || 'Anonymous'}</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.description}</p>
                </div>
              ))}
            </div>
          )}

          <h3 className="text-xl font-semibold mb-2">Write a Review</h3>

          {alert.message && (
            <div
              className={`p-3 mb-4 rounded text-sm ${
                alert.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {alert.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                className="border w-full px-3 py-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="border w-full px-3 py-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Rating *</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className={`cursor-pointer ${
                      form.rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                    onClick={() => handleRatingSelect(star)}
                  />
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Review *</label>
              <textarea
                name="description"
                rows={4}
                value={form.description}
                onChange={handleInputChange}
                className="border w-full px-3 py-2 rounded"
                placeholder="your review here..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0094C6] hover:bg-[#0077a4] text-white px-6 py-2 rounded shadow flex items-center gap-2"
            >
              {loading && <Loader2 className="animate-spin w-4 h-4" />}
              Submit Review
            </button>
          </form>
        </div>
    </section>
  );
}
