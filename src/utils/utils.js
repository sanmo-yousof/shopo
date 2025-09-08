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

import blog1 from "@/asset/blogImages/blog1.png";
import blog2 from "@/asset/blogImages/blog2.png";
import blog3 from "@/asset/blogImages/blog3.png";
import blog4 from "@/asset/blogImages/blog4.png";
import blog5 from "@/asset/blogImages/blog5.png";
import blog6 from "@/asset/blogImages/blog6.png";


import { Armchair, BaggageClaim, CarFront, CircleQuestionMark, Clock3, Coffee, Gamepad, Gamepad2, HeartIcon, House, icons, Images, Key, Layout, LogIn, Mail, MonitorSmartphone, NotebookPen, PackageCheck, PackageSearch, PanelsTopLeft, ReceiptText, Repeat, RotateCcw, ScrollText, ShieldCheck, Shirt, ShoppingBag, ShoppingCart, Ticket, Trophy, Truck, UserPenIcon, Wallet } from "lucide-react";

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
  { label: "Mobiles & Laptops", href: "/category/mobiles-laptops", icon: MonitorSmartphone },
  { label: "Gaming Entertainment", href: "/category/gaming",icon:Gamepad2 },
  { label: "Image & Video", href: "/category/image-video",icon:Images },
  { label: "Vehicles", href: "/category/vehicles",icon:CarFront },
  { label: "Furnitures", href: "/category/furnitures",icon:Armchair },
  { label: "Sport", href: "/category/sport",icon:Trophy },
  { label: "Food & Drinks", href: "/category/food-drinks",icon:Coffee },
  { label: "Fashion", href: "/category/fashion",icon:Shirt },
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

export const Navmenu = [
  {
    mainManu: "Home",
    href:"/",
    icon:House
  },
  {
    mainManu: "Shop",
     href:"/shop",
     icon:PackageSearch
  },
  {
    mainManu: "Cart",
    href:"/cart",
    icon:ShoppingCart
  },
  {
    mainManu: "Checkout",
    href:"/checkout",
    icon:ReceiptText
  },
 
  {
    mainManu: "Dashboard",
    href:"/dashboard",
    icon:Layout
  },
   {
    mainManu: "Blog",
    href:"/blog",
    icon:NotebookPen
  },
  {
    mainManu: "Login",
    href:"/login",
    icon:LogIn
  },
   {
    mainManu: "Pages",
     
    subMenu: ["Privacy Policy", "Terms and Conditions", "FAQ","Wishlist"],
    subhref : ["/privacy","/terms","/faq","/wishlist"],
    submenuIcon : [ShieldCheck, ScrollText, CircleQuestionMark,HeartIcon]
  }
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
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-1.jpg",
    allImages: [
      "https://shopo.quomodothemes.website/assets/images/product-img-1.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-1.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-1.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-1.jpg",
    ],
    badge: null,
    inStock: true,
    description:
      "A premium gaming experience with immersive graphics. Designed for serious players. A premium gaming experience with immersive graphics. Designed for serious players.",
    fullDescription:
      "Experience unparalleled gaming performance with our premium gaming headset. Featuring 7.1 surround sound for precise audio positioning, memory foam ear cushions for extended comfort during long sessions, customizable RGB lighting, noise-cancelling microphone for crystal clear communication, and durable construction with adjustable headband. Perfect for competitive gaming where every sound matters.",
    featured: [
      "7.1 Surround Sound",
      "Memory Foam Ear Cushions",
      "Noise-Cancelling Microphone",
      "Customizable RGB Lighting",
      "Adjustable Headband",
      "Durable Construction",
    ],
    section: "gamer world",
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
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    allimages: [
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    ],
    badge: "Sale",
    inStock: true,
    description:
      "Compact and efficient device for tech enthusiasts. Built with performance in mind. Compact and efficient device for tech enthusiasts. Built with performance in mind.",
    fullDescription:
      "This versatile smart home hub connects and controls all your compatible devices from one central location. Features include voice assistant integration, compatibility with 1000+ smart devices, easy setup through mobile app, energy monitoring capabilities, sleek minimalist design that fits any decor, and advanced security protocols to keep your home network safe.",
    featured: [
      "Voice Assistant Integration",
      "1000+ Device Compatibility",
      "Mobile App Control",
      "Energy Monitoring",
      "Sleek Minimalist Design",
      "Advanced Security Protocols",
    ],
    section: "popular sales",
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
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-3.jpg",
    allimages: [
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    ],
    badge: null,
    inStock: true,
    description:
      "Enjoy fast-paced action with this budget-friendly choice. Sleek and powerful design. Enjoy fast-paced action with this budget-friendly choice. Sleek and powerful design.",
    fullDescription:
      "This budget-friendly gaming mouse delivers performance beyond its price point. Features high-precision 6400 DPI optical sensor for accurate tracking, 6 programmable buttons for custom macros, RGB lighting with multiple effects, ergonomic design for comfortable grip during extended sessions, durable Omron switches rated for 10 million clicks, and braided cable for increased longevity.",
    featured: [
      "6400 DPI Optical Sensor",
      "6 Programmable Buttons",
      "RGB Lighting Effects",
      "Ergonomic Design",
      "Durable Omron Switches",
      "Braided Cable",
    ],
    section: "gamer world",
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
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-4.jpg",
    allimages: [
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    ],
    badge: "New",
    inStock: true,
    description:
      "Top-tier computing performance for professionals. Perfect for multitasking workloads. Top-tier computing performance for professionals. Perfect for multitasking workloads.",
    fullDescription:
      "Professional-grade laptop designed for demanding workloads. Features Intel Core i7-11800H processor, 16GB DDR4 RAM, 1TB NVMe SSD storage, NVIDIA RTX 3050 Ti graphics, 15.6-inch 4K OLED display with 100% DCI-P3 color gamut, Thunderbolt 4 ports, backlit keyboard with numeric pad, Windows 11 Pro, and all-day battery life. Perfect for content creators, developers, and professionals who need power on the go.",
    featured: [
      "Intel Core i7-11800H Processor",
      "16GB DDR4 RAM",
      "1TB NVMe SSD",
      "NVIDIA RTX 3050 Ti Graphics",
      "15.6-inch 4K OLED Display",
      "Thunderbolt 4 Ports",
      "All-day Battery Life",
    ],
    section: "new arrivals",
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
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-5.jpg",
    allimages: [
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    ],
    badge: null,
    inStock: true,
    description:
      "Stay connected with cutting-edge features. Long-lasting battery and vivid display. Stay connected with cutting-edge features. Long-lasting battery and vivid display.",
    fullDescription:
      "Flagship smartphone with exceptional camera capabilities and all-day battery. Features 6.7-inch AMOLED 120Hz display, Snapdragon 8 Gen 1 processor, 12GB RAM, 256GB storage, triple camera system with 108MP main sensor, 5000mAh battery with 65W fast charging, IP68 water resistance, 5G connectivity, under-display fingerprint sensor, and stereo speakers with Dolby Atmos support.",
    featured: [
      "6.7-inch AMOLED 120Hz Display",
      "Snapdragon 8 Gen 1 Processor",
      "108MP Triple Camera System",
      "5000mAh Battery with 65W Charging",
      "IP68 Water Resistance",
      "5G Connectivity",
      "Under-display Fingerprint Sensor",
    ],
     section: "top selling",
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
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-6.jpg",
    allimages: [
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    ],
    badge: null,
    inStock: true,
    description:
      "Affordable gadget for daily convenience. Compact size with essential functions. Affordable gadget for daily convenience. Compact size with essential functions.",
    fullDescription:
      "Compact portable power bank with fast charging capabilities. Features 10000mAh capacity, 18W PD quick charge, dual USB outputs, USB-C input, built-in LED power indicator, compact lightweight design, safety protections against overcharging and short circuits, and compatible with most smartphones, tablets, and other USB devices. Perfect for travel and daily use.",
    featured: [
      "10000mAh Capacity",
      "18W PD Quick Charge",
      "Dual USB Outputs",
      "USB-C Input",
      "Built-in LED Power Indicator",
      "Safety Protections",
      "Compact Lightweight Design",
    ],
      section: "top selling",
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
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-7.jpg",
    allimages: [
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    ],
    badge: null,
    inStock: true,
    description:
      "Reliable electronics built for durability. Great value for everyday use. Reliable electronics built for durability. Great value for everyday use.",
    fullDescription:
      "Premium wireless earbuds with active noise cancellation. Features hybrid active noise cancellation technology, 30-hour total battery life with charging case, IPX5 water resistance, touch controls for music and calls, Bluetooth 5.2 connectivity, low latency gaming mode, customizable EQ through mobile app, comfortable secure fit with multiple ear tip sizes, and voice assistant support.",
    featured: [
      "Hybrid Active Noise Cancellation",
      "30-hour Battery Life",
      "IPX5 Water Resistance",
      "Bluetooth 5.2 Connectivity",
      "Low Latency Gaming Mode",
      "Customizable EQ",
      "Voice Assistant Support",
    ],
    section: "popular sales", 
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
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-8.jpg",
    allimages: [
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    ],
    badge: "Popular",
    inStock: true,
    description:
      "Crystal clear audio with deep bass. Ideal for music lovers and audiophiles. Crystal clear audio with deep bass. Ideal for music lovers and audiophiles.",
    fullDescription:
      "High-fidelity bookshelf speakers with exceptional sound quality. Features 5.25-inch woven fiberglass woofers, 1-inch silk dome tweeters, 100W peak power handling, rear-firing bass port for extended low frequencies, magnetic shielding for placement near displays, professional-grade crossover network, real wood veneer finish, and gold-plated binding posts. Perfect for stereo music listening and home theater setups.",
    featured: [
      "5.25-inch Woven Fiberglass Woofers",
      "1-inch Silk Dome Tweeters",
      "100W Peak Power Handling",
      "Rear-firing Bass Port",
      "Magnetic Shielding",
      "Professional-grade Crossover",
      "Real Wood Veneer Finish",
    ],
    section: "popular sales", 
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
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-9.jpg",
    allimages: [
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    ],
    badge: null,
    inStock: true,
    description:
      "High-definition sound with noise isolation. Designed for immersive listening. High-definition sound with noise isolation. Designed for immersive listening.",
    fullDescription:
      "Professional studio headphones for critical listening and music production. Features 40mm neodymium drivers with extended frequency response, circumaural design with memory foam ear pads, foldable design for portability, detachable oxygen-free copper cable, ¼-inch adapter included, minimal sound leakage, comfortable for extended wearing sessions, and rugged construction for durability in studio environments.",
    featured: [
      "40mm Neodymium Drivers",
      "Circumaural Design",
      "Memory Foam Ear Pads",
      "Foldable Design",
      "Detachable Cable",
      "Minimal Sound Leakage",
      "Rugged Construction",
    ],
      section: "top selling", 
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
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-10.jpg",
    allimages: [
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    ],
    badge: null,
    inStock: true,
    description:
      "Experience next-gen gaming at high frame rates. Built for serious performance. Experience next-gen gaming at high frame rates. Built for serious performance.",
    fullDescription:
      "High-performance gaming monitor with exceptional response times. Features 27-inch QHD (2560x1440) IPS display, 165Hz refresh rate, 1ms response time, NVIDIA G-SYNC compatibility, HDR400 support, 99% sRGB color coverage, adjustable stand with height, tilt and swivel, AMD FreeSync Premium, built-in gaming modes, and flicker-free technology with blue light filter for extended gaming sessions.",
    featured: [
      "27-inch QHD IPS Display",
      "165Hz Refresh Rate",
      "1ms Response Time",
      "NVIDIA G-SYNC Compatible",
      "HDR400 Support",
      "99% sRGB Color Coverage",
      "Adjustable Stand",
    ],
     section: "gamer world",
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
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-1.jpg",
    allimages: [
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    ],
    badge: null,
    inStock: true,
    description:
      "Smooth gameplay and responsive controls. A great pick for casual gamers. Smooth gameplay and responsive controls. A great pick for casual gamers.",
    fullDescription:
      "Mechanical gaming keyboard with customizable RGB lighting. Features Cherry MX Red switches for smooth linear keystrokes, full RGB backlighting with software customization, aluminum top plate for durability, dedicated media controls, N-key rollover, detachable USB-C cable, programmable macro keys, and ergonomic design with adjustable feet. Perfect for gamers who want responsive tactile feedback.",
    featured: [
      "Cherry MX Red Switches",
      "Full RGB Backlighting",
      "Aluminum Top Plate",
      "Dedicated Media Controls",
      "N-key Rollover",
      "Detachable USB-C Cable",
      "Programmable Macro Keys",
    ],
     section: "gamer world"
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
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    allimages: [
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    ],
    badge: "Premium",
    inStock: true,
    description:
      "Premium build with advanced tech features. A sleek upgrade for your setup. Premium build with advanced tech features. A sleek upgrade for your setup.",
    fullDescription:
      "Ultra-slim external SSD with blazing fast transfer speeds. Features USB 3.2 Gen 2 interface with up to 1050MB/s read speeds, capacities up to 2TB, shock-resistant metal enclosure, hardware encryption for data security, compact pocket-sized design, backward compatible with USB 3.0/2.0, included USB-C to C and USB-C to A cables, and 3-year limited warranty. Perfect for photographers, videographers, and professionals needing fast portable storage.",
    featured: [
      "1050MB/s Read Speeds",
      "Up to 2TB Capacity",
      "Shock-resistant Metal Enclosure",
      "Hardware Encryption",
      "Compact Pocket-sized Design",
      "Backward Compatible",
      "3-year Warranty",
    ],
    section: "new arrivals",
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
    href : ["#","/terms","/shop"]
  },
  {
    title: "General Links",
    links: ["Blog", "Tracking Order", "Become Seller"],
    href:["#","/dashboard/order-tracking","#"]
  },
  {
    title: "Helpful",
    links: ["Flash Sale", "FAQ", "Support"],
    href:["/shop","/faq","#"]
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
    desc: "Absolutely love this product! The quality exceeded my expectations and delivery was faster than promised. Will definitely purchase again.",
  },
  {
    id: 2,
    name: "Michael Chen",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    country: "USA, New York",
    rating: 4,
    desc: "Good product overall. The build quality is solid and it works as described. Minor issues with setup but customer support was helpful.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
    country: "Canada, Toronto",
    rating: 5,
    desc: "Exceptional value for money! This has completely transformed my daily routine. The attention to detail in design is impressive. Exceptional value for money! This has completely transformed my daily routine. The attention to detail in design is impressive. Exceptional value for money! This has completely transformed my daily routine. The attention to detail in design is impressive.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
    country: "Canada, Toronto",
    rating: 5,
    desc: "Exceptional value for money! This has completely transformed my daily routine. The attention to detail in design is impressive. Exceptional value for money! This has completely transformed my daily routine. The attention to detail in design is impressive. ",
  },
  {
    id: 4,
    name: "James Wilson",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    country: "Australia, Sydney",
    rating: 3,
    desc: "Average product. Does what it says but nothing extraordinary. The packaging could be better as mine arrived slightly damaged.",
  },
  {
    id: 5,
    name: "Sophia Kim",
    img: "https://randomuser.me/api/portraits/women/89.jpg",
    country: "South Korea, Seoul",
    rating: 5,
    desc: "Outstanding performance! I've tried several brands but this one stands out. The customer service was also excellent when I had questions.",
  },
  {
    id: 6,
    name: "David Müller",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
    country: "Germany, Berlin",
    rating: 4,
    desc: "Very satisfied with this purchase. Reliable and durable. It arrived well-packaged and the instructions were clear and easy to follow.",
  },
  {
    id: 7,
    name: "Olivia Smith",
    img: "https://randomuser.me/api/portraits/women/43.jpg",
    country: "UK, Manchester",
    rating: 2,
    desc: "Disappointed with the quality. It stopped working after just two weeks of light use. Waiting to hear back about a replacement or refund.",
  },
  {
    id: 8,
    name: "Daniel Brown",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    country: "USA, Chicago",
    rating: 5,
    desc: "Absolutely brilliant! Worth every penny. The features are well thought out and it's incredibly user-friendly even for beginners.",
  },
  {
    id: 9,
    name: "Isabella Garcia",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    country: "Spain, Madrid",
    rating: 4,
    desc: "Great product with minor flaws. The main functions work perfectly but some additional features could be improved. Overall happy with my purchase.",
  },
  {
    id: 10,
    name: "William Taylor",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    country: "France, Paris",
    rating: 1,
    desc: "Terrible experience. Product arrived damaged and nothing like the description. Customer service has been unresponsive to my complaints.",
  },
  {
    id: 11,
    name: "Charlotte Martin",
    img: "https://randomuser.me/api/portraits/women/76.jpg",
    country: "UK, Edinburgh",
    rating: 5,
    desc: "Exceeded all expectations! The quality is premium and it's incredibly efficient. I've already recommended it to all my friends and family.",
  },
  {
    id: 12,
    name: "Thomas Anderson",
    img: "https://randomuser.me/api/portraits/men/91.jpg",
    country: "USA, Los Angeles",
    rating: 3,
    desc: "It's okay for the price. Does the basic job but don't expect premium performance. Might upgrade to a better model in the future.",
  },
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

export const FaqData = [
  {
    id: 1,
    question: "How does Information Technology work?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomised words.",
  },
  {
    id: 2,
    question: "How can I become an IT manager?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomised words.",
  },
  {
    id: 3,
    question: "What are the latest trends in IT?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomised words.",
  },
  {
    id: 4,
    question: "What skills are important in the IT field?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomised words.",
  },
  {
    id: 5,
    question: "What certifications are useful for IT professionals?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomised words.",
  },
];

export const TermsDAta = [
  {
    id: 1,
    title: "What Are Terms and Conditions?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book.",
  },
  {
    id: 2,
    title: "Does My Online Shop Need Terms and Conditions?",
    content:
      "While it’s not legally required for ecommerce websites to have a terms and conditions agreement, adding one will help protect your online business.As terms and conditions are legally enforceable rules, they allow you to set standards for how users interact with your site. Here are some of the major benefits of including terms and conditions on your ecommerce site: \n has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop.",
  },
  {
    id: 3,
    title: "Key Features of Our Terms",
    option: [
      "Slim body with metal cover",
      "Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard, touchpad with gesture support",
    ],
  },
  {
    id: 4,
    title: "Protect Your Property",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book. five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book.",
  },
  {
    id: 5,
    title: "What to Include in Terms and Conditions for Online Stores",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book. \n five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book.",
  },
  {
    id: 6,
    title: "Pricing and Payment Terms",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book. \n five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book. \n It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop",
  },
];


export const DashboardLinks = [
  {
    text: "Overview",
    href: "/dashboard",
    icon: PanelsTopLeft
  },
  {
    text: "Purchased Items",
    href: "/dashboard/purchased-items",
    icon:  ShoppingBag
  },
  {
    text: "Transactions",
    href: "/dashboard/transactions",
    icon:  Repeat
  },
  {
    text: "Order Tracking",
    href: "/dashboard/order-tracking",
    icon: Truck
  },
   {
    text: "Messages",
    href: "/dashboard/message",
    icon: Mail
  },
   {
    text: "Tickets",
    href: "/dashboard/tickets",
    icon: Ticket
  },
  {
    text: "Edit Profile",
    href: "/dashboard/edit-profile",
    icon: UserPenIcon
  },
  {
    text: "Reset Password",
    href: "/dashboard/reset-password",
    icon: Key
  },
  {
    text: "Logout",
    href: "/logout",
    icon: LogIn
  },
]

export const dashboardOverviewCards = [
  {
    key: "totalProducts",
    label: "Total Products",
    value: 128, 
    icon: PackageCheck,
  },
  {
    key: "totalOrders",
    label: "Total Orders",
    value: 342,
    icon: ShoppingCart,
  },
  {
    key: "pendingOrders",
    label: "Pending Orders",
    value: 27,
    icon: Clock3,
  },
  
  {
    key: "walletBalance",
    label: "Wallet Balance",
    value: "$1,254.00",
    icon: Wallet,
  },
];

export const Orders = [
  {
    id: 1,
    order_id: "ORD1001",
    date: "2025-08-25",
    total_amount: 150.00,
    order_status: "Completed"
  },
  {
    id: 2,
    order_id: "ORD1002",
    date: "2025-08-25",
    total_amount: 89.99,
    order_status: "Pending"
  },
  {
    id: 3,
    order_id: "ORD1003",
    date: "2025-08-26",
    total_amount: 299.00,
    order_status: "Completed"
  },
  {
    id: 4,
    order_id: "ORD1004",
    date: "2025-08-26",
    total_amount: 45.50,
    order_status: "Completed"
  },
  {
    id: 5,
    order_id: "ORD1005",
    date: "2025-08-27",
    total_amount: 120.75,
    order_status: "Pending"
  },
  {
    id: 6,
    order_id: "ORD1006",
    date: "2025-08-27",
    total_amount: 199.99,
    order_status: "Completed"
  },
  {
    id: 7,
    order_id: "ORD1007",
    date: "2025-08-27",
    total_amount: 340.00,
    order_status: "Pending"
  },
  {
    id: 8,
    order_id: "ORD1008",
    date: "2025-08-27",
    total_amount: 59.99,
    order_status: "Completed"
  },
  {
    id: 9,
    order_id: "ORD1009",
    date: "2025-08-27",
    total_amount: 74.20,
    order_status: "Pending"
  },
  {
    id: 10,
    order_id: "ORD1010",
    date: "2025-08-27",
    total_amount: 500.00,
    order_status: "Completed"
  }
];


export const Transactions = [
  {
    transactionId: "TXN001",
    amount: 150.75,
    transactionDate: "2025-08-01",
    details: "Payment received",
    method: "Bank Transfer",
  },
  {
    transactionId: "TXN002",
    amount: 89.99,
    transactionDate: "2025-08-02",
    details: "Monthly subscription",
    method: "Credit Card",
  },
  {
    transactionId: "TXN003",
    amount: 300.0,
    transactionDate: "2025-08-03",
    details: "Online purchase",
    method: "Debit Card",
  },
  {
    transactionId: "TXN004",
    amount: 45.5,
    transactionDate: "2025-08-04",
    details: "Fuel refill",
    method: "UPI",
  },
  {
    transactionId: "TXN005",
    amount: 1200.0,
    transactionDate: "2025-08-05",
    details: "Salary credited",
    method: "Bank Transfer",
  },
  {
    transactionId: "TXN006",
    amount: 62.35,
    transactionDate: "2025-08-06",
    details: "Grocery shopping",
    method: "Credit Card",
  },
  {
    transactionId: "TXN007",
    amount: 200.0,
    transactionDate: "2025-08-07",
    details: "Gym membership",
    method: "Debit Card",
  },
  {
    transactionId: "TXN008",
    amount: 18.2,
    transactionDate: "2025-08-08",
    details: "Coffee shop",
    method: "Cash",
  },
  {
    transactionId: "TXN009",
    amount: 750.0,
    transactionDate: "2025-08-09",
    details: "Freelance work",
    method: "Bank Transfer",
  },
  {
    transactionId: "TXN010",
    amount: 99.99,
    transactionDate: "2025-08-10",
    details: "Utility bill",
    method: "UPI",
  },
];


export const Messages = [
  {
    name: "Alice Johnson",
    message: "Hi there! I just wanted to follow up on our meeting from last week. Let me know if you had any more questions.",
    sent: "2 days ago"
  },
  {
    name: "Michael Lee",
    message: "The documents you asked for have been uploaded to the shared folder. Let me know once you’ve reviewed them.",
    sent: "5 days ago"
  },
  {
    name: "Samantha Green",
    message: "Thanks again for your help on the project. I really appreciated your feedback and support throughout.",
    sent: "12 days ago"
  },
  {
    name: "David Kim",
    message: "Just a reminder that we have a call scheduled tomorrow at 10 AM. Please confirm your availability.",
    sent: "1 day ago"
  },
  {
    name: "Emma Wilson",
    message: "I’ve completed the first draft of the proposal. Can you take a look and let me know your thoughts by Friday?",
    sent: "3 days ago"
  },
  {
    name: "Chris Martin",
    message: "I ran into a small issue with the deployment process, but it’s under control. I’ll update you soon.",
    sent: "7 days ago"
  },
  {
    name: "Olivia Brown",
    message: "Let’s schedule a quick check-in next week to go over the upcoming milestones and reassign any tasks if needed.",
    sent: "9 days ago"
  },
  {
    name: "Nathan Scott",
    message: "Hey! Just wanted to say great job on the recent release. The clients are really happy with the outcome.",
    sent: "4 days ago"
  }
];


export const mockMessages = [
  {
    id: "1",
    content: "Hi! I'm interested in your product. Can you tell me more about the pricing?",
    sender: "customer",
    timestamp: new Date("2024-01-15T10:30:00"),
    senderName: "Sarah Johnson",
    senderAvatar: "/professional-woman-diverse.png",
  },
  {
    id: "2",
    content:
      "Hello Sarah! I'd be happy to help you with pricing information. Our basic package starts at $99/month and includes all core features.",
    sender: "vendor",
    timestamp: new Date("2024-01-15T10:32:00"),
    senderName: "Mike Chen",
    senderAvatar: "/professional-man.png",
  },
  {
    id: "3",
    content: "That sounds reasonable. What's included in the premium package?",
    sender: "customer",
    timestamp: new Date("2024-01-15T10:35:00"),
    senderName: "Sarah Johnson",
    senderAvatar: "/professional-woman-diverse.png",
  },
  {
    id: "4",
    content:
      "The premium package is $199/month and includes advanced analytics, priority support, and custom integrations. Would you like me to schedule a demo?",
    sender: "vendor",
    timestamp: new Date("2024-01-15T10:37:00"),
    senderName: "Mike Chen",
    senderAvatar: "/professional-man.png",
  },
]


export const BlogPosts = [
  {
    id: 1,
    title: "Scaring collection inspiration by",
    description:
      "Discover how modern architectural elements can transform your living space with bold geometric forms and striking visual contrasts that create dramatic focal points.",
    date: "23 Jan",
    image: blog1,
    category: "Architecture",
    fullDescription:"A taciti cras scelerisque scelerisque gravida natoque nulla vestibulum turpis primis adipiscing faucibus scelerisque adipiscing aliquet pretium. Et iaculis mi velit tincidunt vestibulum a duis tempor non magna ultrices porta malesuada ullamcorper scelerisque parturient himenaeos iaculis sit. Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos. Ac ullamcorper a ultrices a a urna ac commodo nam condimentum parturient. Libero suspendisse facilisis parturient elementum curabitur. Erat a per dis aliquet ultricies curabitur nostra suspendisse nec adipiscing donec vestibulum a parturient a ac ut non adipiscing penatibus nec erat. A at nec rutrum nam molestie suspendisse scelerisque platea a ut commodo volutpat ullamcorper."
  },
  {
    id: 2,
    title: "Minimalist design furniture 2024",
    description:
      "Explore the latest trends in minimalist furniture design that emphasize clean lines, functional beauty, and sustainable materials for contemporary living.",
    date: "23 Jan",
    image: blog2,
    category: "Furniture",
    fullDescription:"A taciti cras scelerisque scelerisque gravida natoque nulla vestibulum turpis primis adipiscing faucibus scelerisque adipiscing aliquet pretium. Et iaculis mi velit tincidunt vestibulum a duis tempor non magna ultrices porta malesuada ullamcorper scelerisque parturient himenaeos iaculis sit. Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos. Ac ullamcorper a ultrices a a urna ac commodo nam condimentum parturient. Libero suspendisse facilisis parturient elementum curabitur. Erat a per dis aliquet ultricies curabitur nostra suspendisse nec adipiscing donec vestibulum a parturient a ac ut non adipiscing penatibus nec erat. A at nec rutrum nam molestie suspendisse scelerisque platea a ut commodo volutpat ullamcorper."
  },
  {
    id: 3,
    title: "Green interior design inspiration",
    description:
      "Embrace nature-inspired design with lush green elements, natural textures, and eco-friendly materials that bring the outdoors into your home environment.",
    date: "23 Jan",
    image: blog3,
    category: "Interior",
    fullDescription:"A taciti cras scelerisque scelerisque gravida natoque nulla vestibulum turpis primis adipiscing faucibus scelerisque adipiscing aliquet pretium. Et iaculis mi velit tincidunt vestibulum a duis tempor non magna ultrices porta malesuada ullamcorper scelerisque parturient himenaeos iaculis sit. Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos. Ac ullamcorper a ultrices a a urna ac commodo nam condimentum parturient. Libero suspendisse facilisis parturient elementum curabitur. Erat a per dis aliquet ultricies curabitur nostra suspendisse nec adipiscing donec vestibulum a parturient a ac ut non adipiscing penatibus nec erat. A at nec rutrum nam molestie suspendisse scelerisque platea a ut commodo volutpat ullamcorper."
  },
  {
    id: 4,
    title: "Reinterpret the classic bookshelf",
    description:
      "Transform traditional storage solutions with creative bookshelf designs that serve as both functional furniture and artistic statement pieces in modern homes.",
    date: "23 Jan",
    image: blog4,
    category: "Storage",
    fullDescription:"A taciti cras scelerisque scelerisque gravida natoque nulla vestibulum turpis primis adipiscing faucibus scelerisque adipiscing aliquet pretium. Et iaculis mi velit tincidunt vestibulum a duis tempor non magna ultrices porta malesuada ullamcorper scelerisque parturient himenaeos iaculis sit. Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos. Ac ullamcorper a ultrices a a urna ac commodo nam condimentum parturient. Libero suspendisse facilisis parturient elementum curabitur. Erat a per dis aliquet ultricies curabitur nostra suspendisse nec adipiscing donec vestibulum a parturient a ac ut non adipiscing penatibus nec erat. A at nec rutrum nam molestie suspendisse scelerisque platea a ut commodo volutpat ullamcorper."
  },
  {
    id: 5,
    title: "Creative water features and exterior",
    description:
      "Incorporate innovative water elements and exterior design features that create serene environments and enhance the connection between indoor and outdoor spaces.",
    date: "23 Jan",
    image: blog5,
    category: "Exterior",
    fullDescription:"A taciti cras scelerisque scelerisque gravida natoque nulla vestibulum turpis primis adipiscing faucibus scelerisque adipiscing aliquet pretium. Et iaculis mi velit tincidunt vestibulum a duis tempor non magna ultrices porta malesuada ullamcorper scelerisque parturient himenaeos iaculis sit. Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos. Ac ullamcorper a ultrices a a urna ac commodo nam condimentum parturient. Libero suspendisse facilisis parturient elementum curabitur. Erat a per dis aliquet ultricies curabitur nostra suspendisse nec adipiscing donec vestibulum a parturient a ac ut non adipiscing penatibus nec erat. A at nec rutrum nam molestie suspendisse scelerisque platea a ut commodo volutpat ullamcorper."
  },
  {
    id: 6,
    title: "Sweet seat: functional seat for small",
    description:
      "Maximize small living areas with clever seating solutions that combine comfort, style, and space-saving functionality in vibrant, contemporary designs.",
    date: "23 Jan",
    image: blog6,
    category: "Seating",
    fullDescription:"A taciti cras scelerisque scelerisque gravida natoque nulla vestibulum turpis primis adipiscing faucibus scelerisque adipiscing aliquet pretium. Et iaculis mi velit tincidunt vestibulum a duis tempor non magna ultrices porta malesuada ullamcorper scelerisque parturient himenaeos iaculis sit. Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos. Ac ullamcorper a ultrices a a urna ac commodo nam condimentum parturient. Libero suspendisse facilisis parturient elementum curabitur. Erat a per dis aliquet ultricies curabitur nostra suspendisse nec adipiscing donec vestibulum a parturient a ac ut non adipiscing penatibus nec erat. A at nec rutrum nam molestie suspendisse scelerisque platea a ut commodo volutpat ullamcorper."
  },
]