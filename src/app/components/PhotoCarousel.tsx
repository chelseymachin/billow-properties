"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import dynamic from "next/dynamic";
import ImageCard from "./ImageCard";
import { PhotoData } from "../lib/propertyService";

const LoadingSpinner = () => <div className="carousel-loading">Loading...</div>;

const Slider = dynamic(() => import("react-slick"), { 
    ssr: false, 
    loading: () => <LoadingSpinner /> 
});


interface PhotoCarouselProps {
  photos: { url: string; fileName: string }[];
}

const PhotoCarousel = ({ photos }: PhotoCarouselProps) => {

    if (!photos || photos.length === 0) {
        return <div className="no-photos">No photos available</div>;
      }
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

  return (
    <Slider {...settings}>
        {photos.map((photo: PhotoData) => 
            <div
                key={photo.fileName}
            >
                <ImageCard
                    url={photo.url}
                    fileName={photo.fileName}
                    width={600}
                    height={400}
                />
            </div>
        )}
    </Slider>
  );
};

export default PhotoCarousel;
