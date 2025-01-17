import React from 'react';
import { InstagramIcon } from '../InstagramIcon';
import InstaSVG from '../../img/instagram-brands.svg';
import './footer.css';
export const Footer = () => {
  return (
    // <div className="footer">
    //   <div className="container">
    //     <div className="d-flex flex-column flex-md-row justify-content-center align-items-center text-center">
    //       <h5>Webmasters : </h5>
    //       <div className="done-by flex-grow-1">
    //         <ul className="row">
    //           <li className="col-md-4">
    //             <a href="https://www.linkedin.com/in/keertivaas-sankaranarayanan-a6517218a/">
    //               Keertivaas S
    //             </a>
    //           </li>
    //           <li className="col-md-4 text-justify">
    //             <a href="https://www.linkedin.com/in/sriram-narayanan-189903192/">
    //               Sriram Na
    //             </a>
    //           </li>
    //           <li className="col-md-4">
    //             <a href="https://in.linkedin.com/in/harrison-vijay">
    //               Harrison Vijay J
    //             </a>
    //           </li>
    //           <li className="col-md-4">
    //             <a href="https://www.linkedin.com/in/aadhithya-b-kailash-195b115b/">
    //               Aadhithya B Kailash
    //             </a>
    //           </li>
    //           <li className="col-md-4">
    //             <a href="https://www.linkedin.com/in/anni-priscilla-a-ba0952215/">
    //               Anni Priscilla
    //             </a>
    //           </li>
    //           <li className="col-md-4">
    //             <a href="https://www.linkedin.com/in/arun-pradeep-kalimuthu-8b5523214/">
    //               Arun Pradeep
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    // <div className="social flex-grow-1">
    //   <div className="insta">
    //     <a
    //       href="https://www.instagram.com/procode_it_ssn/"
    //       className="d-inline-block insta-icon"
    //     >
    //       {/* color not working */}
    //       <InstagramIcon url={InstaSVG} height={40} width={40} />
    //       <p style={{ fontSize: "0.65rem" }}>Instagram</p>
    //     </a>
    //   </div>
    // </div>
    //     </div>
    //   </div>
    // </div>
    <div className="footer">
      <div className="container">
        <div className="d-flex  flex-row justify-content-center align-items-center text-center">
          <div className="flex-grow-1">
            <b>Copyright © 2022 Procode, Dept of IT, SSN</b>
          </div>

          <div className="social mx-auto">
            <div className="insta">
              <a
                href="https://www.instagram.com/procode_it_ssn/"
                className="d-inline-block insta-icon"
              >
                {/* color not working */}
                <InstagramIcon url={InstaSVG} height={40} width={40} />
                <p style={{ fontSize: '0.65rem' }}>Instagram</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
