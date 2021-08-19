import { Breadcrumbs } from '@material-ui/core';
import React from 'react';
import { FooterContainer, LinkHover } from './Footer.styles';


const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer">
        <div className="footer-items">
          <div className="first-col">
            <div className="title">About us</div>
            <ul>
              <li>
                <LinkHover href="#">Our Heitage</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Our Coffee</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Stories and News</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Investor Relations</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Policies and Standars</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Customer Service</LinkHover>
              </li>
            </ul>
          </div>
          <div className="sec-col">
            <div className="title">Careers</div>
            <ul>
              <li>
                <LinkHover href="#">Culture and Values</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Inclusion, Diversity, and Equity</LinkHover>
              </li>
              <li>
                <LinkHover href="#">College Achievement Plan</LinkHover>
              </li>
              <li>
                <LinkHover href="#">U.S Careers</LinkHover>
              </li>
              <li>
                <LinkHover href="#">International Careers</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Customer Service</LinkHover>
              </li>
            </ul>
          </div>
          <div className="third-col">
            <div className="title">Social Impact</div>
            <ul>
              <li>
                <LinkHover href="#">Ethical Sourcing</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Leading in Sustainability</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Strengthening Communities</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Creating Opportunities</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Global Social Impact Report</LinkHover>
              </li>
            </ul>
          </div>
          <div className="four-col">
            <div className="title">For Business Partners</div>
            <ul>
              <li>
                <LinkHover href="#">Landlord Support Center</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Suppliers</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Corporate Gift Card Sales</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Office and Foodservice Coffee</LinkHover>
              </li>
            </ul>
          </div>
          <div className="five-col">
            <div className="title">Order and Pickup</div>
            <ul>
              <li>
                <LinkHover href="#">Order on the App</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Order on the Web</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Delivery</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Order and Pickup Options</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Explore and Find Coffee for Home</LinkHover>
              </li>
              <li>
                <LinkHover href="#">Customer Service</LinkHover>
              </li>
            </ul>
          </div>
        </div>
        <div className="stoper"></div>
        <div className="social-items">
          <div className="item">
            <img src="https://img.icons8.com/ios-filled/50/000000/spotify.png" />
          </div>
          <div className="item">
            <img src="https://img.icons8.com/ios-filled/50/000000/facebook-circled--v1.png" />
          </div>
          <div className="item">
            <img src="https://img.icons8.com/ios-filled/50/000000/pinterest--v1.png" />
          </div>
          <div className="item">
            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" />
          </div>
          <div className="item">
            <img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" />
          </div>
          <div className="item">
            <img src="https://img.icons8.com/ios-filled/50/000000/twitter-circled.png" />
          </div>
        </div>
        <div className='policy'>
           <Breadcrumbs>
               <li><LinkHover href="#">Terms of Use</LinkHover></li>
               <li><LinkHover href="#">Privacy Policy</LinkHover></li>
               <li><LinkHover href="#">CA Supply Chain Act</LinkHover></li>
               <li><LinkHover href="#">Submit Your Idea</LinkHover></li>
           </Breadcrumbs>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
