import React from 'react';

function Header() {
  return (
    <header className="bg-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">cloudagents</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="text-gray-600 hover:text-gray-900">Features</a></li>
            <li><a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;