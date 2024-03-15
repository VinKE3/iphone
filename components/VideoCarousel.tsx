"use client";
import { hightlightsSlides } from "@/constants";
import React from "react";

const VideoCarousel = () => {
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map(({ id, textLists, video, videoDuration }) => {
          return (
            <div id="slider" key={id} className="sm:pr-20 pr-10">
              <div className="video-carousel_container">
                <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                  <video id="video" playsInline={true} preload="auto" muted>
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
                <div className="absolute top-12 lef-[5%] z-10">
                  {textLists.map((text) => {
                    return <p key={text}>{text}</p>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VideoCarousel;
