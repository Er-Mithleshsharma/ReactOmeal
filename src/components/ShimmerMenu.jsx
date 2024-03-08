import React from 'react';

const ShimmerMenu = () => {
  return (
    <div className="menu shimmer-menu">
      <header className="menu-header shimmer-menu stroke animate">
        <div className="menu-header-left shimmer-menu stroke animate">
          <img src="" alt="" className="stroke animate" />
        </div>
        <div className="menu-header-right shimmer-menu stroke animate">
          <div className="top shimmer-menu stroke animate">
            <h1></h1>
            <h3></h3>
          </div>
          <div className="bottom shimmer-menu stroke animate">
            <h4 className="avg-rating shimmer-menu stroke animate">
              <span
                className="icons shimmer-menu stroke"
                style={{
                  position: 'relative',
                  top: '2px',
                  marginRight: '3px',
                }}
              ></span>
              <span></span>
            </h4>
            <h4 className="time shimmer-menu stroke animate">
              <span
                className="icons stroke"
                style={{
                  position: 'relative',
                  top: '2px',
                  marginRight: '3px',
                }}
              ></span>
              <span> </span>
            </h4>
            <h3></h3>
          </div>
        </div>
      </header>
     
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 relative overflow-hidden mt-20  animate-pulse">
           <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
           content
           </div>
     
           <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 relative overflow-hidden  animate-pulse">
           <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
           content
           </div>

           <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 relative overflow-hidden   animate-pulse">
           <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
           content
           </div>

           <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 relative overflow-hidden   animate-pulse">
           <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
           content
           </div>

           <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 relative overflow-hidden   animate-pulse">
           <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
           content
           </div>

           <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 relative overflow-hidden   animate-pulse">
           <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
           content
           </div>

           <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 relative overflow-hidden   animate-pulse">
           <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
           content
           </div>
    </div>
  );
};

export default ShimmerMenu;
