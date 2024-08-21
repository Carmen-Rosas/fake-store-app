import { Link } from "react-router-dom";
import { fetchProduct } from "../functions/fetchProduct";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


export default function Home() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="home">
            <div className="home-container">
                <img className="home-image" src="/img/background.png" loading="lazy"></img>
                <div className="text-image">
                    <h1 className="text-5xl md:text-8xl">Be yourself</h1>
                    <Link to="/shop" className="shop-now text-xl md:text-2xl">Shop now</Link>
                </div>
            </div>
            <section className="p-8">
                <h1 className="font-fantasy text-5xl md:text-8xl text-center mb-4">Fake Brand Clothing</h1>
                <h2 className="font-fantasy text-lg md:text-xl text-center mb-8">Jewelery and electronics too</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="md:col-span-1 lg:row-span-2 lg:col-span-2">
                        <Link to="/shop">
                            <img
                                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-95"
                                src="/img/clothes.jpg"
                                alt="Clothes"
                                loading="lazy"
                            />
                        </Link>
                    </div>
                    <div className="md:col-span-1 lg:row-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1">
                        <Link to="/women">
                            <img
                                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-95"
                                src="/img/woman.jpg"
                                alt="Woman with a green sweater"
                                loading="lazy"
                            />
                        </Link>
                    </div>
                    <div className="lg:col-start-1 lg:col-span-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <Link to="/men">
                                    <img
                                        className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-95"
                                        src="/img/man.jpg"
                                        alt="Man with a white hoodie"
                                        loading="lazy"
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link to="/jewelery">
                                    <img
                                        className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-95"
                                        src="/img/jewlery.jpg"
                                        alt="Ring"
                                        loading="lazy"
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link to="/electronics">
                                    <img
                                        className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-95"
                                        src="/img/electronics.jpg"
                                        alt="Laptop"
                                        loading="lazy"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-8">
                <h1 className="font-fantasy text-5xl md:text-8xl text-center mb-4">Best sellers</h1>
            </section>
            <Carousel
                responsive={responsive}
                infinite={true}
                centerMode={true}
            >
                <Link to={"/product/15"}>
                    <div className="carousel-item shadow-md bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
                        <img src={fetchProduct("15", "image")} className="carousel-image" loading="lazy" />
                    </div>
                </Link>
                <Link to={"/product/2"}>
                    <div className="carousel-item shadow-md bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
                        <img src={fetchProduct("2", "image")} className="carousel-image" loading="lazy" />
                    </div>
                </Link>
                <Link to={"/product/16"}>
                    <div className="carousel-item shadow-md bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
                        <img src={fetchProduct("16", "image")} className="carousel-image" loading="lazy" />
                    </div>
                </Link>
                <Link to={"/product/3"}>
                    <div className="carousel-item shadow-md bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
                        <img src={fetchProduct("3", "image")} className="carousel-image" loading="lazy" />
                    </div>
                </Link>
            </Carousel>
            <section className="p-8">
                <h1 className="font-fantasy text-5xl md:text-8xl text-center mb-4">Why choose us</h1>
                <blockquote>
                    <p className="text-xl text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </blockquote>
            </section>
        </div>
    )
}