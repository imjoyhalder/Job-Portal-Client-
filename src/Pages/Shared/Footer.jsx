import React from 'react';
import jobIcon from '../../assets/Joblogo/favicon.png';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content px-6 pt-12 pb-8 mt-10 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo and About */}
        <aside>
          <div className="flex items-center gap-3 mb-4">
            <img src={jobIcon} alt="Job Portal Logo" className="w-10 h-10" />
            <span className="text-lg font-bold">Job Portal Ltd.</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-500">
            Connecting talents with opportunities since 1992. <br /> Trusted by thousands of employers & professionals.
          </p>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Resume Builder</a>
          <a className="link link-hover">Job Matching</a>
          <a className="link link-hover">Career Counseling</a>
          <a className="link link-hover">Freelancing</a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Our Team</a>
          <a className="link link-hover">Careers</a>
        </nav>

        {/* Legal + Social Icons */}
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>

          <div className="mt-6 flex gap-4 text-lg text-gray-500">
            <a href="#"><FaFacebook className="hover:text-blue-600 transition" /></a>
            <a href="#"><FaLinkedin className="hover:text-blue-500 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-400 transition" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500 transition" /></a>
          </div>
        </nav>
      </div>

      <div className="text-center mt-10 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Job Portal Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
