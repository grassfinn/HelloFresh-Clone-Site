import React from 'react';
import Picture from './Picture';

export default function PhotoGallery() {
  return (
    <section className="photo-gallery">
      <div className="container center">
        <h2>Cook it. Love it. Tag it. #HelloFreshPics</h2>
        <p>Follow us on Instagram @hellofresh</p>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12" >
            <Picture
              img="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_375/hellofresh_website/au/cms/contentful/InstagramPeople.jpeg"
              alt="little girl cooking"
              user="bdanielle1285"
              desc="My little chef helping me make dinner tonight and trying out some of his new kitchen utensils I got him!"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Picture
              img="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_375/hellofresh_website/au/cms/homepage/Instagram/dog.jpeg"
              alt="dog cooking"
              user="lilpepthekelpie"
              desc="Iβm helping out π§π½βπ³ #masterchef #bestboy"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Picture
              img="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_375/hellofresh_website/au/cms/homepage/Instagram/IgramFamilyDinner.jpeg"
              alt="Happy family"
              user="mandi14eid"
              desc="Drew and the kids made mom dinner tonight! Drew and I had our doubts but WOW was it tasty!"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Picture
              img="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_375/hellofresh_website/au/cms/homepage/Instagram/kidscookingedited.jpg"
              alt="Little girls cooking"
              user="our_lovely_stride"
              desc="We had a cooking class yesterday and we had such an amazing time. π They had such a great time working as a team and I canβt wait for our weekly cooking class ππ»π"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
