import React from 'react';
import { VideoIcon, ScissorsIcon, PaletteIcon, MusicIcon, MonitorIcon, CameraIcon, YoutubeIcon, BarChart, Globe } from 'lucide-react';
import serv1 from '../assets/images/serv1.jpg';
import ncaa from '../assets/images/ncaa.png';
const services = [{
  icon: <VideoIcon size={24} />,
  title: 'Video Editing',
  description: (
    <>
        <p className="mb-2">
          High-quality video content tailored for church engagement and outreach.
        </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Sunday Service Highlights</li>
      <li>Three Sermon Clips Weekly (AI-free)</li>
      <li>Promotional Content for Events</li>
      <li>Instagram Reels and More</li>
    </ul>
    </>
  )
}, {
  icon: <ScissorsIcon size={24} /> ,
  title: 'Social Media Management',
  description:  (
    <>
    <p className="mb-2">
    Comprehensive handling of all your church's social media platforms, including Facebook, Instagram, TikTok, Twitter/X, and LinkedIn.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Daily Content Creation 
      </li>
      <li>Active Community Engagement 
      </li>
      <li>Professional Copywriting
      </li>
      <li>Real-Time Event Promotion </li>
    
    </ul>
    </>
  )
}, {
  icon: <PaletteIcon size={24} />,
  title: 'Graphic Design',
  description: (
    <>
    <p className="mb-2">
    Inspire your congregation and grow your reach through captivating, custom-designed church graphics
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li> Inspirational Sermon Quotes
      </li>
      <li> Event Promotion Materials
      </li>
      <li>Graphics for Sermon Series
      </li>
      <li> Engaging Viral Graphics  </li>
    
    </ul>
    </>
  )
},  {
  icon: <YoutubeIcon size={24} />,
  title: 'Youtube',
  description:(
    <>
    <p className="mb-2">
    We’ll enhance your church’s YouTube channel through strategic management and optimization to boost visibility and engagement
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li> 3 to 5 video uploads per week

      </li>
      <li>Edited versions of live streams
      </li>
      <li>Custom-designed thumbnails 
      </li>
      <li> SEO-friendly titles for better reach
      </li>
      <li>Professional podcast editing </li>
    
    </ul>
    </>
  )
},  {
  icon: <BarChart size={24} />,
  title: 'Analytics and Insights',
  description:(
    <>
    <p className="mb-2">
    Get a clear picture of your church’s digital growth with detailed monthly reports.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li> New followers and subscriber growth

      </li>
      <li>Audience reach across all platforms
      </li>
      <li>Website traffic and engagement metrics
      </li>
      <li> Visitor planning and interest tracking
      </li>
      <li>And much more... </li>
    
    </ul>
    </>
  )
} ,  {
  icon: <Globe size={24} />,
  title: 'Website Creation & Management',
  description:(
    <>
    <p className="mb-2">
    We build and maintain a fully customized website for your church, taking care of everything from event updates to visitor engagement.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li> Seamless content updates and maintenance

      </li>
      <li>Highlight upcoming events and special services
      </li>
      <li>Dedicated testimonial section
      </li>
      <li> User-friendly yet creative interface
      </li>
      
    
    </ul>
    </>
  )
}
];
const ServicesSection = () => {
  return <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We offer a comprehensive range of video editing and post-production services designed to bring your church’s message to life. 
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => <div key={index} className="group bg-gradient-to-b from-gray-900 to-black p-8 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg w-fit mb-6 text-purple-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                {service.description}
              </p>
            </div>)}
        </div>
        {/* Price section here */}
        <div className="text-center mt-12 mb-16">
  <button
    onClick={() => {
      const section = document.getElementById('contact');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-xl shadow-purple-700/70 px-10 py-5 font-extrabold text-4xl hover:scale-105 transition-transform duration-300"
  >
    $480
    <span className="text-xl md:text-2xl font-semibold ml-2 align-baseline">/MONTH</span>
  </button>
</div>
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let’s Grow Your Church Together</h3>
              <p className="text-white/70 mb-6">
              Whether you need weekly video content, full social media management, or a custom website, we're here to help your church connect and grow online.
              </p>
              <ul className="space-y-3 mb-8">
                {['Weekly sermon edits, highlight reels & reels for engagement', 'Full social media management across Facebook, Instagram, TikTok & more', 'Eye-catching graphics for events, sermon series, and outreach', 'High-quality delivery guaranteed'].map((item, index) => <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
                    <span className="text-white/80">{item}</span>
                  </li>)}
              </ul>
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-600/20">
                Get a Quote
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden translate-y-4">
                <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Editing Suite" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden translate-y-6">
                <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Video Production" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden translate-y-4">
                <img src={ncaa} alt="Color Grading" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden translate-y-4">
                <img src={serv1} alt="Sound Mixing" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;