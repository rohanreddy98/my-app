import React from "react";
import ProductListing from './ProductListing'

const Header = () => {
  return (
    <>
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>fakeshop</h2>
        </div>
      </div>
      <ProductListing/>
    </>
  );
};

export default Header;
