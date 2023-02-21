import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <section className="row justify-content-center">
          <div className="col-lg-2">
            <h3 className='footer-tag'>HelloFresh</h3>
            <ul>
              <li>Students</li>
              <li>Blog</li>
              <li>Recipes</li>
              <li>Hero Discounts</li>
              <li>Recipe Directory</li>
              <li>California Chains Act</li>
              <li>Delivery Options</li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h3 className='footer-tag'>Our Company</h3>
            <ul>
              <li>HelloFresh Group</li>
              <li>Sustainability</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h3 className='footer-tag'>Work with us</h3>
            <ul>
              <li>Partner</li>
              <li>Influencers</li>
              <li>Affiliates</li>
            </ul>
          </div>

          <div className="col-lg-2">
            <h3 className='footer-tag'>Contact us</h3>
            <ul>
              <li>Help Center & FAQ</li>
              <li>Partnership Inquiries</li>
              <li>Corporate Sales</li>
              <li>Do Not Sell my Personal Information</li>
            </ul>
          </div>

          <div className="col-lg-2">
            <h3 className='footer-tag'> Download our app</h3>
            <p>Manage your deliveries from anywhere, anytime.</p>
            <div >
              <img
                className='app-badge'
                src="https://cdn.hellofresh.com/us/cms/ER/badges/appstore-badge-en.png"
                alt="HelloFresh App Store Badge"
              />
              <img
                className='app-badge'
                src="https://cdn.hellofresh.com/us/cms/ER/badges/playstore-badge-en.png"
                alt="HelloFresh Google Play Store Badge"
              />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
