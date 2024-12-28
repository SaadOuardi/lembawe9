import React from 'react';
import { Header } from '../../../../components/Public/common/Header/Header';
import { PageSection } from '../../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../../components/Public/common/Footer/Footer';
import Burger from '../../../../assets/images/menu/burgers/BeefBurger.png';
import Burger2 from '../../../../assets/images/menu/burgers/DoublePattyBurger.png';
import Burger3 from '../../../../assets/images/menu/burgers/SizzleSnapBurgers.png';
import { Quantity } from '../../../../components/Public/Shop/Quantity/Quantity';
import './Cart.scss';

const Cart = () => {
    return (
        <>
            <Header/>
            <PageSection Title='Cart'/>
            <main className='Cart'>
                <div className='main-cart'>
                    <div className='cart-table'>
                        <table>
                            <thead>
                                <tr key="">
                                    <th>Remove</th>
                                    <th>PRODUCT</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key="1">
                                    <td>
                                        <div className='icon'>
                                            <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='product-image-name flex-center-center'>
                                            <img src={Burger} alt="" />
                                            <h1>Crunch Burger</h1>
                                        </div>
                                    </td>
                                    <td>$25.99</td>
                                    <td>
                                        <Quantity/>
                                    </td>
                                    <td>$25.99</td>
                                </tr>
                                <tr key="1">
                                    <td>
                                        <div className='icon'>
                                            <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='product-image-name flex-center-center'>
                                            <img src={Burger} alt="" />
                                            <h1>Crunch Burger</h1>
                                        </div>
                                    </td>
                                    <td>$25.99</td>
                                    <td>
                                        <Quantity/>
                                    </td>
                                    <td>$25.99</td>
                                </tr>
                                <tr key="1">
                                    <td>
                                        <div className='icon'>
                                            <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='product-image-name flex-center-center'>
                                            <img src={Burger} alt="" />
                                            <h1>Crunch Burger</h1>
                                        </div>
                                    </td>
                                    <td>$25.99</td>
                                    <td>
                                        <Quantity/>
                                    </td>
                                    <td>$25.99</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='cart-summary'>
                        <div>
                            <h1>ORDER SUMMARY</h1>
                            <hr/>
                        </div>
                        <div>
                            <div className='Subtotal Flex-Center Flex-SpaceBetween'>
                                <h5>SUBTOTAL</h5>
                                <p><span>$</span><span>56.00</span></p>
                            </div>
                            <div className='Flex-Center Flex-SpaceBetween'>
                                <h5>STANDARD DELIVERY</h5>
                                <p><span>$</span><span>5.00</span></p>
                            </div>
                            <div className='Flex-Center Flex-SpaceBetween'>
                                <h5>COUPON DISCOUNT</h5>
                                <p><span>-</span><span>$</span><span>56.00</span></p>
                            </div>
                            <hr/>
                        </div>
                        <div className='Flex-Center Flex-SpaceBetween'>
                            <h3>TOTAL</h3>
                            <h3><span>$</span><span>54.99</span></h3>
                        </div>
                        <button>Proceed To Checkout</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Cart;
