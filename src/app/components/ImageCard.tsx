"use client";
import Image from 'next/image';

interface ImageCardProps {
    fileName: string
    url: string
    width: number
    height: number
}

const ImageCard: React.FC<ImageCardProps> = ({ fileName, url, width, height }) => {
    return (
        <div className="image-container" style={{ width, height, overflow: 'hidden', position: 'relative' }}>
            <Image
                className="image"
                src={url}
                alt={fileName}
                width={width}
                height={height}
                priority
                style={{ objectFit: 'cover' }}
            />
        </div>
    )
}

export default ImageCard