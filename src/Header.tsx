import React, { useEffect, useState, useRef } from "react";
import "./style.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null); // Change to HTMLDivElement
  const headerContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bgHeader = () => {
      if (headerRef.current && headerContentRef.current) {
        if (window.scrollY >= 50) {
          headerRef.current.classList.add("bg-header");
          headerContentRef.current.classList.add("text-dark");
          setIsScrolled(true);
        } else {
          headerRef.current.classList.remove("bg-header");
          headerContentRef.current.classList.remove("text-dark");
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", bgHeader);

    return () => {
      window.removeEventListener("scroll", bgHeader);
    };
  }, []);

  return (
    <div id="header" ref={headerRef}>
      <div
        className={`header-content ${isScrolled ? "text-dark" : ""}`}
        ref={headerContentRef}
      >
        <div className="header-left">Vinay Reddy</div>
        {/* Add other header elements if needed */}
      </div>
    </div>
  );
};

export default Header;
