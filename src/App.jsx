import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Client-side routing.
import Header from './components/Header'; // Header component.
import Footer from './components/Footer'; // Footer component.
import Home from './pages/Home'; // Home page.
import PropertyDetails from './pages/PropertyDetails'; // Property details page.
import AboutUs from './pages/AboutUs'; // About Us page.
import Contact from './pages/Contact'; // Contact page.
import Invest from './pages/Invest'; // Invest page.
import Blog from './pages/Blog'; // Blog page.
import Testimonials from './pages/Testimonials'; // Testimonials page.
import SendMeUpdates from './pages/SendMeUpdates'; // Send Me Updates page.
import MyWishList from './pages/MyWishList'; // My Wish List page.
import NotFound from './pages/NotFound'; // 404 page for unmatched routes.
import { FavoritesProvider } from './contexts/FavoritesContext'; // Context provider for favorites.
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styling.
import './App.css'; // Custom CSS.
import 'leaflet/dist/leaflet.css'; // Leaflet map styling.

/**
 * Main app component with routing and layout.
 */
function App() {
  return (
    <Router> {/* Routing setup */}
      <FavoritesProvider> {/* Provides favorites context */}
        <div className="App"> {/* Main container */}
          <Header /> {/* Renders header */}
          <main> {/* Main content */}
            <Routes> {/* Route definitions */}
              <Route path="/" element={<Home />} /> {/* Home route */}
              <Route path="/property/:id" element={<PropertyDetails />} /> {/* Property details route */}
              <Route path="/about" element={<AboutUs />} /> {/* About Us route */}
              <Route path="/contact" element={<Contact />} /> {/* Contact route */}
              <Route path="/invest" element={<Invest />} /> {/* Invest route */}
              <Route path="/blog" element={<Blog />} /> {/* Blog route */}
              <Route path="/testimonials" element={<Testimonials />} /> {/* Testimonials route */}
              <Route path="/send-me-updates" element={<SendMeUpdates />} /> {/* Send Me Updates route */}
              <Route path="/my-wish-list" element={<MyWishList />} /> {/* Wish List route */}
              <Route path="*" element={<NotFound />} /> {/* 404 page */}
            </Routes>
          </main>
          <Footer /> {/* Renders footer */}
        </div>
      </FavoritesProvider>
    </Router>
  );
}

export default App;
