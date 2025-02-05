export interface Property {
    id: string;
    name: string;
    slug: string;
    pricePerNight: number;
    bedrooms: number;
    bathrooms: number;
    hotTub?: boolean;
    inUnitLaundry?: boolean;
    listingPhotos: { fileName: string; url: string }[];
    location: { latitude: number; longitude: number };
    offStreetParking?: boolean;
    petFriendly?: boolean;
    pool?: boolean;
}  