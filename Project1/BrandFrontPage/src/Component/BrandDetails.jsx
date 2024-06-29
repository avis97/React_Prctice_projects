import React from "react";

function BrandDetails() {
  return (
    <div className="hero">
      <div className="content">
        <h1>YOUR FEET DESERVE <br/>THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP <br/> YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND<br/> WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="btn-hero" style={{position:"relative",top:"15px"}}>
          <button>Shop Now</button>
          <button style={{backgroundColor:"aqua"}}>Category</button>
        </div>
        <div className="shopping">
            <p style={{position:"relative",top:"40px"}}>Also Available On</p>
           <div className="brand-icon" style={{position:"relative",top:"55px"}}>
             <img src="/Images/flipkart.png" alt="flipcart-logo" style={{position:"relative",right:"95px"}}/>
             <img src="/Images/amazon.png" alt="amazon-logo"style={{position:"relative",right:"185px"}}/>
           </div>
        </div>
      </div>
      <div>
        <img className="shoe" src="/Images/shoe_image.png" alt="shoe-logo" />
      </div>
    </div>
  );
}

export default BrandDetails;
