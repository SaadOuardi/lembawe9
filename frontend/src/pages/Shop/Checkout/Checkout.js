import React, { useState } from 'react';
import { Header } from '../../../../components/Public/common/Header/Header';
import { PageSection } from '../../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../../components/Public/common/Footer/Footer';
import Burger from '../../../../assets/images/food/burger-plate.png'
import './Checkout.scss';
const Checkout = () => {
    const [discountMessageVisibility, setDiscountMessageVisibility ] = useState(false);
    const [discountMessage, setDiscountMessage] = useState('');
    const [discountCode, setDiscountCode] = useState('');

    const handleDiscountCode = (e) =>{
        setDiscountCode(e.target.value);
    }
    const handleDiscountMessage = () => {
        if(discountCode === '1111'){
            setDiscountMessage('You got 10% off!');
        }else{
            setDiscountMessage('Enter a valid discount code or gift card');
        }
    }

    return (
        <>
            <Header/>
            <PageSection Title='Checkout'/>
            <main className='checkout'>
                <div className='main-checkout'>
                    <div className='checkout-forms left-side'>
                        <div className='checkout-containers'>
                            <div className='contact-container'>
                                <div className='input-container'>
                                    <div className='title'>
                                        <h1>Contact</h1>
                                    </div>
                                    <div className='primary-input-container'>
                                        <input type="email" placeholder='Email' />
                                    </div>
                                </div>
                            </div>
                            <div className='delivery-container'>
                                <div className='title'>
                                    <h1>Delivery</h1>
                                </div>
                                <div className='primary-input-container'>
                                    <input type="text" placeholder='Germany' />
                                </div>
                                <div className='secondary-input-container'>
                                    <input type="text" placeholder='First name'/>
                                    <input type="text" placeholder='Last name'/>
                                </div>
                                <div className='primary-input-container'>
                                    <input type="text" placeholder='Company (optional)' />
                                </div>
                                <div className='primary-input-container'>
                                    <input type="text" placeholder='Address' />
                                </div>
                                <div className='primary-input-container'>
                                    <input type="text" placeholder='Apartment, suite, etc, (optional)' />
                                </div>
                                <div className='secondary-input-container'>
                                    <input type="text" placeholder='Postal code'/>
                                    <input type="text" placeholder='City'/>
                                </div>
                                <div className='primary-input-container'>
                                    <input type="phone" placeholder='Phone' />
                                </div>
                            </div>
                            <div className='payment-container'>
                                <div className='title'>
                                    <h1>Payment</h1>
                                </div>
                                <div className='description'>
                                    <h6>All transactions are secure and encrypted.</h6>
                                </div>
                                <div className='payment-form'>
                                    <div className='payment-header'>
                                        <input type="radio" />
                                        <span>Credit card</span>
                                    </div>
                                    <div className='primary-input-container'>
                                        <input type="text" placeholder='Card number' />
                                    </div>
                                    <div className='secondary-input-container'>
                                        <input type="text" placeholder='Expiration date (MM / YY)'/>
                                        <input type="number" placeholder='Security code'/>
                                    </div>
                                    <div className='primary-input-container'>
                                        <input type="text" placeholder='Name on card' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='product-details right-side'>
                        <div className='product-containers'>
                            <div className='product-image-name-price'>
                                <div className='product-image-name'>
                                    <div className='product-image'>
                                        <img src={Burger} alt="" />
                                    </div>
                                    <div className='product-name'>
                                        <h4>Cheese burger</h4>
                                    </div>
                                </div>
                                <div className='product-price'>
                                    <h4>$14.00</h4>
                                </div>
                            </div>
                            <div className='discount-code-container'>
                                <div className='discount-code-input-button'>
                                    <input
                                        onChange={handleDiscountCode}
                                        type="text" 
                                        placeholder='Discount code or gift card' />
                                    <button onClick={handleDiscountMessage}>Appply</button>
                                </div>
                                {discountMessage &&
                                    <div className='dicount-code-message'>
                                        <p className={`${discountCode === '1111'? 'valid':'error'}`}>{discountMessage}</p>
                                    </div>
                                }
                            </div>
                            <div className='product-subtotal-container flex-center-spacebetween'>
                                <h4>Subtotal</h4>
                                <h4>$17.00</h4>
                            </div>
                            <div className='product-shipping-container flex-center-spacebetween'>
                                <h4>Shipping</h4>
                                <h4>$19.99</h4>
                            </div>
                            <div className='product-total-container flex-center-spacebetween'>
                                <h4>Total</h4>
                                <h4>$36.99</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Checkout;
