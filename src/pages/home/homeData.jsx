
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

// Brands 
import alga from "../../assets/brand/alga.jpg";
import allmaleinc from "../../assets/brand/allmaleinc.jpg";
import dyson from "../../assets/brand/dyson.jpg";
import footlogix from "../../assets/brand/footlogix.jpg";
import innoluxe from "../../assets/brand/innoluxe.jpg";
import kanpeki from "../../assets/brand/kanpeki.jpg";
import kerastase from "../../assets/brand/kerastase.jpg";
import loreal from "../../assets/brand/loreal.jpg";
import thalgo from "../../assets/brand/thalgo.jpg";
// Blog 
import blog1 from "../../assets/blog/1.png";
import blog2 from "../../assets/blog/2.png";
import blog3 from "../../assets/blog/3.png";
// Testimonial 
import team1 from "../../assets/Images/team1.jpg";
import team2 from "../../assets/Images/team2.jpg";
import team3 from "../../assets/Images/team3.jpg";
import team4 from "../../assets/Images/team4.jpg";

// Service 
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import VisibilityIcon from '@mui/icons-material/Visibility';

import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonIcon from '@mui/icons-material/Person';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

// Product 
import product1 from "../../assets/img/images/products/phos-sachets-new.webp";

// Main Slider 
import slide1 from '../../assets/img/main-slider/1.jpg';
import slide2 from '../../assets/img/main-slider/2.jpg';
import slide3 from '../../assets/img/main-slider/3.jpg';

import aboutImg from '../../assets/img/images/about/about.webp';

// Service 
import adjuvants from '../../assets/img/images/service/adjuvants.webp';
import inoculants from '../../assets/img/images/service/inoculants.webp';
import stimulant from '../../assets/img/images/service/stimulant.webp';

import dummyProduct from '../../assets/img/images/dummyProduct.jpg';
import dummyImage from '../../assets/img/images/dummy.jpg';
import { CapsuleFertilizer, CarFoamWashCleanerImg, CleaningAgentsImg, ConcreteBondingPowderImg, ConstructionChemicalsImg, DishwashGelImg, FloorCleanerImg, GlassAndSurfaceCleanerImg, liquidFertilizer, NanotechWaterProofImg, OrganicFertilizersImg, OxidationCleaner_SmallImg, OxidationCleanerImg, RustCleanerImg, solidFertilize, TextileWashMaticLiquidImg } from '../../Images';

// Main Slider 
export const slidesMain = [
  { image: slide1, content: 'This is the first slide' },
  { image: slide2, content: 'This is the second slide' },
  { image: slide3, content: 'This is the third slide' },
];
// Main Slider Setting 
// export const settingsMainSlider = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   autoplay: true,
// };
// Main Slider Setting 
export const settingsMainSlider = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

  // autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <ArrowBackIosNewIcon />,
  nextArrow: <ArrowForwardIosIcon />
};


export const ourNumberData = [
  { title: 'Locations Pan India', count: 180, icon: <NearMeIcon /> },
  { title: 'Artists & Technicians', count: 400, icon: <NearMeIcon /> },
  { title: 'Decades of Experience', count: 3, icon: <HourglassTopIcon /> },
  { title: 'Global Awards Won', count: 15, icon: <NearMeIcon /> },
];

export const aboutUsData = [
  // {
  //     imgPosition: 'left',
  //     title: 'JOURNEY SO FAR', 
  //     image: salon,
  //     description: ['Beauty Bee Salon Pvt. Ltd. was founded 3 Decades ago with the aim of providing world-class salon experience to clients. The brand is managed by Mr. Sumit Israni, Celebrity Hair Stylist and Managing Director, Beauty Bee Salon Pvt. Ltd.']
  // },
  {
    imgPosition: 'right',
    title: 'Organic Bio Fertilizer',
    image: aboutImg,
    description: ['Largely most of the farmers know that soil health is critical to their business.', '"We are not treating the plant, we are treating the soil. We feel if you treat the soil right and if you take care of the soil, your crops will definitely rise"']
  },
];

// Testimonial Slider Setting 
export const settingsTestiSlider = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
// Testimonial Data
export const testimonialsData = [
  {
    image: team4,
    title: 'Madhulika Sharma',
    description: ["As someone who's always struggled with hair color, I was nervous about trying something new. But this salon's team of experts put me at ease. My hair has never looked so beautiful and vibrant!"]
  },
  {
    image: team3,
    title: "Anisha Sharma",
    description: ["I'm a total skeptic when it comes to haircuts, but this salon blew me away. I went in for a simple trim and left with a stylish, modern haircut that completely transformed my look."]
  },
  {
    image: team2,
    title: "Ankur Aggarwal",
    description: ["I've been getting my haircuts at this salon for years, and I can't imagine going anywhere else. The stylists here always give me the perfect cut that suits my face shape and style."]
  },
  {
    title: "Jessica Arora",
    description: ["The haircuts here are consistently top-notch, and their attention to detail is unmatched. Plus, the face care treatments are a fantastic way to relax and rejuvenate. I feel like a new person every time I leave."]
  },
  {
    image: team1,
    title: "Gourav Arora",
    description: ["I can't express how grateful I am to have found this salon. The hairstylists here are not only incredibly talented but also friendly and welcoming."]
  },

];

// Partner Brands Slider Setting 
export const settingsPartnerBrandsSlider = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  autoplay: true,
  prevArrow: <ArrowBackIosNewIcon />,
  nextArrow: <ArrowForwardIosIcon />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};
{/* Partner Brands */ }
export const partnerBrandsData = [
  { image: alga },
  { image: allmaleinc },
  { image: dyson },
  { image: footlogix },
  { image: innoluxe },
  { image: kanpeki },
  { image: kerastase },
  { image: loreal },
  { image: thalgo },
];

// Our Blog 
export const blogData = [
  {
    image: blog1,
    title: 'Beauty Bee Salon: Where Expertise Meets Exceptional Haircuts',
    description: ["Beauty Bee Salon stands as a beacon of excellence in the world of hair care."]
  },
  {
    image: blog2,
    title: "Beauty Bee Salon: Elevate Your Look with Stunning Hair Color",
    description: ["Renowned for its expertise in hair care and styling, is the perfect destination to elevate your look with stunning hair color."]
  },
  {
    image: blog3,
    title: "Beauty Bee Salon: Crafting Timeless Bridal Elegance",
    description: ["Renowned for its expertise in hair care and styling, is the perfect destination to elevate your look with stunning hair color."]
  },
];


// Our Services 
export const productData = [
  {
    image: OrganicFertilizersImg,
    title: 'Organic Fertilizers',
    link: '/products/organic-liquid-fertilizer'
  },
  {
    image: ConstructionChemicalsImg,
    title: 'Construction Chemicals',
    link: '/products/concrete-bonding-powder'
  },
  {
    image: CleaningAgentsImg,
    title: 'Cleaning Agent',
    link: '/products/floor-cleaner'
  },
  // {
  //   image: bioStimulants,
  //   title: 'Soil Application for Bio Fertilizers',
  // },
];


export const counterData = [
  {
    icon: <CalendarMonthIcon className="h-6 w-7" />,
    count: 2017,
    title: 'Established in Year',
  },
  {
    icon: <GroupsIcon className="h-6 w-7" />,
    count: 15,
    title: "Team Members",
  },
  {
    icon: <HomeWorkIcon className="h-6 w-7" />,
    count: 2,
    title: "Offices",
  },

];


// Vision Mission Tab 
// -----------------------------------------
export const tabsVisionMissoin = [
  {
    icon: <ModeStandbyIcon />,
    title: 'Mission',
    id: 0,
  },
  {
    icon: <VisibilityIcon />,
    title: 'Vision',
    id: 1,
  },
  {
    icon: <CheckBoxIcon />,
    title: 'Motto',
    id: 2,
  },
  {
    icon: <CheckBoxIcon />,
    title: 'Objectives',
    id: 3,
  },
];

export const tabsContentVisionMissoin = [
  {
    id: 0,
    title: 'Our Mission',
    detail: ['"At DnD Solutions, we strive to deliver high-quality chemical products that empower industries to operate efficiently and safely. Our commitment to innovation, customer satisfaction, and environmental stewardship ensures that we provide effective solutions tailored to the unique needs of agriculture, construction, and cleaning sectors."']
  },
  {
    id: 1,
    title: 'Our Vision',
    detail: ['"To be a global leader in chemical solutions, driving innovation and sustainability in agriculture, construction, and cleaning, while enhancing the quality of life for our customers and communities."']
  },
  {
    id: 2,
    title: 'Our Motto',
    detail: ['"Solutions for a Sustainable Tomorrow."']
  },
  {
    id: 3,
    title: 'Objectives of Organic Farming',
    style: 'decimal',
    detail: ['Innovate Continuously: Develop and refine chemical products that address the specific challenges of our target industries, promoting enhanced performance and safety.', 'Customer-Centric Approach: Foster strong relationships with our customers through personalized service, support, and feedback, ensuring their needs are met effectively.', 'Promote Sustainability: Integrate eco-friendly practices into our manufacturing processes and product offerings, reducing environmental impact and promoting responsible use of chemicals.', 'Expand Market Reach: Strategically grow our presence in local and international markets, identifying new opportunities to serve clients across agriculture, construction, and cleaning industries.', 'Ensure Quality Excellence: Maintain the highest quality standards through rigorous testing and compliance, ensuring our products meet industry regulations and exceed customer expectations.']
  },
];



// Products 
// =================================
export const settingsProductsSlider = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,

  autoplay: false,
  autoplaySpeed: 3000,
  prevArrow: <ArrowBackIosNewIcon />,
  nextArrow: <ArrowForwardIosIcon />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const slidesProducts = [
  // Fertilizer 
  { image: solidFertilize, content: 'Bio based Organic solid Fertilizer', link: '/products/bio-based-organic-solid-fertilizer' },
  { image: CapsuleFertilizer, content: 'Organic Active Capsule Fertilizer', link: '/products/organic-active-capsule-fertilizer' },
  { image: liquidFertilizer, content: 'Organic Liquid Fertilizer', link: '/products/organic-liquid-fertilizer' },

  // Construction Chemicals
  { image: ConcreteBondingPowderImg, content: 'Concrete Bonding Powder', link: '/products/concrete-bonding-powder' },
  { image: NanotechWaterProofImg, content: 'Nano technology based Water proofing Chemical', link: '/products/nano-technology-based-water-proofing-chemical' },

  // Regular cleaning agents
  { image: FloorCleanerImg, content: 'Floor Cleaner', link: '/products/floor-cleaner' },
  { image: DishwashGelImg, content: 'Dishwasher Gel', link: '/products/dishwasher-gel' },
  { image: TextileWashMaticLiquidImg, content: 'Textile Washing Matic Liquid', link: '/products/textile-washing-matic-liquid' },
  { image: GlassAndSurfaceCleanerImg, content: 'Glass and surface Cleaner', link: '/products/glass-and-surface-cleaner' },
  { image: CarFoamWashCleanerImg, content: 'Car Foam Wash Cleaner', link: '/products/car-foam-wash-cleaner' },

  // Custom Cleaning Agent
  { image: RustCleanerImg, content: 'Rust cleaner', link: '/products/rust-cleaner' },
  { image: OxidationCleaner_SmallImg, content: 'Oxidation cleaner', link: '/products/oxidation-cleaner' },
  { image: FloorCleanerImg, content: 'Custom Floor Cleaner', link: '/products/custom-floor-cleaner' },
  { image: dummyImage, content: 'Custom Profile Cleaner', link: '/products/custom-profile-cleaner' },

];



// Why Choose GROW MORE ?
export const WhyChooseData = [
  { icon: <ThumbUpIcon />, title: 'World-Class Quality' },
  { icon: <AccessAlarmsIcon />, title: 'Timely Delivery' },
  { icon: <NearMeIcon />, title: 'Modern Technology' },
  { icon: <CurrencyRupeeIcon />, title: 'Affordable Prices' },
  { icon: <PersonIcon />, title: 'Customer Support' },
  { icon: <LocationOnIcon />, title: 'Wide Distribution Network' },
  { icon: <LocalShippingIcon />, title: 'Strong Logistics Support' },
  { icon: <CheckBoxIcon />, title: 'Reliable & Trusted Services' },

];