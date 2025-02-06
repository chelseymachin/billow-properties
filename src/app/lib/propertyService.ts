export interface SingleProperty {
    bedrooms: number;
    bathrooms: number;
    description: string;
    hotTub: boolean;
    id: string;
    inUnitLaundry: boolean;
    name: string;
    offStreetParking: boolean;
    petFriendly: boolean;
    pool: boolean;
    pricePerNight: number;
    slug: string;
    listingPhotos: PhotoData[];
  }

  export interface PhotoData {
    fileName: string
    url: string
  }

  export interface ListProperty {
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

  export const getProperties = async (): Promise<ListProperty[]> => {
    if (typeof window !== "undefined") {
      throw new Error("getProperty should not be called on the client!");
    }
  
    const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT
    if (!HYGRAPH_ENDPOINT) {
      throw new Error("Hygraph endpoint not set in environment")
    }
  
    const response = await fetch(NEXT_HYGRAPH_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "gcms-stage": "PUBLISHED"
      },
      body: JSON.stringify({
        query: `
          query PropertiesMainSearch {
            properties {
              bedrooms
              bathrooms
              hotTub
              inUnitLaundry
              listingPhotos {
                fileName
                url
              }
              location {
                latitude
                longitude
              }
              name
              offStreetParking
              petFriendly
              pool
              pricePerNight
              slug
              id
            }
          }
        `
      })
    })
  
    const json = await response.json()
    return json.data.properties
  }
  
  export const getProperty = async (slug: string): Promise<SingleProperty | null> => {
    if (typeof window !== "undefined") {
      throw new Error("getProperty should not be called on the client!");
    }
  
    const HYGRAPH_ENDPOINT = process.env.NEXT_HYGRAPH_ENDPOINT;
    if (!HYGRAPH_ENDPOINT) {
      throw new Error("Hygraph endpoint not set in environment");
    }
  
    const response = await fetch(HYGRAPH_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "gcms-stage": "PUBLISHED",
      },
      body: JSON.stringify({
        query: `
          query Property($slug: String!) {
            property(where: { slug: $slug }) {
              bedrooms
              bathrooms
              description
              hotTub
              id
              inUnitLaundry
              name
              offStreetParking
              petFriendly
              pool
              pricePerNight
              slug,
              listingPhotos {
                fileName
                url
              }
            }
          }
        `,
        variables: { slug },
      }),
    });
  
    if (!response.ok) {
      console.error("Failed to fetch property data", await response.text());
      return null;
    }
  
    const data = await response.json();
    return data.data?.property || null;
  };
  