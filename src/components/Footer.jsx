import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2F5D73] border-t border-[#4F8EA3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-[#F7FAF9] mb-3">SafeSpace</h3>
            <p className="text-[#AEE3CF] text-sm leading-relaxed">
              A safe space for mental health support, resources, and community connection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F7FAF9] font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/BPA-Mental-Website" className="text-[#AEE3CF] hover:text-[#F7FAF9] text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#AEE3CF] hover:text-[#F7FAF9] text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/forums" className="text-[#AEE3CF] hover:text-[#F7FAF9] text-sm transition-colors">
                  Forums
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-[#AEE3CF] hover:text-[#F7FAF9] text-sm transition-colors">
                  Get Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[#F7FAF9] font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#AEE3CF] hover:text-[#F7FAF9] text-sm transition-colors">
                  Crisis Hotline
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AEE3CF] hover:text-[#F7FAF9] text-sm transition-colors">
                  Find a Therapist
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AEE3CF] hover:text-[#F7FAF9] text-sm transition-colors">
                  Self-Help Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AEE3CF] hover:text-[#F7FAF9] text-sm transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[#F7FAF9] font-semibold mb-3">Connect</h4>
            <p className="text-[#AEE3CF] text-sm mb-3">
              Follow us on social media for updates and support.
            </p>
            <div className="flex gap-4">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/bpaconnect/" className="text-[#AEE3CF] hover:text-[#F7FAF9] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://x.com/BPAconnect" className="text-[#AEE3CF] hover:text-[#F7FAF9] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bpaconnect/?hl=en" className="text-[#AEE3CF] hover:text-[#F7FAF9] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/jakedevaney/BPA-Mental-Website" className="text-[#AEE3CF] hover:text-[#F7FAF9] transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#4F8EA3]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#AEE3CF] text-sm text-center md:text-left">
              © {currentYear} SafeSpace. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-[#AEE3CF] text-sm">
              Made for BPA Web Design Competition
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-xs text-[#7FA97F]">
            <a href="#" className="hover:text-[#AEE3CF] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#AEE3CF] transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-[#AEE3CF] transition-colors">Cookie Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#AEE3CF] transition-colors">Accessibility</a>
          </div>
        </div>

        {/* Crisis Banner */}
        <div className="mt-6 bg-red-900 bg-opacity-20 border border-red-800 rounded-lg p-4">
          <p className="text-red-300 text-sm text-center">
            <strong>Crisis Support:</strong> If you're in immediate danger, please call 911 or the National Suicide Prevention Lifeline at{' '}
            <a href="tel:988" className="font-semibold hover:underline">988</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;