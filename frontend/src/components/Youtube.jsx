import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Youtube = () => {
  const [depressionVideos, setDepressionVideos] = useState([]);
  const [anxietyVideos, setAnxietyVideos] = useState([]);
  const [ocdVideos, setOcdVideos] = useState([]);

  const API_KEY = 'AIzaSyDX-gVzQqTfQjdfXtP-6-qD4NwrdCH4GKY'; // Replace with your YouTube API key

  // Fetch videos for a specific query
  const fetchVideos = async (query, setVideos) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=20&key=${API_KEY}`
      );
      setVideos(response.data.items);
    } catch (error) {
      console.error(`Error fetching ${query} videos:`, error);
    }
  };

  useEffect(() => {
    fetchVideos('depression', setDepressionVideos);
    fetchVideos('anxiety', setAnxietyVideos);
    fetchVideos('ocd', setOcdVideos);
  }, []);

  // React Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 videos at a time
    slidesToScroll: 4, // Scroll 4 videos at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Render a carousel for a given set of videos and title
  const renderCarousel = (videos, title) => {
    if (videos.length === 0) {
      return <div className="text-center">Loading {title} videos...</div>;
    }

    return (
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Know more about {title}</h2>
        <Slider {...settings}>
          {videos.map((video) => (
            <div key={video.id.videoId} className="px-2">
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-48">
                <iframe
                  className="w-full aspect-sqaure" // Fixed height for all videos
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="p-4">
                  <h2 className="text-white font-semibold">{video.snippet.title}</h2>
                  <p className="text-gray-400 text-sm">{video.snippet.channelTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {renderCarousel(depressionVideos, 'Depression')}
      {renderCarousel(anxietyVideos, 'Anxiety')}
      {renderCarousel(ocdVideos, 'OCD')}
    </div>
  );
};

export default Youtube;