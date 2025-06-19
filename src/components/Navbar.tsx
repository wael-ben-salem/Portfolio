import { motion, AnimatePresence } from "framer-motion";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import cvFile from "../assets/CV_BEN_SALEM_WAEL .pdf";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Expériences", href: "#experiences" },
    { name: "Contact", href: "mailto:waelbensalem02@gmail.com" },
  ];

 
}