import React from "react";

export default function Footer() {
  return (
    <footer className="row sticky-bottom">
      <div className="col-sm-12 text-center">
        <img
          src="../public/calvinandhobbestables.png" // Update the path to match the image location
          alt="Footer Image"
          style={{ maxWidth: "100%" }} // Optionally, set the maximum width of the image
        />
        My Footer 2023
      </div>
    </footer>
  );
}
