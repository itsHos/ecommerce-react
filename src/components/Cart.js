import React from 'react';

function Cart({ cartItems, onClose, onRemove, onUpdate }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>Your Cart</h2>
          <button onClick={onClose} style={{ cursor: 'pointer', border: 'none', background: 'none', fontSize: '1.5rem' }}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div style={{ flex: 1 }}>
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                  <div className="qty-controls">
                    <button onClick={() => onUpdate(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdate(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => onRemove(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            <div style={{ marginTop: '2rem', borderTop: '2px solid #eee', paddingTop: '1rem' }}>
              <h3>Total: ${total}</h3>
              <button className="add-btn">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;