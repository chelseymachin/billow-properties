"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import ImageCard from "./ImageCard";
import { PhotoData } from "../lib/propertyService";

interface PhotoCarouselProps {
  photos: { url: string; fileName: string }[];
}

const PhotoCarousel = ({ photos }: PhotoCarouselProps) => {

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
