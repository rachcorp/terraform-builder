import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">asecurecloud</h3>
            <p className="text-sm">AI-powered cloud management solutions</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="#features" className="hover:text-blue-300">Features</a></li>
              <li><a href="#pricing" className="hover:text-blue-300">Pricing</a></li>
              <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">Email: support@asecurecloud.com</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 asecurecloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;