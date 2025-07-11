import React from 'react';

const Summary = () => {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Written by Anand Digital PR – India’s Leading Digital Marketing & PR Agency
        </h2>
        <p className="text-gray-600 mb-4">
         <b>This blog is brought to you by Anand Digital PR</b> one of India’s 
          <span><a href="https://www.ananddigitalpr.com/" className="text-blue-600 hover:underline"> leading Digital Marketing and PR agencies</a>. With years of hands-on experience, our team is passionate about helping brands grow through smart, creative, and results-driven strategies. From boosting your online presence to building lasting customer trust, we know what it takes to succeed in the digital world. At Anand Digital PR, we don’t just follow trends — we help set them. This blog is part of our mission to share useful insights, real-world tips, and honest advice to help businesses like yours thrive online. </span></p><br/><br/>
            <div  className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 text-center">
              <b>Join our community on reddit</b> <br/> <br/>
             <a 
  href="https://www.reddit.com/r/DigitalandPR/s/a7U8nJpiKY" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="inline-block bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition"
>
  Join Us on Reddit
</a>
              </div>
      </div>

      
    </div>
  );
};

export default Summary;
