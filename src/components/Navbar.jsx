import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import NavModal from './NavModal';

const linkBase = 'px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white';

export default function Navbar() {
  const [modal, setModal] = useState(null); // section name or null
  const open = (name) => setModal(name);
  const close = () => setModal(null);

  const navItems = ['Products','Solutions','Resources','Pricing'];

  return (
    <>
      <nav className="absolute inset-x-0 top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-10">
              <NavLink to="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md"><Logo /></NavLink>
              <div className="hidden lg:flex gap-1">
                {navItems.map(item => (
                  <button key={item} onClick={()=>open(item)} className={linkBase} type="button">{item}</button>
                ))}
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <button onClick={()=>open('Pricing')} className="text-sm font-medium text-white bg-accent-yellow/90 hover:bg-accent-yellow px-5 py-2 rounded-md shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition" type="button">Login</button>
              <button onClick={()=>open('Products')} className="btn-outline-light" type="button">Try whitepace Free →</button>
            </div>
          </div>
        </div>
      </nav>
      {modal && (
        <NavModal section={modal} open={!!modal} onClose={close} />
      )}
    </>
  );
}
