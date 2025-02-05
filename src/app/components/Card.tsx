import Link from 'next/link';

interface ImageProps {
    fileName: string;
    url: string;
}

interface CardProps {
    propertyName: string;
    slug: string;
    pricePerNight: number;
    bedrooms: number;
    bathrooms: number;
    image: ImageProps;
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
                <img src={image.url} alt={image.fileName} />
                <h3>{propertyName}</h3>
                <p>{bedrooms} Beds • {bathrooms} Baths</p>
                <p>${pricePerNight} / night</p>
            </div>
        </Link>
    )
}

export default Card;
