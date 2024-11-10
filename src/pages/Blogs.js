import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blogs.css'; // Assuming you have CSS files in the same directory

import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

// Import images
import carouselImage1 from '../assets/carousel2/1.webp';
import carouselImage2 from '../assets/carousel2/2.jpg';
import carouselImage3 from '../assets/carousel2/3.jpg';
import carouselImage4 from '../assets/carousel2/4.jpg';

import blogImage1 from '../images/blogs1.jpg';
import blogImage2 from '../images/blogs2.jpg';
import blogImage3 from '../images/blogs3.jpg';
import blogImage4 from '../images/blogs4.jpg';
import blogImage5 from '../images/blogs5.jpg';
import blogImage6 from '../images/blogs6.jpg';
import blogImage7 from '../images/blogs7.jpeg';
import blogImage8 from '../images/blogs8.jpg';
import blogImage9 from '../images/blogs9.jpg';

const Blogs = () => {
    return (
        <div>
            <Header />
            <div id="blogsCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval ="2000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carouselImage1} className="d-block w-100" alt="Image 1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Early Warning Signs of Dementia: What You Need to Know?</h5>
                            <p>by Dr. Sowmya Binu</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carouselImage2} className="d-block w-100" alt="Image 2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>5 Reasons Why Beetroot Is A Blessing To Your Skin, Hair</h5>
                            <p>by Dr. Akshay Ahuja</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carouselImage3} className="d-block w-100" alt="Image 3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Taking Control of Your Breath: Understanding Chronic Obstructive Pulmonary Disease (COPD)</h5>
                            <p>by Dr. Nikita Toshi</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carouselImage4} className="d-block w-100" alt="Image 4" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Green Banana: Nutritional Profile, Health Benefits, Recipes And Side Effects</h5>
                            <p>by Dr. Arnav Thakur</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <h2>Trending</h2>
            <div id="trending" className="row">
                <div className="col-md-8 col-sm-12">
                    <div className="card">
                        <img src={blogImage1} className="card-img-top" alt="Image 1" />
                        <div className="card-body">
                            <h5 className="card-title">National Eye Donation Fortnight 2024: Theme, Significance And Importance Of Donating The Visual Organs</h5>
                            <p className="card-text">National Eye Donation Fortnight is observed every year from August 25th to September 8th, shining a spotlight on the importance of eye donation and encouraging individuals to pledge their eyes for the noble cause...</p>
                            <p>The theme for National Eye Donation Fortnight for the year 2024 is ‘I Can See Clearly Now’ which mainly highlights the result of eye donation.</p>
                            <a href="#" className="btn">Participate</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card">
                        <img src={blogImage2} className="card-img-top" alt="Image 2" />
                        <div className="card-body">
                            <h5 className="card-title">Tips for Surviving the Heat Wave</h5>
                            <p className="card-text">India is grappling with a brutal heatwave as temperatures near 50°C. The sun isn’t just shining; it’s scorching! With ever-rising temperatures, there’s no escaping the oppressive heat...</p>
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={blogImage3} className="card-img-top" alt="Image 3" />
                        <div className="card-body">
                            <h5 className="card-title">Exercise to Manage Diabetes</h5>
                            <p className="card-text">Achieving a balance between nutrition and exercise is crucial in the fight against diabetes. Regular exercise, prescribed medicines, and a well-planned diet can help reduce excess weight and insulin resistance...</p>
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Latest Blogs</h2>
            <div id="latest">
                <div className="row">
                    <div className="card col-md-4">
                        <img src={blogImage4} className="card-img-top" alt="Image 4" />
                        <div className="card-body">
                            <h5 className="card-title">The Power of a Balanced Diet: Simple Swaps for a Healthier You</h5>
                            <p className="card-date">28th August, 2024</p>
                            <p className="card-text">Discover easy dietary changes that can enhance your overall health and energy levels.</p>
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src={blogImage5} className="card-img-top" alt="Image 5" />
                        <div className="card-body">
                            <h5 className="card-title">Stress Less: Effective Strategies to Manage and Reduce Anxiety</h5>
                            <p className="card-date">27th August, 2024</p>
                            <p className="card-text">Explore practical techniques and lifestyle adjustments to help you stay calm and focused.</p>
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src={blogImage6} className="card-img-top" alt="Image 6" />
                        <div className="card-body">
                            <h5 className="card-title">The Ultimate Guide to Plant-Based Proteins: Nourish Your Body with Plants</h5>
                            <p className="card-date">27th August, 2024</p>
                            <p className="card-text">Learn how to incorporate plant-based proteins into your meals for optimal health and vitality.</p>
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src={blogImage7} className="card-img-top" alt="Image 7" />
                        <div className="card-body">
                            <h5 className="card-title">Sleep Smarter: Tips for a Restful Night and Enhanced Daytime Performance</h5>
                            <p className="card-date">25th August, 2024</p>
                            <p className="card-text">Get insights into improving your sleep quality and how it can positively impact your daily life.</p>
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src={blogImage8} className="card-img-top" alt="Image 8" />
                        <div className="card-body">
                            <h5 className="card-title">Mindfulness Matters: How to Practice Mindfulness for Better Mental Health</h5>
                            <p className="card-date">24th August, 2024</p>
                            <p className="card-text">Understand the benefits of mindfulness and how to integrate it into your daily routine for emotional balance.</p>
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src={blogImage9} className="card-img-top" alt="Image 9" />
                        <div className="card-body">
                            <h5 className="card-title">Move More: Creative Ways to Stay Active Without Hitting the Gym</h5>
                            <p className="card-date">20th August, 2024</p>
                            <p className="card-text">Find innovative ways to incorporate physical activity into your daily life, even if you’re not a gym-goer.</p>
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blogs;