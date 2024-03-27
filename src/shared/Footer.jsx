import React from 'react';

const Footer = () => {
    return (
      <footer className="footer px-20 py-28 bg-[#F2F2F2]">
        <aside>
          <div>
            <h1 className="text-2xl font-bold">
              Contact <span className="text-red-500">Us</span>
            </h1>
            <div className="bg-red-500 w-8 h-1 rounded-lg"></div>
          </div>
          <h3 className="font-bold my-3">Live Fresh Agro</h3>
          <h4 className="font-bold text-xs">
            Corporate <span className="text-red-500">Office</span>
          </h4>
          <p className="text-xs">House 42, Road 6, </p>
          <p className="text-xs">Mohammadi Housing Society </p>
          <p className="text-xs">Mohammadpur, Dhaka- 1207 </p>
          <br />
          <h4 className="font-bold text-xs">
            Processing <span className="text-red-500">Center</span>
          </h4>
          <p className="text-xs">House 42, Road 6, </p>
          <p className="text-xs">Mohammadi Housing Society </p>
          <p className="text-xs">Mohammadpur, Dhaka- 1207 </p>
        </aside>
        <nav>
          <h6 className="footer-title text-black text-2xl">Navigation</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Categories</a>
          <a className="link link-hover">Cart</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black text-2xl">Legal</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Return policy</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black text-2xl">Social</h6>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Twitter</a>
        </nav>
      </footer>
    );
};

export default Footer;