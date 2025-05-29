import { useState, useEffect } from 'react';
import { PlayIcon } from 'lucide-react';
import bwoodVideo from '../assets/videos/bwood.mp4';
import hsVideo from '../assets/videos/hs.mp4';
import smbVideo from '../assets/videos/smb.mp4';
import brgdImage from '../assets/images/brgd.png';
import dcgdImage from '../assets/images/dcgd.png';
import smgdImage from '../assets/images/smgd.png';

const projects = [
  {
    id: 1,
    title: 'Sample Clip 1',
    category: 'Reels',
    thumbnail: '', // unused, video will show
    videoUrl: bwoodVideo,
  },
  {
    id: 2,
    title: 'Sample Clip 2',
    category: 'Reels',
    thumbnail:
      '',
    videoUrl: hsVideo,
  },
  {
    id: 3,
    title: 'Sample Clip 3',
    category: 'Reels',
    thumbnail: '',
    videoUrl: smbVideo,
  },
  {
    id: 4,
    title: 'Sample Graphics 1',
    category: 'Graphic Design',
    thumbnail: brgdImage,
    videoUrl: '',
  },
  {
    id: 5,
    title: 'Sample Graphics 2',
    category: 'Graphic Design',
    thumbnail: dcgdImage,
    videoUrl: '',
  },
  {
    id: 6,
    title: 'Sample Graphics 3',
    category: 'Graphic Design',
    thumbnail: smgdImage,
    videoUrl: '',
  },
];
const categories = ['All', 'Reels', 'Graphic Design'];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  

  // Close modal on Escape key
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setActiveVideo(null);
    }
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A showcase of our agency's standout work with churches.
            Each edit is carefully crafted to capture attention, inspire, and extend the
            reach of your message.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() =>
                project.videoUrl && project.videoUrl !== '#' && setActiveVideo(project.videoUrl)
              }
            >
              {project.videoUrl && project.videoUrl !== '#' ? (
                <video
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project.videoUrl}
                  muted
                  loop
                  playsInline
                  ref={(el) => {
                    if (el && hoveredProject === project.id) {
                      el.play();
                    } else if (el) {
                      el.pause();
                      el.currentTime = 0;
                    }
                  }}
                />
              ) : (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="inline-block px-3 py-1 bg-purple-600/80 text-xs rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                </div>

                <div
                className={`flex justify-center items-center mt-4 transform transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <button
                onClick={() => {
                  if (project.videoUrl && project.videoUrl !== '#') {
                    setActiveVideo(project.videoUrl);
                  } else if (project.thumbnail && !project.videoUrl) {
                    setActiveImage(project.thumbnail);
                  }
                }}
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-white/90 transition-colors"
                >
                  <PlayIcon size={16} />
                 View
                </button>

                
              </div>
              </div>
            </div>
             ))}
        </div>

          {/* Video Modal */}
      {activeVideo && (
  <div
    className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center px-4"
    onClick={() => setActiveVideo(null)}
  >
    <div
      className="relative max-w-4xl w-full bg-black rounded-lg shadow-2xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <video
        src={activeVideo}
        controls
        autoPlay
          className="max-w-full max-h-[80vh] w-auto h-auto object-contain mx-auto bg-black"
      />
      <button
        onClick={() => setActiveVideo(null)}
        className="absolute top-4 right-4 text-white bg-gray-900/80 hover:bg-gray-800 rounded-full p-2 transition"
        aria-label="Close video"
      >
        ✕
      </button>
    </div>
  </div>
)}
{activeImage && (
  <div
    className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center px-4"
    onClick={() => setActiveImage(null)}
  >
    <div
      className="relative max-w-4xl w-full bg-black rounded-lg shadow-2xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={activeImage}
        alt="Full preview"
        className="max-w-full max-h-[80vh] w-auto h-auto object-contain mx-auto bg-black"
      />
      <button
        onClick={() => setActiveImage(null)}
        className="absolute top-4 right-4 text-white bg-gray-900/80 hover:bg-gray-800 rounded-full p-2 transition"
        aria-label="Close image"
      >
        ✕
      </button>
    </div>
  </div>
)}

        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
            View All Projects
          </button>
        </div> */}
      </div>

    
    </section>
  );
};

export default ProjectsSection;
