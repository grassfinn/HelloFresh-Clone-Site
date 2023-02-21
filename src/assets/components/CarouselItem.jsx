import React from 'react';

export default function CarouselItem() {
  const imageArr = [
    'https://img.hellofresh.com/q_60,w_640,f_auto,c_limit,fl_lossy/q_auto/hellofresh_website/us/funnel-fragment/plans/Meat%20and%20veggies@3x.jpg',
    'https://img.hellofresh.com/q_60,w_640,f_auto,c_limit,fl_lossy/q_auto/hellofresh_website/us/funnel-fragment/plans/Family+friendly%403x.jpg',
    'https://img.hellofresh.com/q_60,w_640,f_auto,c_limit,fl_lossy/q_auto/hellofresh_website/us/funnel-fragment/plans/Veggie@3x.jpg',
  ];

  return (
    <div className="carousel-inner">
      {imageArr.map(
        // !implicit return
        (item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={item} className="carousel-img d-block w-100" alt="" />
          </div>
        )
      )}
    </div>
  );
}

// ? Alternate way to do it
// <div className={`carousel-item ${index === 0 && 'active'}`}>