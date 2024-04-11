import React from "react";
import about from '../files/about.png'


function About() {
    return (
      <div className="z-10 sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div 
            id="about"
            className="image object-center text-center">
            <img src={about} alt="About" />
          </div>
        </div>
        <div className="sm:w-1/2 p-4">
          <div className="text">
            <h2 className="tracking-tight mb-4 text-pink-600 font-serif font-bold text-3xl sm:text-4xl">About This App</h2>
            <p className="text-gray-500 font-serif ">
            Aenean vehicula turpis vel nibh commodo, ac ornare tellus blandit. Duis nisi neque, placerat a porttitor sed, dapibus quis ante. Duis tempus, orci ac fringilla pellentesque, diam urna sollicitudin diam, in egestas ante diam ut tortor. Integer sit amet lectus nec turpis luctus posuere quis vel sem. Quisque aliquam porttitor sem sit amet euismod. Curabitur id mauris tincidunt, sollicitudin ligula quis, elementum ex. Nunc porta magna sit amet viverra sagittis. Suspendisse imperdiet ultrices lacus vitae accumsan. Curabitur eu nisl quis nisl porttitor euismod. Suspendisse eros ipsum, accumsan ac leo in, mattis facilisis quam.
            <br/></p>
          </div>
        </div>
      </div>
    );
  };





export default About