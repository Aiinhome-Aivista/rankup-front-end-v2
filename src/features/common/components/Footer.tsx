import { motion, type Variants } from "framer-motion";

// --- Assets ---
// Ensure these exist in your src/assets/icons folder
import blackLogo from "@/assets/icons/black-logo-main.svg";
import rankUpAcademy from "@/assets/icons/Rank Up Academy.svg";
import footerImg from "@/assets/icons/footer-img.svg";

import type { FooterProps } from "../types/Footer";

const Footer = ({ fadeContent = false }: FooterProps) => {
  // Animation variants for content fade-in
  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#D9D9D9] pb-0 pt-8 font-sans">
      <motion.div
        className="mx-auto max-w-6xl px-10 lg:px-14"
        variants={contentVariants}
        initial="hidden"
        animate={fadeContent ? "visible" : "hidden"}
      >
        {/* Logo Section */}
        <div className="mb-10 flex items-center gap-3">
          <img
            src={blackLogo}
            alt="Rank Up Academy Logo"
            className="h-8 w-auto"
          />
          <div className="flex items-center">
            <img src={rankUpAcademy} alt="Rank Up Academy Text" className="h-5 w-auto" />
          </div>
        </div>

        {/* Links Grid */}
        <div className="mb-20 flex w-full flex-col justify-between gap-12 md:flex-row">
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              About Us
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Features
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Pricing
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Documentation
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Support
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Contact
            </a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Contact
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              FAQ
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Blog
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pb-8 text-center">
          <p className="text-sm text-gray-400">
            @2020 Aiinhome Technologies Pvt. Ltd. All rights reserved
          </p>
        </div>
      </motion.div>

      {/* Decorative Image */}
      <img
        src={footerImg}
        alt="Footer Decoration"
        className="absolute bottom-0 left-0 z-10 w-24 md:w-32 lg:w-38"
      />
    </footer>
  );
};

export default Footer;