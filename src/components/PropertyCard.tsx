import Link from 'next/link'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import styles from '@/styles/PropertyCard.module.scss'

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

const PropertyCard: React.FC<CardProps> = ({ 
    propertyName, 
    slug, 
    pricePerNight, 
    bedrooms, 
    bathrooms, 
    image 
}) => {
    return (
        <Link href={`/property/${slug}`}>
            <Card className={styles.card}>
                <Image 
                    src={image.url}
                    alt={image.fileName}
                    width={300}
                    height={150}
                    priority
                    className={styles.image}
                />
                <CardContent className={styles.textContainer}>
                    <h3 className='text-4xl'>${pricePerNight}</h3>
                    <h3 className='text-2xl'>{bedrooms} Bedrooms | {bathrooms} Baths</h3>
                </CardContent>
            </Card>
        </Link>
    )
}

export default PropertyCard
