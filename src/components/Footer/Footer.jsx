import React from "react";

const Footer = () => {
  //   const year = new Date().getFullYear();
  // return <footer>{`Copyright © SHRED ${year}`}</footer>;

  return (
    // <div className="page-footer">
    //   <div className="container">
    //     <div className="row">
    //       {/* {Column1} */}
    //       <div className="col">
    //         <h5>Trainers</h5>
    //         <ul className="list">
    //           <li>Pires</li>
    //           <li>Rodriguez</li>
    //           <li>Velasquez</li>
    //         </ul>
    //       </div>
    //       <div className="col">
    //         <h5>Follow</h5>
    //         <ul className="list">
    //           <li>FB</li>
    //           <li>IG</li>
    //           <li>TW</li>
    //         </ul>
    //       </div>
    //       <div className="col">
    //         <h5>Partners</h5>
    //         <ul className="list">
    //           <li>JEV Media</li>
    //           <li>Trip City</li>
    //           <li>Stack-Up</li>
    //           <li>Lucy's</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <footer>Copyright © SHRED 2025</footer>
    // </div>
    <footer className="bg-dark text-center text-lg-start">

      <div className="text-center p-3 text-light" >
        © 2023 Copyright &nbsp;| &nbsp;
        <a className="text-light" href="https://github.com/JONPIRES/Shred">SHRED</a>
      </div>

    </footer>
  );
};

export default Footer;
