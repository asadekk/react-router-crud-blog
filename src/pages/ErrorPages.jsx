import React from "react";
import { Link } from "react-router";
import "../App.css";

function ErrorPages() {
  return (
    <section className="error-page">

      <div className="error-container">

        <h1 className="error-code">404</h1>

        <h2 className="error-title">
          Oops! Page Not Found
        </h2>

        <p className="error-text">
          The page you are looking for doesn't exist or has been moved.
          Please check the URL or return to the homepage.
        </p>

        <div className="error-buttons">
          <Link to="/" className="home-btn">
            🏠 Back Home
          </Link>

          <button
            className="back-btn"
            onClick={() => window.history.back()}
          >
            ← Go Back
          </button>
        </div>

      </div>

    </section>
  );
}

export default ErrorPages;