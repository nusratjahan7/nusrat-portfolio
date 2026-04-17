"use client"

import { useState } from "react";
import './Navbar.css'

const Responsive = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-(--white) text-2xl"
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
         {open && (
        <div className="md:hidden w-11/12 mx-auto mt-3 rounded-2xl border border-white/10 bg-[rgba(10,10,15,0.95)] backdrop-blur-xl px-6 py-6">
          <ul className="nav-links flex flex-col gap-5 list-none">
            <li>
              <a href="#about" onClick={() => setOpen(false)} className="block hover:text-(--accent) transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setOpen(false)} className="block hover:text-(--accent) transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setOpen(false)} className="block hover:text-(--accent) transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="block hover:text-(--accent) transition">
                Contact
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="nav-cta"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
        </div>
    );
};

export default Responsive;