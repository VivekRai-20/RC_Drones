export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    features: string[];
    media: {
        type: 'video' | 'image';
        src: string;
    }[];
    category: string;
    tag?: string;
    rating: number;
    reviews: number;
    inStock: boolean;
}

export const products: Product[] = [
    {
        id: "998-pro-drone",
        name: "998 Pro Drone",
        price: 10999,
        description: "The 998 Pro Drone is a powerful and versatile aerial platform designed for enthusiasts and content creators alike. It features an advanced 4K UHD camera with a wide-angle lens capable of capturing crisp, high-resolution photos and smooth video footage. With built-in GPS navigation, intelligent return-to-home, and stable hover control, it ensures reliable and safe flight whether you’re filming landscapes or tracking action. The 998 Pro also includes altitude hold, follow-me mode, and waypoint navigation — giving pilots creative freedom and precision control during complex shots.",
        features: [
            "4K UHD Camera with Wide-Angle Lens",
            "GPS Navigation & Return-to-Home",
            "Altitude Hold & Stable Hover",
            "Follow-Me Intelligent Mode",
            "Waypoint Flight Planning"
        ],
        media: [
            { type: "image", src: "/Drones/998_1.webp" },
            { type: "image", src: "/Drones/998_2.webp" },
            { type: "image", src: "/Drones/998_3.webp" },
            { type: "image", src: "/Drones/998_4.webp" },
            { type: "image", src: "/Drones/998_5.webp" }
        ],
        category: "drones",
        tag: "Popular",
        rating: 4.6,
        reviews: 164,
        inStock: true
    },
    {
        id: "t6-drone",
        name: "T6 Drone",
        price: 8499,
        description: "The T6 Drone combines agile performance with ease of use, making it ideal for beginners and transitioning hobbyists. Equipped with a high-definition camera capable of shooting up to 2.7K video, the T6 captures memorable aerial footage with sharp detail. GPS positioning and altitude hold keep the drone stable in flight, while intelligent features like follow-me mode and automatic return-to-home give added confidence when flying outdoors. Lightweight and portable, the T6 is ready for adventures in the park or on holiday.",
        features: [
            "2.7K HD Camera",
            "GPS Assisted Stable Flight",
            "Follow-Me Intelligent Mode",
            "One-Key Takeoff & Landing",
            "Automatic Return-to-Home"
        ],
        media: [
            { type: "image", src: "/Drones/T6_1.webp" },
            { type: "image", src: "/Drones/T6_2.webp" },
            { type: "image", src: "/Drones/T6_3.webp" },
            { type: "image", src: "/Drones/T6_4.webp" },
            { type: "image", src: "/Drones/T6_5.webp" },
            { type: "image", src: "/Drones/T6_6.webp" }
        ],
        category: "drones",
        tag: "Popular",
        rating: 4.3,
        reviews: 98,
        inStock: true
    },
    {
        id: "h16-drone",
        name: "H16 Drone",
        price: 12999,
        description: "Built for serious aerial photography, the H16 Drone is equipped with a high-resolution 4K camera on a stabilized gimbal mount that dramatically reduces shake for professional-looking footage. Its precision GPS system enables accurate positioning, intelligent flight modes such as orbit and follow-me, and robust return-to-home functionality. With a longer flight time and stronger wind resistance, the H16 is perfect for outdoor shoots, travel filming, and capturing cinematic landscapes.",
        features: [
            "4K Gimbal-Stabilized Camera",
            "GPS & GLONASS Positioning",
            "Orbit & Follow-Me Intelligent Modes",
            "Wind Resistance & Extended Flight Time",
            "Smart Return-to-Home"
        ],
        media: [
            { type: "image", src: "/Drones/H16_1.webp" },
            { type: "image", src: "/Drones/H16_2.webp" },
            { type: "image", src: "/Drones/H16_3.webp" },
            { type: "image", src: "/Drones/H16_4.webp" }
        ],
        category: "drones",
        tag: "Popular",
        rating: 4.7,
        reviews: 211,
        inStock: true
    },
    {
        id: "j2-drone",
        name: "J2 Drone",
        price: 6999,
        description: "The J2 Drone brings dependable aerial performance to entry-level pilots with its easy controls and solid feature set. It offers a 2.4K camera for impressive photos and videos, altitude hold for rock-steady hovering, and headless mode to simplify orientation for new flyers. Intelligent features like automatic return and one-key takeoff make it safe and enjoyable for first-time pilots, while its lightweight design makes it easy to carry on trips and outdoor excursions.",
        features: [
            "2.4K HD Camera",
            "Altitude Hold",
            "Headless Mode",
            "One-Key Takeoff & Landing",
            "Automatic Return-to-Home"
        ],
        media: [
            { type: "image", src: "/Drones/J2_1.webp" },
            { type: "image", src: "/Drones/J2_2.webp" },
            { type: "image", src: "/Drones/J2_3.webp" },
            { type: "image", src: "/Drones/J2_4.webp" },
            { type: "image", src: "/Drones/J2_5.webp" }
        ],
        category: "drones",
        tag: "Popular",
        rating: 4.1,
        reviews: 74,
        inStock: true
    },
    {
        id: "e88-pro-drone",
        name: "E88 Pro Drone",
        price: 5799,
        description: "The E88 Pro Drone is a feature-packed foldable quadcopter with built-in GPS for reliable positioning and enhanced flight stability. It includes a dual-camera system — one main HD camera and a secondary lens — giving you creative flexibility while capturing aerial shots. Intelligent flight modes like Follow-Me, waypoint navigation, and orbit mode make filming dynamic footage easy, while brushless motors provide smoother, quieter flights with better efficiency. With a lightweight design and beginner-friendly controls, it’s a great choice for travel, outdoor exploration, and aerial content creation. :contentReference[oaicite:1]{index=1}",
        features: [
            "GPS Positioning with Return-to-Home",
            "Dual HD Camera System",
            "Follow-Me, Waypoint & Orbit Flight Modes",
            "Foldable & Portable Design",
            "Real-Time Video Transmission"
        ],
        media: [
            { type: "image", src: "/Drones/E88_1.webp" },
            { type: "image", src: "/Drones/E88_2.webp" },
            { type: "image", src: "/Drones/E88_3.webp" },
            { type: "image", src: "/Drones/E88_4.webp" },
            { type: "image", src: "/Drones/E88_5.webp" }
        ],
        category: "drones",
        tag: "Popular",
        rating: 4.2,
        reviews: 101,
        inStock: true
    },
    {
        id: "e88-gps-drone",
        name: "E88 GPS Drone",
        price: 6499,
        description: "The E88 GPS Drone brings advanced GPS positioning to the popular E88 series, combining stable flight control with accurate outdoor navigation. It features a GPS module that enables automatic return-to-home, position hold, and enhanced drift correction. A dual-camera setup captures crisp 1080p footage, perfect for scenic shots and action shots alike. Stylish RGB LED lights and a premium carry bag complete the package for pilots who want fun and reliable flights up to 1 km from the controller. :contentReference[oaicite:2]{index=2}",
        features: [
            "Built-in GPS for Stable Outdoor Flight",
            "Automatic Return-to-Home",
            "1080p Dual Camera Capture",
            "Up to 1 km Control Range",
            "Brushless Motor & RGB LED Lights"
        ],
        media: [
            { type: "image", src: "/Drones/E88GPS_1.webp" },
            { type: "image", src: "/Drones/E88GPS_2.webp" },
            { type: "image", src: "/Drones/E88GPS_3.webp" },
            { type: "image", src: "/Drones/E88GPS_4.webp" },
            { type: "image", src: "/Drones/E88GPS_5.webp" }
        ],
        category: "drones",
        tag: "Popular",
        rating: 4.3,
        reviews: 54,
        inStock: true
    },
    {
        id: "lm12-gps-drone",
        name: "LM12 GPS Drone",
        price: 7999,
        description: "The LM12 GPS Drone is a feature-rich quadcopter designed for both beginners and experienced flyers, offering strong performance with intelligent navigation. It includes a 4K adjustable camera with FPV real-time transmission, letting you see live footage on your mobile device. GPS auto-return, follow-me mode, altitude hold, and customizable flight paths provide advanced control for creative aerial shots. The modular dual batteries deliver up to 40 minutes of flight time, making it ideal for extended exploration or content capture. :contentReference[oaicite:3]{index=3}",
        features: [
            "4K Adjustable Angle Camera",
            "GPS Auto Return & Follow-Me Mode",
            "FPV Real-Time Transmission",
            "Altitude Hold with Custom Flight Path",
            "Dual Batteries — Up to 40 min Flight Time"
        ],
        media: [
            { type: "image", src: "/Drones/LM12_1.webp" },
            { type: "image", src: "/Drones/LM12_2.webp" },
            { type: "image", src: "/Drones/LM12_3.webp" },
            { type: "image", src: "/Drones/LM12_4.webp" },
            { type: "image", src: "/Drones/LM12_5.webp" },
            { type: "image", src: "/Drones/LM12_6.webp" }
            
            
        ],
        category: "drones",
        tag: "Popular",
        rating: 4.5,
        reviews: 68,
        inStock: true
    }
];



export const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
    return products.filter(product => product.category === category);
};

export const getPopularProducts = (): Product[] => {
    return products.filter(product => product.tag === "Popular" || product.rating >= 4.3);
};
