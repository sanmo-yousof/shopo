import flag1 from "@/asset/navbarImages/usa.png";
import flag2 from "@/asset/navbarImages/bangladesh.png";
import flag3 from "@/asset/navbarImages/india.png";
import slider1 from "@/asset/sliderImages/banner1.png";

import brand1 from "@/asset/homeImages/brand-1.png";
import brand2 from "@/asset/homeImages/brand-2.png";
import brand3 from "@/asset/homeImages/brand-3.png";
import brand4 from "@/asset/homeImages/brand-4.png";
import brand5 from "@/asset/homeImages/brand-5.png";
import brand6 from "@/asset/homeImages/brand-6.png";

import brand7 from "@/asset/homeImages/brand-7.png";
import brand8 from "@/asset/homeImages/brand-8.png";
import brand9 from "@/asset/homeImages/brand-9.png";
import brand10 from "@/asset/homeImages/brand-10.png";
import brand11 from "@/asset/homeImages/brand-11.png";
import brand12 from "@/asset/homeImages/brand-12.png";
import { BaggageClaim, RotateCcw, ShieldCheck, Trophy } from "lucide-react";

export const Countries = [
  { name: "United States", flag: flag1 },
  { name: "Bangladesh", flag: flag2 },
  { name: "India", flag: flag3 },
];

export const Currencys = [
  {
    name: "USD",
  },
  {
    name: "BDT",
  },
  {
    name: " INR",
  },
];

export const Languages = [
  {
    name: "English",
  },
  {
    name: "Bangla",
  },
];

export const MenuCategories = [
  "Mobiles & Laptops",
  "Gaming Enterainment",
  "Image & Video",
  "Vehicles",
  "Furnitures",
  "Sport",
  "Food & Drinks",
  "Fashion",
];

export const HomeSlides = [
  {
    id: 1,
    subtitle: "VR BOX 3D Glass",
    title: "Explore Our Tech Collection Perfect Gadget",
    button: "Shop Now",
    bg: slider1,
  },
  {
    id: 2,
    subtitle: "Smart Watch",
    title: "Track Your Fitness in Style Every Day",
    button: "Shop Now",
    bg: slider1,
  },
  {
    id: 3,
    subtitle: "Wireless Headphones",
    title: "Experience Premium Sound Without Limits",
    button: "Shop Now",
    bg: slider1,
  },
];

export const Brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
];

export const MobileMainMenuLinks = [
  {
    mainManu: "Home",
    subMenu: ["Home1", "Home2", "Home3"],
  },
  {
    mainManu: "Shop",
  },
  {
    mainManu: "Pages",
    subMenu: ["Privacy Policy", "FAQ", "Terms and Conditions"],
  },
  {
    mainManu: "About",
  },
  {
    mainManu: "Blogs",
  },
  {
    mainManu: "Contact",
  },
];

export const Products = [
  {
    id: 1,
    name: "Xoggle aute et pariatur adipisicing nostrud et excepteur",
    category: "Gaming",
    price: 59.99,
    originalPrice: 79.01,
    discount: null,
    rating: 4.5,
    selling: 19,
    reviewCount: 128,
    images: "https://shopo.quomodothemes.website/assets/images/product-img-1.jpg",
    allImages:["https://shopo.quomodothemes.website/assets/images/product-img-1.jpg","https://shopo.quomodothemes.website/assets/images/product-img-1.jpg","https://shopo.quomodothemes.website/assets/images/product-img-1.jpg","https://shopo.quomodothemes.website/assets/images/product-img-1.jpg"],
    badge: null,
    inStock: true,
    description: "A premium gaming experience with immersive graphics. Designed for serious players. A premium gaming experience with immersive graphics. Designed for serious players.",
    fullDescription: "Experience unparalleled gaming performance with our premium gaming headset. Featuring 7.1 surround sound for precise audio positioning, memory foam ear cushions for extended comfort during long sessions, customizable RGB lighting, noise-cancelling microphone for crystal clear communication, and durable construction with adjustable headband. Perfect for competitive gaming where every sound matters.",
    featured: ["7.1 Surround Sound", "Memory Foam Ear Cushions", "Noise-Cancelling Microphone", "Customizable RGB Lighting", "Adjustable Headband", "Durable Construction"]
  },
  {
    id: 2,
    name: "Geeky ipsum esse repreh est consequat",
    category: "Electronics",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.3,
    selling: 5,
    reviewCount: 89,
    images: "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    allimages: ["https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg"],
    badge: "Sale",
    inStock: true,
    description: "Compact and efficient device for tech enthusiasts. Built with performance in mind. Compact and efficient device for tech enthusiasts. Built with performance in mind.",
    fullDescription: "This versatile smart home hub connects and controls all your compatible devices from one central location. Features include voice assistant integration, compatibility with 1000+ smart devices, easy setup through mobile app, energy monitoring capabilities, sleek minimalist design that fits any decor, and advanced security protocols to keep your home network safe.",
    featured: ["Voice Assistant Integration", "1000+ Device Compatibility", "Mobile App Control", "Energy Monitoring", "Sleek Minimalist Design", "Advanced Security Protocols"]
  },
  {
    id: 3,
    name: "Conjurica ea magna eiusmod esse cupt anim aliquip",
    category: "Gaming",
    price: 29.99,
    originalPrice: 59.29,
    discount: null,
    rating: 4.2,
    selling: 7,
    reviewCount: 156,
    images: "https://shopo.quomodothemes.website/assets/images/product-img-3.jpg",
    allimages: ["https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg"],
    badge: null,
    inStock: true,
    description: "Enjoy fast-paced action with this budget-friendly choice. Sleek and powerful design. Enjoy fast-paced action with this budget-friendly choice. Sleek and powerful design.",
    fullDescription: "This budget-friendly gaming mouse delivers performance beyond its price point. Features high-precision 6400 DPI optical sensor for accurate tracking, 6 programmable buttons for custom macros, RGB lighting with multiple effects, ergonomic design for comfortable grip during extended sessions, durable Omron switches rated for 10 million clicks, and braided cable for increased longevity.",
    featured: ["6400 DPI Optical Sensor", "6 Programmable Buttons", "RGB Lighting Effects", "Ergonomic Design", "Durable Omron Switches", "Braided Cable"]
  },
  {
    id: 4,
    name: "Senmei ipsum dolore eiusmod dolor officia do nisi",
    category: "Computers",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    rating: 4.7,
    selling: 0,
    reviewCount: 45,
    images: "https://shopo.quomodothemes.website/assets/images/product-img-4.jpg",
    allimages: ["https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg"],
    badge: "New",
    inStock: true,
    description: "Top-tier computing performance for professionals. Perfect for multitasking workloads. Top-tier computing performance for professionals. Perfect for multitasking workloads.",
    fullDescription: "Professional-grade laptop designed for demanding workloads. Features Intel Core i7-11800H processor, 16GB DDR4 RAM, 1TB NVMe SSD storage, NVIDIA RTX 3050 Ti graphics, 15.6-inch 4K OLED display with 100% DCI-P3 color gamut, Thunderbolt 4 ports, backlit keyboard with numeric pad, Windows 11 Pro, and all-day battery life. Perfect for content creators, developers, and professionals who need power on the go.",
    featured: ["Intel Core i7-11800H Processor", "16GB DDR4 RAM", "1TB NVMe SSD", "NVIDIA RTX 3050 Ti Graphics", "15.6-inch 4K OLED Display", "Thunderbolt 4 Ports", "All-day Battery Life"]
  },
  {
    id: 5,
    name: "Canopoly duis voluptate dolor sunt sit adipisicing in",
    category: "Mobile Phones",
    price: 699.99,
    originalPrice: 799.99,
    discount: 12,
    rating: 4.4,
    selling: 13,
    reviewCount: 203,
    images: "https://shopo.quomodothemes.website/assets/images/product-img-5.jpg",
    allimages: ["https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg"],
    badge: null,
    inStock: true,
    description: "Stay connected with cutting-edge features. Long-lasting battery and vivid display. Stay connected with cutting-edge features. Long-lasting battery and vivid display.",
    fullDescription: "Flagship smartphone with exceptional camera capabilities and all-day battery. Features 6.7-inch AMOLED 120Hz display, Snapdragon 8 Gen 1 processor, 12GB RAM, 256GB storage, triple camera system with 108MP main sensor, 5000mAh battery with 65W fast charging, IP68 water resistance, 5G connectivity, under-display fingerprint sensor, and stereo speakers with Dolby Atmos support.",
    featured: ["6.7-inch AMOLED 120Hz Display", "Snapdragon 8 Gen 1 Processor", "108MP Triple Camera System", "5000mAh Battery with 65W Charging", "IP68 Water Resistance", "5G Connectivity", "Under-display Fingerprint Sensor"]
  },
  {
    id: 6,
    name: "Unisure aliqua repreh ex cupt qui elit officia",
    category: "Electronics",
    price: 24.99,
    originalPrice: null,
    discount: null,
    rating: 4.1,
    selling: 44,
    reviewCount: 67,
    images: "https://shopo.quomodothemes.website/assets/images/product-img-6.jpg",
    allimages: ["https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg"],
    badge: null,
    inStock: true,
    description: "Affordable gadget for daily convenience. Compact size with essential functions. Affordable gadget for daily convenience. Compact size with essential functions.",
    fullDescription: "Compact portable power bank with fast charging capabilities. Features 10000mAh capacity, 18W PD quick charge, dual USB outputs, USB-C input, built-in LED power indicator, compact lightweight design, safety protections against overcharging and short circuits, and compatible with most smartphones, tablets, and other USB devices. Perfect for travel and daily use.",
    featured: ["10000mAh Capacity", "18W PD Quick Charge", "Dual USB Outputs", "USB-C Input", "Built-in LED Power Indicator", "Safety Protections", "Compact Lightweight Design"]
  },
  {
    id: 7,
    name: "Kenegy consectetur id ex nulla in adipisicing deserunt",
    category: "Electronics",
    price: 34.99,
    originalPrice: null,
    discount: null,
    rating: 4.6,
    selling: 12,
    reviewCount: 92,
    images: "https://shopo.quomodothemes.website/assets/images/product-img-7.jpg",
    allimages: ["https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg"],
    badge: null,
    inStock: true,
    description: "Reliable electronics built for durability. Great value for everyday use. Reliable electronics built for durability. Great value for everyday use.",
    fullDescription: "Premium wireless earbuds with active noise cancellation. Features hybrid active noise cancellation technology, 30-hour total battery life with charging case, IPX5 water resistance, touch controls for music and calls, Bluetooth 5.2 connectivity, low latency gaming mode, customizable EQ through mobile app, comfortable secure fit with multiple ear tip sizes, and voice assistant support.",
    featured: ["Hybrid Active Noise Cancellation", "30-hour Battery Life", "IPX5 Water Resistance", "Bluetooth 5.2 Connectivity", "Low Latency Gaming Mode", "Customizable EQ", "Voice Assistant Support"]
  },
  {
    id: 8,
    name: "Bizmatic consequat enim quis sit et est eiusmod",
    category: "Audio",
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    rating: 4.3,
    selling: 25,
    reviewCount: 178,
    images: "https://shopo.quomodothemes.website/assets/images/product-img-8.jpg",
    allimages: ["https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg"],
    badge: "Popular",
    inStock: true,
    description: "Crystal clear audio with deep bass. Ideal for music lovers and audiophiles. Crystal clear audio with deep bass. Ideal for music lovers and audiophiles.",
    fullDescription: "High-fidelity bookshelf speakers with exceptional sound quality. Features 5.25-inch woven fiberglass woofers, 1-inch silk dome tweeters, 100W peak power handling, rear-firing bass port for extended low frequencies, magnetic shielding for placement near displays, professional-grade crossover network, real wood veneer finish, and gold-plated binding posts. Perfect for stereo music listening and home theater setups.",
    featured: ["5.25-inch Woven Fiberglass Woofers", "1-inch Silk Dome Tweeters", "100W Peak Power Handling", "Rear-firing Bass Port", "Magnetic Shielding", "Professional-grade Crossover", "Real Wood Veneer Finish"]
  },
  {
    id: 9,
    name: "Anarco consectetur magna nostrud commodo tempor aliqua..",
    category: "Audio",
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    rating: 4.5,
    selling: 29,
    reviewCount: 134,
    images: "https://shopo.quomodothemes.website/assets/images/product-img-9.jpg",
    allimages: ["https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg"],
    badge: null,
    inStock: true,
    description: "High-definition sound with noise isolation. Designed for immersive listening. High-definition sound with noise isolation. Designed for immersive listening.",
    fullDescription: "Professional studio headphones for critical listening and music production. Features 40mm neodymium drivers with extended frequency response, circumaural design with memory foam ear pads, foldable design for portability, detachable oxygen-free copper cable, ¼-inch adapter included, minimal sound leakage, comfortable for extended wearing sessions, and rugged construction for durability in studio environments.",
    featured: ["40mm Neodymium Drivers", "Circumaural Design", "Memory Foam Ear Pads", "Foldable Design", "Detachable Cable", "Minimal Sound Leakage", "Rugged Construction"]
  },
  {
    id: 10,
    name: "Plasto cillum ad minim elit fugiat esse dolore",
    category: "Gaming",
    price: 499.99,
    originalPrice: null,
    discount: null,
    rating: 3.8,
    selling: 22,
    reviewCount: 89,
    images: "https://shopo.quomodothemes.website/assets/images/product-img-10.jpg",
    allimages: ["https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg"],
    badge: null,
    inStock: true,
    description: "Experience next-gen gaming at high frame rates. Built for serious performance. Experience next-gen gaming at high frame rates. Built for serious performance.",
    fullDescription: "High-performance gaming monitor with exceptional response times. Features 27-inch QHD (2560x1440) IPS display, 165Hz refresh rate, 1ms response time, NVIDIA G-SYNC compatibility, HDR400 support, 99% sRGB color coverage, adjustable stand with height, tilt and swivel, AMD FreeSync Premium, built-in gaming modes, and flicker-free technology with blue light filter for extended gaming sessions.",
    featured: ["27-inch QHD IPS Display", "165Hz Refresh Rate", "1ms Response Time", "NVIDIA G-SYNC Compatible", "HDR400 Support", "99% sRGB Color Coverage", "Adjustable Stand"]
  },
  {
    id: 11,
    name: "Conjurica ea magna eiusmod esse cupt anim aliquip",
    category: "Gaming",
    price: 69.99,
    originalPrice: 79.99,
    discount: 12,
    rating: 4.6,
    selling: 2,
    reviewCount: 156,
    images: "https://shopo.quomodothemes.website/assets/images/product-img-1.jpg",
    allimages: ["https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg"],
    badge: null,
    inStock: true,
    description: "Smooth gameplay and responsive controls. A great pick for casual gamers. Smooth gameplay and responsive controls. A great pick for casual gamers.",
    fullDescription: "Mechanical gaming keyboard with customizable RGB lighting. Features Cherry MX Red switches for smooth linear keystrokes, full RGB backlighting with software customization, aluminum top plate for durability, dedicated media controls, N-key rollover, detachable USB-C cable, programmable macro keys, and ergonomic design with adjustable feet. Perfect for gamers who want responsive tactile feedback.",
    featured: ["Cherry MX Red Switches", "Full RGB Backlighting", "Aluminum Top Plate", "Dedicated Media Controls", "N-key Rollover", "Detachable USB-C Cable", "Programmable Macro Keys"]
  },
  {
    id: 12,
    name: "Empirica deserunt laborum ad quis labore labore eu",
    category: "Electronics",
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    rating: 4.4,
    reviewCount: 78,
    selling: 2,
    images: "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    allimages: ["https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg","https://shopo.quomodothemes.website/assets/images/product-img-2.jpg"],
    badge: "Premium",
    inStock: true,
    description: "Premium build with advanced tech features. A sleek upgrade for your setup. Premium build with advanced tech features. A sleek upgrade for your setup.",
    fullDescription: "Ultra-slim external SSD with blazing fast transfer speeds. Features USB 3.2 Gen 2 interface with up to 1050MB/s read speeds, capacities up to 2TB, shock-resistant metal enclosure, hardware encryption for data security, compact pocket-sized design, backward compatible with USB 3.0/2.0, included USB-C to C and USB-C to A cables, and 3-year limited warranty. Perfect for photographers, videographers, and professionals needing fast portable storage.",
    featured: ["1050MB/s Read Speeds", "Up to 2TB Capacity", "Shock-resistant Metal Enclosure", "Hardware Encryption", "Compact Pocket-sized Design", "Backward Compatible", "3-year Warranty"]
  },
];



export const FeatureList = [
  {
    icon: BaggageClaim,
    title: "Free Shipping",
    subtitle: "When ordering over $100",
  },
  {
    icon: RotateCcw,
    title: "Free Return",
    subtitle: "Get Return within 30 days",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    subtitle: "100% Secure Online Payment",
  },
  {
    icon: Trophy,
    title: "Best Quality",
    subtitle: "Original Product Guaranteed",
  },
];


export const FooterData = [
  {
    title: "Feature",
    links: ["About Us", "Terms Condition", "Best Products"],
  },
  {
    title: "General Links",
    links: ["Blog", "Tracking Order", "Become Seller"],
  },
  {
    title: "Helpful",
    links: ["Flash Sale", "FAQ", "Support"],
  },
];


export const Categories = [
      "Mobile & Laptops",
      "Gaming Entertainment",
      "Image & Video",
      "Vehicles",
      "Furnitures",
      "Sport",
      "Food & Drinks",
      "Fashion Accessories",
      "Toilet & Sanitation",
      "Makeup Corner",
      "Baby Items",
    ];


export const FilterBrands = [
  "Apple",
  "Samsung",
  "Walton",
  "Oneplus",
  "Furnitures",
  "Vivo",
  "Oppo",
  "Xiomi",
  "Other",
];
export const Storage = ["64GB", "128GB", "256GB", "512GB", "1024GB"];
export const Size = ["S", "M", "XL", "XXL", "Sliem Fit"];


 export const Reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    country: "UK, London",
    rating: 5,
    desc: "Absolutely love this product! The quality exceeded my expectations and delivery was faster than promised. Will definitely purchase again."
  },
  {
    id: 2,
    name: "Michael Chen",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    country: "USA, New York",
    rating: 4,
    desc: "Good product overall. The build quality is solid and it works as described. Minor issues with setup but customer support was helpful."
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
    country: "Canada, Toronto",
    rating: 5,
    desc: "Exceptional value for money! This has completely transformed my daily routine. The attention to detail in design is impressive. Exceptional value for money! This has completely transformed my daily routine. The attention to detail in design is impressive. Exceptional value for money! This has completely transformed my daily routine. The attention to detail in design is impressive."
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
    country: "Canada, Toronto",
    rating: 5,
    desc: "Exceptional value for money! This has completely transformed my daily routine. The attention to detail in design is impressive. Exceptional value for money! This has completely transformed my daily routine. The attention to detail in design is impressive. "
  },
  {
    id: 4,
    name: "James Wilson",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    country: "Australia, Sydney",
    rating: 3,
    desc: "Average product. Does what it says but nothing extraordinary. The packaging could be better as mine arrived slightly damaged."
  },
  {
    id: 5,
    name: "Sophia Kim",
    img: "https://randomuser.me/api/portraits/women/89.jpg",
    country: "South Korea, Seoul",
    rating: 5,
    desc: "Outstanding performance! I've tried several brands but this one stands out. The customer service was also excellent when I had questions."
  },
  {
    id: 6,
    name: "David Müller",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
    country: "Germany, Berlin",
    rating: 4,
    desc: "Very satisfied with this purchase. Reliable and durable. It arrived well-packaged and the instructions were clear and easy to follow."
  },
  {
    id: 7,
    name: "Olivia Smith",
    img: "https://randomuser.me/api/portraits/women/43.jpg",
    country: "UK, Manchester",
    rating: 2,
    desc: "Disappointed with the quality. It stopped working after just two weeks of light use. Waiting to hear back about a replacement or refund."
  },
  {
    id: 8,
    name: "Daniel Brown",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    country: "USA, Chicago",
    rating: 5,
    desc: "Absolutely brilliant! Worth every penny. The features are well thought out and it's incredibly user-friendly even for beginners."
  },
  {
    id: 9,
    name: "Isabella Garcia",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    country: "Spain, Madrid",
    rating: 4,
    desc: "Great product with minor flaws. The main functions work perfectly but some additional features could be improved. Overall happy with my purchase."
  },
  {
    id: 10,
    name: "William Taylor",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    country: "France, Paris",
    rating: 1,
    desc: "Terrible experience. Product arrived damaged and nothing like the description. Customer service has been unresponsive to my complaints."
  },
  {
    id: 11,
    name: "Charlotte Martin",
    img: "https://randomuser.me/api/portraits/women/76.jpg",
    country: "UK, Edinburgh",
    rating: 5,
    desc: "Exceeded all expectations! The quality is premium and it's incredibly efficient. I've already recommended it to all my friends and family."
  },
  {
    id: 12,
    name: "Thomas Anderson",
    img: "https://randomuser.me/api/portraits/men/91.jpg",
    country: "USA, Los Angeles",
    rating: 3,
    desc: "It's okay for the price. Does the basic job but don't expect premium performance. Might upgrade to a better model in the future."
  }
];


export const Seller = {
    product: 120,
    category: ["Mobile Phone", "Sports", "Gaming", "Electronics"],
    tags: ["Beer", "Foamer"],
    name: "Ridoy Rock",
    country: "Germany",
    img: "https://randomuser.me/api/portraits/men/68.jpg",
    rating: 4.3,
  };
