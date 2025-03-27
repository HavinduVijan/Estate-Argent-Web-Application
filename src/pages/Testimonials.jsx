import React from 'react';
import testimonialImage1 from '../assets/testimonial-1.jpg';
import testimonialImage2 from '../assets/testimonial-2.jpg';
import testimonialImage3 from '../assets/testimonial-3.jpg';
import testimonialImage4 from '../assets/testimonial-4.jpg';
import testimonialImage5 from '../assets/testimonial-5.jpg';
import testimonialImage6 from '../assets/testimonial-6.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Emily Davis',
    location: 'Texas, USA',
    imageUrl: testimonialImage1,
    content:
      'SalesFirst made our dream of owning a home in Texas a reality. Their expertise and dedication were evident in every step. We highly recommend them to anyone looking for a seamless home-buying experience.',
  },
  {
    id: 2,
    name: 'John & Sarah Miller',
    location: 'California, USA',
    imageUrl: testimonialImage2,
    content:
      'As first-time investors in the US real estate market, we were quite apprehensive. But the team at SalesFirst provided exceptional guidance and support. Their insights into the California market were invaluable.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    location: 'Florida, USA',
    imageUrl: testimonialImage3,
    content:
      'The professionalism and personal attention we received from SalesFirst were beyond our expectations. They helped us find the perfect beachfront property in Florida, making the entire process a joy.',
  },
  {
    id: 4,
    name: 'Robert & Lisa Brown',
    location: 'New York, USA',
    imageUrl: testimonialImage4,
    content:
      'We were impressed with SalesFirsts deep understanding of the New York real estate market. They helped us navigate the complexities of purchasing a property in the city with ease and confidence.',
  },
  {
    id: 5,
    name: 'Michael & Susan Clark',
    location: 'Washington, USA',
    imageUrl: testimonialImage5,
    content:
      'SalesFirst provided us with a comprehensive and personalized service that exceeded our expectations. Their knowledge of the Washington area and the real estate market was truly remarkable.',
  },
  {
    id: 6,
    name: 'David & Karen White',
    location: 'Illinois, USA',
    imageUrl: testimonialImage6,
    content:
      'From the initial consultation to the final closing, SalesFirst demonstrated unparalleled expertise and commitment. They made our investment in the Illinois real estate market a smooth and profitable venture.',
  },
];

function Testimonials() {
  return (
    <div className="testimonials-page container">
      <h2 className="page-title">Testimonials</h2>
      <p className="page-intro">
        At SalesFirst, we pride ourselves on delivering exceptional service and building lasting relationships with our clients. But don't just take our word for it – hear what our satisfied clients have to say about their experiences working with us.
      </p>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div className="testimonial" key={testimonial.id}>
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonial.content}"</p>
              <p className="testimonial-author">- {testimonial.name}</p>
              <p className="testimonial-location">{testimonial.location}</p>
            </div>
            <div className="testimonial-image-container">
              <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;