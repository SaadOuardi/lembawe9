import React , { useEffect, useState } from 'react';
import { Header } from '../../../../components/Public/common/Header/Header';
import { PageSection } from '../../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../../components/Public/common/Footer/Footer';
import { products } from '../../../../databases/products';
import User from '../../../../assets/images/author/a-1.png';
import './ProductDetails.scss';

const ProductDetails = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const [menus, setMenu] = useState([]);
    const [product, setProduct] = useState(null);
    const productId = urlParams.get('id');
    
    const handleBuyNow = () =>{
        window.location.href = '/checkout';
    }

    const handleAddToCart = () =>{
        window.location.href = '/cart';
    }

    const handleAddToWishlist = () =>{
        window.location.href = '/wishlist';
    }

    const handleBack = () =>{
        window.history.back();
    }

    useEffect( () => {
        if (products) {
            setMenu(products);
            const foundProduct = menus.find(item => item.id.toString() === productId.toString());
            if (foundProduct) {
                setProduct(foundProduct);
            }
        } else {
            console.log('Error fetching Menus database!');
        }
    }, [menus, productId]);

    return (
        <>
            <Header/>
            {/* <PageSection Title='Product details'/> */}
            <main className='ProductDetails'>
                {product ? (
                        <>
                            <div className='main-product-details'>
                                <button className='back-btn' onClick={handleBack}>Back</button>
                                <div className='product-image Flex-Center'>
                                    <img src={product.image} alt="" />
                                </div>
                                <div className='product-details'>
                                    <div className='product-data'>
                                        <div className='product-name'>
                                            <h1>{product.name}</h1>
                                        </div>
                                        <div className='product-price-product-reviews Flex-Center'>
                                            <div className='product-price'>
                                                <p><span>{product.currency}</span><span>{product.price}</span></p>
                                            </div>
                                            <div className='product-reviews-container'>
                                                <div className='Stars'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path></svg>
                                                </div>
                                                <div>
                                                    <span><span>2</span> Reviews</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='product-status'>
                                            <p><strong>In Stock</strong></p>
                                        </div>
                                        <div className='product-description'>
                                            <p>{product.description}</p>
                                        </div>
                                        <div className='product-badges'>
                                            <p><strong>SKU:</strong> <span>AU-0987</span></p>
                                            <p><strong>Category:</strong> <span>Food</span></p>
                                            <p><strong>Type:</strong> <span>{product.type}</span></p>
                                        </div>
                                    </div>
                                    <div className='product-action-btns flex-center-center'>
                                        <button className='wishlist-btn' onClick={handleAddToWishlist}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path></svg>
                                        </button>
                                        <button className='cart-btn' onClick={handleAddToCart}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>
                                        </button>
                                        <button className='buy-now-btn' onClick={handleBuyNow}>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='Main-ProductReviews Flex-Center Flex-Column'>
                                <h1>(2) REVIEWS</h1>
                                <div className='ProductReview Flex-Center'>
                                    <div className='User-Profile'>
                                        <img src={User} alt="" />
                                    </div>
                                    <div className='UserName-ReviewStars'>
                                        <p>Ethan Clarke</p>
                                        <div className='Stars'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path></svg>
                                        </div>
                                        <div className='User-Review'>
                                            <p>Lorem ipsum dolor sit amet consectetur. Neque dictum gravida nunc euismod. Nulla dolor rutrum consectetur purus proin ut. Cras cursus nullam erat at aliquet luctus et purus urna.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='ProductReview Flex-Center'>
                                    <div className='User-Profile'>
                                        <img src={User} alt="" />
                                    </div>
                                    <div className='UserName-ReviewStars'>
                                        <p>Ethan Clarke</p>
                                        <div className='Stars'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path></svg>
                                        </div>
                                        <div className='User-Review'>
                                            <p>Lorem ipsum dolor sit amet consectetur. Neque dictum gravida nunc euismod. Nulla dolor rutrum consectetur purus proin ut. Cras cursus nullam erat at aliquet luctus et purus urna.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </>
                    ) : (
                        <div>Error loading item!</div>
                    )
                }
            </main>
            <Footer/>
        </>
    )
}
export default ProductDetails;