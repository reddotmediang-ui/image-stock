export const imageCategories = [
  {
    slug: 'transportation',
    title: 'Transportation',
    description: 'Vehicles, roads, and movement across Africa',
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=300&fit=crop'
  },
  {
    slug: 'market',
    title: 'Market',
    description: 'Bustling markets and street commerce',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop'
  },
  {
    slug: 'lifestyle',
    title: 'Lifestyle',
    description: 'Daily life and cultural moments',
    image: 'https://images.unsplash.com/photo-1516684067409-01f0c0a8ba89?w=400&h=300&fit=crop'
  },
  {
    slug: 'aerial',
    title: 'Aerial',
    description: 'Drone and aerial perspectives',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
  },
  {
    slug: 'technology',
    title: 'Technology',
    description: 'Tech, gadgets, and innovation',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop'
  },
  {
    slug: 'food',
    title: 'Food',
    description: 'African cuisine and culinary art',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop'
  },
  {
    slug: 'nature',
    title: 'Nature',
    description: 'Landscapes, wildlife, and natural beauty',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
  },
  {
    slug: 'backgrounds',
    title: 'Backgrounds',
    description: 'Textures and background images',
    image: 'https://images.unsplash.com/photo-1557672172-298e090d0f80?w=400&h=300&fit=crop'
  },
  {
    slug: 'festivals',
    title: 'Festivals',
    description: 'Celebrations and cultural events',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&h=300&fit=crop'
  },
  {
    slug: 'business',
    title: 'Business',
    description: 'Corporate and professional imagery',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
  },
  {
    slug: 'religion',
    title: 'Religion',
    description: 'Sacred spaces and spiritual moments',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
  },
  {
    slug: 'travel',
    title: 'Travel',
    description: 'Destinations and travel experiences',
    image: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=400&h=300&fit=crop'
  },
  {
    slug: 'creative',
    title: 'Creative',
    description: 'Artistic and experimental imagery',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
  }
];

export const videoCategories = [
  {
    slug: 'lifestyle',
    title: 'Lifestyle',
    description: 'Daily life and lifestyle content',
    image: 'https://images.unsplash.com/photo-1516684067409-01f0c0a8ba89?w=400&h=300&fit=crop'
  },
  {
    slug: 'transportation',
    title: 'Transportation',
    description: 'Movement and transportation footage',
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=300&fit=crop'
  },
  {
    slug: 'market',
    title: 'Market',
    description: 'Market and street commerce video',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop'
  },
  {
    slug: 'aerial',
    title: 'Aerial',
    description: 'Drone and aerial video footage',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
  },
  {
    slug: 'festival',
    title: 'Festival',
    description: 'Festival and celebration footage',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&h=300&fit=crop'
  },
  {
    slug: 'nature',
    title: 'Nature',
    description: 'Nature and wildlife video',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
  },
  {
    slug: 'travel',
    title: 'Travel',
    description: 'Travel and destination footage',
    image: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=400&h=300&fit=crop'
  },
  {
    slug: 'landmark',
    title: 'Landmark',
    description: 'Famous landmarks and monuments',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop'
  }
];

export function getImageCategory(slug) {
  return imageCategories.find(cat => cat.slug === slug);
}

export function getVideoCategory(slug) {
  return videoCategories.find(cat => cat.slug === slug);
}
