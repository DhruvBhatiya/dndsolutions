import React from "react";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }} className="py-24">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go Back to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
