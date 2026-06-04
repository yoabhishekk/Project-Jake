// IF USING A LOCAL IMAGE: Uncomment the line below and place your image in the src folder
// import profilePic from './my-profile-pic.jpg'; 

import React from 'react';
import profilePic from './jake.jpg'; // <-- ADD THIS LINE

const App = () => {

  // 1. ADDED URLS TO THE MOVIE DATA
  const movies = [
    {
      title: "Nightcrawler",
      description: "A mesmerizing thriller delving into the dark world of crime journalism",
      url: "https://www.imdb.com/title/tt2872718/"
    },
    {
      title: "Brokeback Mountain",
      description: "A groundbreaking romantic drama challenging societal expectations",
      url: "https://www.imdb.com/title/tt0388795/"
    },
    {
      title: "Prisoners",
      description: "A gripping thriller entangling a detective in a web of secrets during a kidnapping investigation",
      url: "https://www.imdb.com/title/tt1392214/"
    }
  ];

  const links = [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "IMDb", url: "https://imdb.com" },
    { name: "Wikipedia", url: "https://wikipedia.org" },
    { name: "Rotten Tomatoes", url: "https://rottentomatoes.com" }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center py-12 px-4 font-sans">
      
      {/* PROFILE SECTION */}
      <div className="flex flex-col items-center text-center max-w-md w-full mb-10">
        
        {/* 2. SETUP PROFILE PICTURE HERE */}
        <img 
          src={profilePic} // <-- USING YOUR LOCAL IMAGE IMPORT HERE
          alt="Jake Gyllenhaal" 
          className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-slate-700 shadow-lg"
        />
        
        <h1 className="text-3xl font-bold tracking-wide mb-2">Jake Gyllenhaal</h1>
        <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
          Accomplished actor, captivating with versatility and charisma.
        </p>
      </div>

      {/* MOVIES SECTION */}
      <div className="w-full max-w-md mb-12">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold tracking-wider mb-1">Movies</h2>
          <p className="text-slate-400 text-xs">Here are some of my movies</p>
        </div>
        
        <div className="flex flex-col gap-4">
          {movies.map((movie, index) => (
            <div 
              key={index} 
              className="border border-[#db2777] rounded-md p-4 text-center bg-[#131c31] transition-transform duration-200 hover:scale-[1.02]"
            >
              {/* 3. WRAPPED MOVIE TITLE IN AN ANCHOR (LINK) TAG */}
              <a 
                href={movie.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-bold text-base mb-1 hover:text-[#db2777] hover:underline cursor-pointer block"
              >
                {movie.title}
              </a>
              <p className="text-slate-400 text-xs leading-relaxed mt-1">{movie.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LINKS SECTION */}
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold tracking-wider mb-1">Links</h2>
          <p className="text-slate-400 text-xs">Look for me on these websites</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-[#db2777] hover:bg-[#be185d] text-white font-semibold py-2 px-5 text-sm rounded-md shadow-md transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;
