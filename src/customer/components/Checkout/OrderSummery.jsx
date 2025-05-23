import React from 'react';

const OrderSummary = ({ items = [], subtotal = 0, shipping = 0, tax = 0 }) => {
    const total = subtotal + shipping + tax;

    return (
        <div style={{ border: '1px solid #eee', padding: 20, borderRadius: 8, maxWidth: 400 }}>
            <h2>Order Summary</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {items.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: 8 }}>
                        <span>{item.name} x {item.quantity}</span>
                        <span style={{ float: 'right' }}>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                ))}
            </ul>
            <hr />
            <div>
                <div>
                    <span>Subtotal</span>
                    <span style={{ float: 'right' }}>${subtotal.toFixed(2)}</span>
                </div>
                <div>
                    <span>Shipping</span>
                    <span style={{ float: 'right' }}>${shipping.toFixed(2)}</span>
                </div>
                <div>
                    <span>Tax</span>
                    <span style={{ float: 'right' }}>${tax.toFixed(2)}</span>
                </div>
                <hr />
                <div style={{ fontWeight: 'bold' }}>
                    <span>Total</span>
                    <span style={{ float: 'right' }}>${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;