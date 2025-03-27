import React from 'react';
import logo from '../assets/logo.png'; // Import your logo image

function AboutUs() {
  return (
    <div className="about-us container">
      <div className="about-header">
        <img src={logo} alt="SalesFirst Logo" className="about-logo" />
        <h1 className="page-title">About SalesFirst</h1>
      </div>

      <div className="about-content">
        <p className="intro">
          Welcome to SalesFirst, your premier partner in discovering exceptional real estate opportunities across the United States. Founded on the principles of integrity, expertise, and personalized service, we are dedicated to helping our clients achieve their real estate goals, whether it's finding their dream home, securing a lucrative investment property, or exploring development opportunities.
        </p>

        <h2 className="section-title">Our Mission</h2>
        <p>
          At SalesFirst, our mission is to empower our clients with the knowledge, resources, and support they need to make informed real estate decisions. We strive to exceed expectations by delivering tailored solutions, innovative strategies, and unparalleled market insights. We are committed to building long-lasting relationships based on trust, transparency, and a shared vision for success.
        </p>

        <h2 className="section-title">Our Values</h2>
        <ul className="values-list">
          <li>
            <span className="value-title">Client-Centric Approach:</span> We prioritize our clients' needs and objectives above all else, ensuring that every decision is aligned with their best interests.
          </li>
          <li>
            <span className="value-title">Integrity and Ethics:</span> We uphold the highest ethical standards in all our dealings, fostering trust and confidence among our clients and partners.
          </li>
          <li>
            <span className="value-title">Expertise and Innovation:</span> We continuously invest in our knowledge and skills to stay ahead of market trends and deliver cutting-edge solutions.
          </li>
          <li>
            <span className="value-title">Collaboration and Teamwork:</span> We believe in the power of collaboration, working closely with our clients, partners, and team members to achieve shared success.
          </li>
          <li>
            <span className="value-title">Community Impact:</span> We are committed to making a positive impact on the communities we serve through responsible development and sustainable practices.
          </li>
        </ul>

        <h2 className="section-title">Our Team</h2>
        <p>
          Our team of experienced real estate professionals brings a diverse range of expertise and a shared passion for excellence. From seasoned brokers and market analysts to dedicated client service specialists, we work together seamlessly to provide comprehensive support throughout every stage of the real estate journey.
        </p>

        <h2 className="section-title">Why Choose SalesFirst?</h2>
        <ul className="why-choose-list">
          <li>
            <span className="value-title">Proven Track Record:</span> We have a history of successfully guiding clients through complex real estate transactions and helping them achieve their desired outcomes.
          </li>
          <li>
            <span className="value-title">Personalized Service:</span> We take the time to understand each client's unique needs and tailor our services accordingly.
          </li>
          <li>
            <span className="value-title">Extensive Network:</span> We have built a vast network of industry connections, providing our clients with access to exclusive opportunities and resources.
          </li>
          <li>
            <span className="value-title">Market Expertise:</span> We possess in-depth knowledge of local markets across the US, enabling us to provide valuable insights and guidance.
          </li>
          <li>
            <span className="value-title">Commitment to Excellence:</span> We are dedicated to exceeding expectations and delivering exceptional results for every client.
          </li>
        </ul>
      </div>

      <div className="about-cta">
        <br />
        <p><a href="/contact">CONTACT US</a></p>
        <p>TODAY TO SCHEDULE A CONSULTATION AND DISCOVER HOW WE CAN HELP YOU ACHIEVE YOUR GOALS !</p>
      </div>
    </div>
  );
}

export default AboutUs;