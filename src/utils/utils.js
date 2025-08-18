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
    selling:19,
    reviewCount: 128,
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-1.jpg",
    badge: null,
    inStock: true,
  },
  {
    id: 2,
    name: "Geeky ipsum esse repreh est consequat",
    category: "Electronics",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.3,
    selling:5,
    reviewCount: 89,
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    badge: "Sale",
    inStock: true,
  },
  {
    id: 3,
    name: "Conjurica ea magna eiusmod esse cupt anim aliquip",
    category: "Gaming",
    price: 29.99,
    originalPrice: 59.29,
    discount: null,
    rating: 4.2,
    selling:7,
    reviewCount: 156,
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-3.jpg",
    badge: null,
    inStock: true,
  },
  {
    id: 4,
    name: "Senmei ipsum dolore eiusmod dolor officia do nisi",
    category: "Computers",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    rating: 4.7,
    selling:0,
    reviewCount: 45,
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-4.jpg",
    badge: "New",
    inStock: true,
  },
  {
    id: 5,
    name: "Canopoly duis voluptate dolor sunt sit adipisicing in",
    category: "Mobile Phones",
    price: 699.99,
    originalPrice: 799.99,
    discount: 12,
    rating: 4.4,
    selling:13,
    reviewCount: 203,
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-5.jpg",
    badge: null,
    inStock: true,
  },
  {
    id: 6,
    name: "Unisure aliqua repreh ex cupt qui elit officia",
    category: "Electronics",
    price: 24.99,
    originalPrice: null,
    discount: null,
    rating: 4.1,
    selling:44,
    reviewCount: 67,
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-6.jpg",
    badge: null,
    inStock: true,
  },
  {
    id: 7,
    name: "Kenegy consectetur id ex nulla in adipisicing deserunt",
    category: "Electronics",
    price: 34.99,
    originalPrice: null,
    discount: null,
    rating: 4.6,
    selling:12,
    reviewCount: 92,
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-7.jpg",
    badge: null,
    inStock: true,
  },
  {
    id: 8,
    name: "Bizmatic consequat enim quis sit et est eiusmod",
    category: "Audio",
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    rating: 4.3,
    selling:25,
    reviewCount: 178,
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-8.jpg",
    badge: "Popular",
    inStock: true,
  },
  {
    id: 9,
    name: "Anarco consectetur magna nostrud commodo tempor aliqua..",
    category: "Audio",
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    rating: 4.5,
    selling:29,
    reviewCount: 134,
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-9.jpg",
    badge: null,
    inStock: true,
  },
  {
    id: 10,
    name: "Plasto cillum ad minim elit fugiat esse dolore",
    category: "Gaming",
    price: 499.99,
    originalPrice: null,
    discount: null,
    rating: 3.8,
    selling:22,
    reviewCount: 89,
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-10.jpg",
    badge: null,
    inStock: true,
  },
  {
    id: 11,
    name: "Conjurica ea magna eiusmod esse cupt anim aliquip",
    category: "Gaming",
    price: 69.99,
    originalPrice: 79.99,
    discount: 12,
    rating: 4.6,
    selling:2,
    reviewCount: 156,
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-1.jpg",
    badge: null,
    inStock: true,
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
    selling:2,
    images:
      "https://shopo.quomodothemes.website/assets/images/product-img-2.jpg",
    badge: "Premium",
    inStock: true,
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

