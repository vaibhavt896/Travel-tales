import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start" style={{ backgroundColor: "#db6930" }}>
        <div className="container d-flex justify-content-center py-5">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <i className="fab fa-facebook-f"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <i className="fab fa-youtube"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <i className="fab fa-instagram"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <i className="fab fa-twitter"></i>
          </button>
        </div>
        <div className="text-center text-white p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          &copy; 2023 <a className="text-white" href="https://mdbootstrap.com/">Traveler's Tales.com</a>
        </div>
      </footer>
    </div>
  );
}
