import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    // @ts-ignore
    window.onYouTubeIframeAPIReady = () => {
      // @ts-ignore
      new YT.Player('yt-bg-player', {
        videoId: '_XV2JW_ULLA',
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: '_XV2JW_ULLA',
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          mute: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.mute();
            event.target.playVideo();
          },
        },
      });
    };
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        <div
          id="yt-bg-player"
          ref={playerRef}
          className="absolute w-full h-full pointer-events-none"
          style={{
            zIndex: 0,
            transform: 'scale(1.3)', // Zoom in the video
            transformOrigin: 'center center',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            <span>Amplify Your Church's</span>{' '}
            <span className="block bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Helping churches share the Gospel beyond the sanctuary with engaging digital content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-600/20"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-sm text-white/60 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start pt-1">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
