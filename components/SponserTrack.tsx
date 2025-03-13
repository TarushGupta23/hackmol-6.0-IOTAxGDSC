import React, { useState } from "react";

const PolygonSlideshow = () => {
  const slides = [
    {
      content: (
        <div className="text-center">
          {/* Sponsor Logo and Company Name */}
          <div className="flex items-center justify-center mb-4">
            <img
              src="/polygon.png"
              alt="Sponsor Logo"
              className="h-24 mr-4"
            />
          </div>
          <p className="text-lg">Dab Dab Dub Dub Bimboom Tiding Dhanda</p>
          <p className="text-lg">Ksdas Yasu Ka Gar Oda Ghar Mera Ghar Aai</p>
          <p className="text-lg">La Jaadu Beem Boom Ting Ding Fing Ding Z</p>
          <p className="text-lg">Zing Yam Hu Mai</p>

          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4">
              <h3 className="font-bold">✦ Column 1</h3>
              <p>Small content for column 1.</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-bold">✦ Column 2</h3>
              <p>Small content for column 2.</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-bold">✦ Column 3</h3>
              <p>Small content for column 3.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="text-center">
          {/* Sponsor Logo and Company Name */}
          <div className="flex items-center justify-center mb-4">
            <img
              src="/polygon.png"
              alt="Sponsor Logo"
              className="h-24 mr-4"
            />
          </div>
          <p className="text-lg">Dab Dab Dub Dub Bimboom Tiding Dhanda</p>
          <p className="text-lg">Ksdas Yasu Ka Gar Oda Ghar Mera Ghar Aai</p>
          <p className="text-lg">La Jaadu Beem Boom Ting Ding Fing Ding Z</p>
          <p className="text-lg">Zing Yam Hu Mai</p>

          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4">
              <h3 className="font-bold">✦ Column 1</h3>
              <p>Small content for column 1.</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-bold">✦ Column 2</h3>
              <p>Small content for column 2.</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-bold">✦ Column 3</h3>
              <p>Small content for column 3.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="text-center">
          {/* Sponsor Logo and Company Name */}
          <div className="flex items-center justify-center mb-4">
            <img
              src="/polygon.png"
              alt="Sponsor Logo"
              className="h-24 mr-4"
            />
          </div>
          <p className="text-lg">Dab Dab Dub Dub Bimboom Tiding Dhanda</p>
          <p className="text-lg">Ksdas Yasu Ka Gar Oda Ghar Mera Ghar Aai</p>
          <p className="text-lg">La Jaadu Beem Boom Ting Ding Fing Ding Z</p>
          <p className="text-lg">Zing Yam Hu Mai</p>

          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4">
              <h3 className="font-bold">✦ Column 1</h3>
              <p>Small content for column 1.</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-bold">✦ Column 2</h3>
              <p>Small content for column 2.</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-bold">✦ Column 3</h3>
              <p>Small content for column 3.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="text-center">
          {/* Sponsor Logo and Company Name */}
          <div className="flex items-center justify-center mb-4">
            <img
              src="/polygon.png"
              alt="Sponsor Logo"
              className="h-24 mr-4"
            />
          </div>
          <p className="text-lg">Dab Dab Dub Dub Bimboom Tiding Dhanda</p>
          <p className="text-lg">Ksdas Yasu Ka Gar Oda Ghar Mera Ghar Aai</p>
          <p className="text-lg">La Jaadu Beem Boom Ting Ding Fing Ding Z</p>
          <p className="text-lg">Zing Yam Hu Mai</p>

          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4">
              <h3 className="font-bold">✦ Column 1</h3>
              <p>Small content for column 1.</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-bold">✦ Column 2</h3>
              <p>Small content for column 2.</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-bold">✦ Column 3</h3>
              <p>Small content for column 3.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-[90%] mx-auto p-8">
      {/* Slide Content */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-100/10 transition-colors"
      >
        <img
          src="/slide_show_arro.png"
          alt="Previous Slide"
          className="h-6 w-6 transform rotate-180"
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-100/10 transition-colors"
      >
        <img
          src="/slide_show_arro.png"
          alt="Next Slide"
          className="h-6 w-6"
        />
      </button>

      {/* Slide Indicators */}
      <div className="mt-10 flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index
                ? "bg-[#006aff] shadow-[0_0_30px_8px_#0cf]"
                : "bg-gray-500"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PolygonSlideshow;