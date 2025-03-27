import React, { useState } from 'react';
import blogImage1 from '../assets/blog-image-1.jpg';
import blogImage2 from '../assets/blog-image-2.jpg';
import blogImage3 from '../assets/blog-image-3.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'Investing in the US Real Estate Market: Trends to Watch',
    imageUrl: blogImage1,
    excerpt: 'Discover the latest trends shaping the US real estate market and learn how to make informed investment decisions in 2023 and beyond.',
    content: `
      <p>The US real estate market is constantly evolving, influenced by factors such as economic shifts, demographic changes, and technological advancements. In recent years, we've seen the rise of remote work, increased migration to Sun Belt states, and a growing interest in sustainable and smart home technologies.</p>
      <p>As an investor, it's crucial to stay ahead of these trends to identify emerging opportunities and make informed decisions. In this blog post, we'll explore some of the key trends shaping the US real estate market and provide insights into how you can capitalize on them.</p>
      <h3>Key Trends to Watch</h3>
      <ul>
        <li><strong>Rise of the Sun Belt:</strong> Cities in the Sun Belt region, such as Phoenix, Austin, and Nashville, are experiencing rapid population and economic growth, driving demand for housing and commercial real estate.</li>
        <li><strong>Remote Work Revolution:</strong> The shift towards remote work is reshaping residential preferences, with increased demand for larger homes, home offices, and properties in suburban and rural areas.</li>
        <li><strong>Technology Integration:</strong> Smart home technologies, sustainable building practices, and proptech solutions are becoming increasingly important to both buyers and renters.</li>
        <li><strong>Emphasis on Affordability:</strong> As housing prices continue to rise in many markets, there's a growing need for affordable housing options, presenting opportunities for investors to develop and manage workforce housing.</li>
      </ul>
      <p>To learn more about these trends and how to leverage them for your real estate investments, contact SalesFirst today. Our expert team can provide personalized guidance and help you navigate the complexities of the US market.</p>
    `,
  },
  {
    id: 2,
    title: 'The Appeal of East Coast Cities for Real Estate Investors',
    imageUrl: blogImage2,
    excerpt: 'From the historic streets of Boston to the vibrant energy of Miami, explore why the East Coast offers compelling real estate investment opportunities.',
    content: `
      <p>The East Coast of the United States is a region steeped in history, culture, and economic vitality. Its major cities, including New York, Boston, Washington D.C., and Miami, offer a unique blend of old-world charm and modern dynamism, making them attractive destinations for real estate investors.</p>
      <p>In this blog post, we'll delve into the unique characteristics of East Coast cities and explore why they present compelling investment opportunities.</p>
      <h3>Why Invest in East Coast Cities?</h3>
      <ul>
        <li><strong>Strong Economic Fundamentals:</strong> The East Coast is home to major financial centers, world-class universities, and thriving industries, creating a robust economic foundation for real estate investment.</li>
        <li><strong>High Demand for Rentals:</strong> Many East Coast cities have a high concentration of renters, including young professionals, students, and affluent individuals, driving demand for rental properties.</li>
        <li><strong>Cultural and Lifestyle Appeal:</strong> East Coast cities offer a rich tapestry of cultural attractions, entertainment venues, and culinary experiences, making them desirable places to live, work, and visit.</li>
        <li><strong>Limited Supply in Urban Cores:</strong> Many established East Coast cities have limited land available for new development in their urban cores, leading to strong appreciation potential for well-located properties.</li>
      </ul>
      <p>Whether you're interested in luxury condos in Manhattan, historic brownstones in Boston, or waterfront properties in Miami, SalesFirst can help you find the perfect investment on the East Coast. Contact us today to learn more.</p>
    `,
  },
  {
    id: 3,
    title: 'Exploring Real Estate Investment Opportunities on the West Coast',
    imageUrl: blogImage3,
    excerpt: 'From the tech hubs of Silicon Valley to the entertainment capital of Los Angeles, discover why the West Coast is a hotbed for real estate investment.',
    content: `
      <p>The West Coast of the United States, particularly California, Oregon, and Washington, is renowned for its stunning natural beauty, innovative spirit, and thriving economy. This region offers a diverse range of real estate investment opportunities, driven by its strong technology sector, vibrant entertainment industry, and growing population.</p>
      <p>In this blog post, we'll explore the unique characteristics of West Coast cities and highlight why they are attractive destinations for real estate investors.</p>
      <h3>Why Invest in West Coast Cities?</h3>
      <ul>
        <li><strong>Technology and Innovation Hubs:</strong> The West Coast is home to Silicon Valley, Seattle's tech corridor, and a burgeoning startup scene in Los Angeles, attracting highly skilled workers and driving demand for housing.</li>
        <li><strong>Entertainment Industry Powerhouse:</strong> Los Angeles remains the epicenter of the global entertainment industry, creating a unique real estate market with demand for luxury homes and production facilities.</li>
        <li><strong>Strong Appreciation Potential:</strong> Many West Coast cities have experienced significant appreciation in property values over the past decade, driven by limited supply and high demand.</li>
        <li><strong>Quality of Life:</strong> The West Coast offers a high quality of life, with access to outdoor recreation, a diverse culinary scene, and a vibrant cultural landscape.</li>
      </ul>
      <p>Whether you're interested in investing in a tech-centric city like San Francisco, a rapidly growing market like Seattle, or the entertainment hub of Los Angeles, SalesFirst can help you navigate the West Coast real estate market. Contact us today to explore your options.</p>
    `,
  },
];

function Blog() {
  const [expandedPostId, setExpandedPostId] = useState(null);

  const toggleReadMore = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  return (
    <div className="blog-page container">
      {blogPosts.map(post => (
        <div className="blog-post" key={post.id}>
          <div className="blog-post-header">
            <div className="quotation-mark">“</div>
            <div>
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-post-excerpt">{post.excerpt}</p>
              <button className="read-more-button" onClick={() => toggleReadMore(post.id)}>
                Read More
              </button>
            </div>
          </div>
          {expandedPostId === post.id && (
            <div className="blog-post-content">
              <img src={post.imageUrl} alt={post.title} className="blog-post-image" />
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Blog;