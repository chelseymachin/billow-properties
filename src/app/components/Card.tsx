import Link from 'next/link';
import ImageCard from './ImageCard';

interface ImageProps {
    fileName: string
    url: string
}

interface CardProps {
    propertyName: string
    slug: string
    pricePerNight: number
    bedrooms: number
    bathrooms: number
    image: ImageProps
}

const Card: React.FC<CardProps> = ({ 
    propertyName, 
    slug, 
    pricePerNight, 
    bedrooms, 
    bathrooms, 
    image 
}) => {
    return (
        <Link href={`/property/${slug}`}>
            <div className="card">
                <ImageCard 
                    url={image.url}
                    fileName={image.fileName}
                    width={300}
                    height={150}
                />
                <div className='text-container'>
                    <h3 className='text-4xl'>${pricePerNight}</h3>
                    <h3 className='text-2xl'>{bedrooms} Bedrooms | {bathrooms} Baths</h3>
                    <p className='font-bold'>{propertyName}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card
