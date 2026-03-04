import React from 'react';

// Lesson 3: Components and Props
function Header({ cartCount, toggleCart }) {
  return (
    <header>
      <div className="logo">
        <h2 style={{ margin: 0 }}>Aura Headphones</h2>
      </div>
      <button className="cart-btn" onClick={toggleCart}>
        🛒 Cart ({cartCount})
      </button>
    </header>
  );
}

export default Header;