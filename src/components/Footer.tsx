import React from 'react';
import { InstagramIcon, TwitterIcon, LinkedinIcon, YoutubeIcon, ArrowUpIcon, FacebookIcon } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Add this function inside Footer component
  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
              Noah Creative Agency
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Expert video editing services that transform your vision into captivating, cinematic stories with exceptional quality.
            </p>
            <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/noahcreatives01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <InstagramIcon size={20} />
                  </a>
                  {/* <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <TwitterIcon size={20} />
                  </a> */}
                  {/* <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <LinkedinIcon size={20} />
                  </a> */}
                   <a
                    href="https://www.facebook.com/people/Noah-Creatives-Agency/61576915795079/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <FacebookIcon size={20} />
                  </a>
                </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'About', 'Services', 'Contact'].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.toLowerCase());
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
  <h3 className="text-lg font-bold mb-4">Services</h3>
  <ul className="space-y-2">
    {[
      'Video Editing',
      'Social Media Management',
      'Graphic Design',
      'Youtube',
      'Analytics and Insights',
      'Website Creation and Maintenance',
    ].map((item) => (
      <li key={item} className="text-white/70">
        {item}
      </li>
    ))}
  </ul>
</div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} NCA, All rights reserved.        </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            Back to Top <ArrowUpIcon size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;