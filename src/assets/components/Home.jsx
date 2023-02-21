import React from 'react';
import Nav from './Nav';
import CarouselItem from './CarouselItem';
import PhotoGallery from './PhotoGallery';
import Accordion from './Accordion';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
      <Nav />
      <header className="banner">
        <h1>Take the stress ouf of mealtime</h1>
        <p>America's Most Popular Meal Kit</p>
        <button className="banner-btn btn btn-success">View our plans</button>
      </header>
      <main>
        <section className='get-started'>
          <div className="container center">
            <h2>Why HelloFresh?</h2>
            <ul>
              <div className="row">
                <div className="col-sm-12 col-md-3">
                  <li className="why-reason">
                    <img
                      className="img-center why-img"
                      src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_website/us/cms/homepage/How%20It%20Works%20Icons/why-hellofresh-icn1.png"
                      alt=""
                    />
                    <h6 className='bold'>No skimpin' on the chicken!</h6>
                    <p>Or steak, or fish, or plant protein.</p>
                  </li>
                </div>
                <div className="col-sm-12 col-md-3">
                  <li className="why-reason">
                    <img
                      className="img-center why-img"
                      src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_website/us/cms/homepage/How%20It%20Works%20Icons/why-hellofresh-icn2.png"
                      alt=""
                    />
                    <h6 className='bold'>No commitment whatsoever</h6>
                    <p>Skipping weeks or cancelling is super easy.</p>
                  </li>
                </div>
                <div className="col-sm-12 col-md-3">
                  <li className="why-reason">
                    <img
                      className="img-center why-img"
                      src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_website/us/cms/homepage/How%20It%20Works%20Icons/why-hellofresh-icn3.png"
                      alt=""
                    />
                    <h6 className='bold'>The most 5-star reviews</h6>
                    <p>Our huge recipe wows week after week.</p>
                  </li>
                </div>
                <div className="col-sm-12 col-md-3">
                  <li className="why-reason">
                    <img
                      className="img-center why-img"
                      src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_website/us/cms/homepage/How%20It%20Works%20Icons/why-hellofresh-icn4.png"
                      alt=""
                    />
                    <h6 className='bold'>Fresh and affordable</h6>
                    <p>chef-created delicousness from$ $7.49 per meal</p>
                  </li>
                </div>
              </div>
            </ul>
            <button className="btn btn-success why-btn">Get started</button>
          </div>
        </section>
        <section>
          <div className="container center">
            <div className="row align-items-center">
              <div className="col col-sm-12 col-md-6">
                <img
                  className="img-center"
                  src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto:low,w_655/hellofresh_website/gb/cms/homepage/homepage%20to%20Contentful/US-homepage-image.png"
                  alt=""
                />
              </div>
              <div className="d-flex col-sm-12 col-md-6 align-self-stretch justify-content-center">
                <ul className="d-flex-column">
                  <li>
                    <h3>What's inside each box?</h3>
                  </li>
                  <li className="check">
                    Easy-to-follow recipes with clear nutritional info
                  </li>
                  <li className="check">
                    High-quality ingredients sourced from the farm
                  </li>
                  <li className="check">
                    Convient meal kits that fit perfectly in the fridge
                  </li>
                  <li className="check">
                    A fun cooking experience that makes you feel unstoppable
                  </li>
                  <li className="check">
                    <a href="#" className="text-success">
                      Innovative packaging desinged to reduce wast
                    </a>
                  </li>
                  <button className="btn btn-success">View our plans</button>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container center">
            <h2>Over 30+ fresh recipes every week</h2>
            <p>Easy Meals designed by professional chefs and nutritionists</p>
            {/* Carousel */}
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <CarouselItem />
            </div>
          </div>
        </section>
          <div className='container center'>
            <PhotoGallery/>
            <div className='break'>
              <h2>Flexible</h2>
              <p>to meet your household's needs</p>
              <button className='btn btn-success break-btn'>View our plans</button>
            </div>
            <h2>More questions?</h2>
            <Accordion/>
            <Footer/>
          </div>
      </main>
    </div>
  );
}
