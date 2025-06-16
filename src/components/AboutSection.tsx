import logoImage from '../assets/images/N.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden">
              <img src={logoImage} alt="Noah Creatives Agency Logo" className="w-full h-auto object-contain p-8 bg-white rounded-lg shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-sm text-white/70">
                  Church Media Experts
                </span>
                <h3 className="text-2xl font-bold">Purpose-Driven Agency</h3>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg -z-10 opacity-60"></div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-white/80 mb-6 text-lg">
              Noah Creatives Agency is a faith-driven creative agency dedicated to helping churches grow their digital presence. We specialize in crafting short, engaging sermon highlight videos and eye-catching graphics designed specifically for social media platforms.
            </p>
            <p className="text-white/80 mb-8 text-lg">
              Our mission is to support churches in reaching more people online with excellence and authenticity. We believe that the message of the Gospel deserves to be seen and heard beyond Sunday services.

              With a team that understands both ministry and media, we’re here to take the weight of content creation off your shoulders — so you can focus on preaching, leading, and serving your congregation.

              Let us help you amplify your message and grow your impact, one post at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
