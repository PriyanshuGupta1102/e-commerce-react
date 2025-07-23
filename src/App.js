import React, { useState } from 'react';
import './App.css';
import mainProductImage from './product-image.jpg'; // Imports the image
import secondMainProductImage from './product-image-2.jpg';
import thirdMainProductImage from './product-image-3.jpg';

function App() {
  // State to manage the quantity of the product
  const [quantity, setQuantity] = useState(1);

  // Handler for the Add to Cart button
  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to the cart!`);
  };

  // Handler to change the quantity from the input field
  const handleQuantityChange = (event) => {
    // Intentionally allowing any value to be typed
    setQuantity(event.target.value);
  };

  return (
    <div className="product-container">

      {/* LEFT SIDE - IMAGES */}
      <div className="product-images">
        <img src={mainProductImage} alt="Main Product" className="main-image" />
        <div className="thumbnail-gallery">
          {/* These are just placeholders for now */}
          <img src={mainProductImage} alt="Thumbnail 1" className="thumbnail active" />
          <img src={secondMainProductImage} alt="Thumbnail 2" className="thumbnail" />
          <img src={thirdMainProductImage} alt="Thumbnail 3" className="thumbnail" />
        </div>
      </div>

      {/* RIGHT SIDE - DETAILS */}
      <div className="product-details">
        <h1>Timeless Elegance: A Legacy of Fine Watches</h1>
        <p className="product-price">Rs1200.00</p>
        <p className="product-description">
          Discover a world of unparalleled craftsmanship and heritage. We curate a collection of the world's most prestigious timepieces, each with a story of its own. Explore our legacy of horological excellence.
        </p>

        <div className="quantity-selector">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>

        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          // The button should be disabled if quantity is 0 or less
          disabled={quantity < 1}
        >
          Add to Cart
        </button>

        <div className="reviews">
          <h2>Customer Reviews</h2>
          <div className="review">
            <p className="review-author">Alex D.</p>
            <p className="review-rating">★★★★☆</p>
            <p className="review-text">Great watch! Very comfortable, but the color was slightly different than pictured.</p>
          </div>
          <div className="review">
            <p className="review-author">Maria S.</p>
            <p className="review-rating">★★★★★</p>
            <p className="review-text">Absolutely love it! I wear it every day.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;