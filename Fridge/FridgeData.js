import Navbar from "../Navbars/Navbaar";
import FridgeBridge from "./FridgeBridge";
import { useState } from 'react';
import {moon} from '../imgs/1.jpg';

//<Navbar handleSearchNote2={setDoom}/>
//const [doom,setDoom]=useState('');
export  const fridges= [
    {
      "id": "fridge001",
      name: "Stainless Steel French Door Fridge",
      "description": "A spacious stainless steel French door fridge with advanced cooling technology.",
      "price": 1299.99,
      "image": "https://th.bing.com/th/id/R.a0c07918120220aee6dcafe33406dee8?rik=DIuUQoIsl2%2f3sQ&riu=http%3a%2f%2fo.aolcdn.com%2fhss%2fstorage%2fmidas%2ff9bf5b8c7a5096d386da3a73d853b975%2f203205303%2fsamsung-smart-fridge-2016-01-04-01.jpg&ehk=VHpsDiZOla4uk2EoVJDkOLzhgNwUD%2bduEw9uWJRqyoc%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      "id": "fridge002",
       name: "Side-by-Side Refrigerator",
      "description": "A modern side-by-side refrigerator with adjustable shelves and LED lighting.",
      "price": 999.99,
      "image": "https://mlvtgiqzoszz.i.optimole.com/Sb3K8mU-ceeKk7cp/w:auto/h:auto/q:90/https://www.appliancecity.co.uk/wp-content/uploads/2014/06/Samsung-rh57h90507f-ajar-1.jpg"
    },
    {
      "id": "fridge003",
      name: "Top Freezer Refrigerator",
      "description": "Classic top freezer refrigerator with ample storage space and energy-efficient features.",
      "price": 549.99,
      "image": "https://blog.bestbuy.ca/wp-content/uploads/2021/01/LG-Side-By-Side-InstaView-Refrigerator.jpg"
    },
    {
      "id": "fridge004",
      name: "Counter-Depth French Door Fridge",
      "description": "Sleek counter-depth French door fridge designed to fit seamlessly into your kitchen.",
      "price": 1699.99,
      "image": "https://example.com/images/fridge004.jpg"
    },
    {
      "id": "fridge005",
      name: "Compact Mini Fridge",
      "description": "A compact mini fridge with a small footprint, perfect for dorm rooms and offices.",
      "price": 129.99,
      "image": "https://example.com/images/fridge005.jpg"
    },
    {
      "id": "fridge006",
      name: "Four-Door Flex Refrigerator",
      "description": "Innovative four-door flex refrigerator with customizable compartments and smart features.",
      "price": 2199.99,
      "image": "https://example.com/images/fridge006.jpg"
    },
    {
      "id": "fridge007",
      name: "Bottom Freezer Refrigerator",
      "description": "Convenient bottom freezer refrigerator with pull-out drawers and humidity control.",
      "price": 799.99,
      "image": "https://example.com/images/fridge007.jpg"
    },
    {
      "id": "fridge008",
      name: "Smart WiFi-Connected Fridge",
      "description": "Smart fridge with WiFi connectivity, touchscreen display, and app control.",
      "price": 1499.99,
      "image": "https://example.com/images/fridge008.jpg"
    },
    {
      "id": "fridge009",
      name: "French Door Refrigerator with Keurig",
      "description": "French door refrigerator featuring a built-in Keurig coffee maker for added convenience.",
      "price": 1899.99,
      "image": "https://example.com/images/fridge009.jpg"
    },
    {
      "id": "fridge010",
      name: "SideKicks All-Refrigerator",
      "description": "SideKicks all-refrigerator designed for extra storage space and organization.",
      "price": 799.99,
      "image": "https://example.com/images/fridge010.jpg"
    },
    {
      "id": "fridge011",
      name: "Convertible Refrigerator/Freezer",
      "description": "Convertible fridge/freezer with adjustable temperature zones for flexible storage.",
      "price": 899.99,
      "image": "https://example.com/images/fridge011.jpg"
    },
    {
      "id": "fridge012",
      name: "Built-In French Door Fridge",
      "description": "Elegant built-in French door fridge with precise temperature control and sleek design.",
      "price": 2599.99,
      "image": "https://example.com/images/fridge012.jpg"
    },
    {
      "id": "fridge013",
      name: "Counter-Depth Side-by-Side Refrigerator",
      "description": "Counter-depth side-by-side refrigerator with advanced cooling technology and spacious interior.",
      "price": 1799.99,
      "image": "https://example.com/images/fridge013.jpg"
    },
    {
      "id": "fridge014",
      name: "Retro-Style Fridge",
      "description": "Charming retro-style fridge with a vintage look and modern features.",
      "price": 1199.99,
      "image": "https://example.com/images/fridge014.jpg"
    },
    {
      "id": "fridge015",
      name: "Top Freezer Refrigerator with Ice Maker",
      "description": "Top freezer refrigerator with built-in ice maker and adjustable storage options.",
      "price": 649.99,
      "image": "https://example.com/images/fridge015.jpg"
    },
    {
      "id": "fridge016",
      name: "French Door Refrigerator with Drawer Freezer",
      "description": "French door refrigerator featuring a convenient pull-out drawer freezer.",
      "price": 1399.99,
      "image": "https://example.com/images/fridge016.jpg"
    },
    {
      "id": "fridge017",
      name: "Counter-Depth Bottom Freezer Refrigerator",
      "description": "Counter-depth bottom freezer refrigerator with sleek design and organized storage.",
      "price": 1899.99,
      "image": "https://example.com/images/fridge017.jpg"
    },
    {
      "id": "fridge018",
      name: "Side-by-Side Refrigerator with Water Dispenser",
      "description": "Side-by-side refrigerator with external water and ice dispenser for easy access.",
      "price": 899.99,
      "image": "https://example.com/images/fridge018.jpg"
    },
    {
      "id": "fridge019",
      name: "Compact Freezerless Refrigerator",
      "description": "Compact freezerless refrigerator for additional fresh food storage.",
      "price": 299.99,
      "image": "https://example.com/images/fridge019.jpg"
    },
    {
      "id": "fridge020",
      name: "French Door Refrigerator with Smart Cooling",
      "description": "French door refrigerator with smart cooling technology to keep food fresher for longer.",
      "price": 1699.99,
      "image": "https://example.com/images/fridge020.jpg"
    },
    {
      "id": "fridge021",
      name: "Counter-Depth Side-by-Side Fridge",
      "description": "Counter-depth side-by-side fridge with adjustable shelves and spacious freezer.",
      "price": 1499.99,
      "image": "https://example.com/images/fridge021.jpg"
    },
    {
      "id": "fridge022",
      name: "Fingerprint-Resistant Refrigerator",
      "description": "Fingerprint-resistant refrigerator with easy-to-clean surfaces and modern design.",
      "price": 1299.99,
      "image": "https://example.com/images/fridge022.jpg"
    },
    {
      "id": "fridge023",
      name: "Compact Refrigerator with Freezer Compartment",
      "description": "Compact refrigerator with a small freezer compartment, ideal for limited spaces.",
      "price": 199.99,
      "image": "https://example.com/images/fridge023.jpg"
    },
    {
      "id": "fridge024",
      name: "French Door Refrigerator with Door-in-Door",
      "description": "French door refrigerator with convenient door-in-door feature for easy access.",
      "price": 2099.99,
      "image": "https://example.com/images/fridge024.jpg"
    },
    {
      "id": "fridge025",
      name: "Top Freezer Refrigerator with Glass Shelves",
      "description": "Top freezer refrigerator with glass shelves for a sleek and organized interior.",
      "price": 599.99,
      "image": "https://example.com/images/fridge025.jpg"
    },
    {
      "id": "fridge026",
      name: "Convertible French Door Fridge",
      "description": "Convertible French door fridge with adjustable temperature zones and flexible storage.",
      "price": 1799.99,
      "image": "https://example.com/images/fridge026.jpg"
    },
    {
      "id": "fridge027",
      name: "Side-by-Side Refrigerator with Dual Ice Maker",
      "description": "Side-by-side refrigerator with dual ice maker for extra ice production.",
      "price": 1199.99,
      "image": "https://example.com/images/fridge027.jpg"
    },
    {
      "id": "fridge028",
      name: "Counter-Depth French Door Fridge with Craft Ice",
      "description": "Counter-depth French door fridge with built-in craft ice maker for premium ice cubes.",
      "price": 2399.99,
      "image": "https://example.com/images/fridge028.jpg"
    },
    {
      "id": "fridge029",
      name: "Compact Retro Fridge",
      "description": "Compact retro fridge with nostalgic design and modern cooling technology.",
      "price": 799.99,
      "image": "https://example.com/images/fridge029.jpg"
    },
    {
      "id": "fridge030",
      name: "Counter-Depth Side-by-Side Refrigerator",
      "description": "Counter-depth side-by-side refrigerator with LED lighting and adjustable bins.",
      "price": 1699.99,
      "image": "https://example.com/images/fridge030.jpg"
    },
    {
      "id": "fridge031",
      name: "French Door Refrigerator with AutoFill Pitcher",
      "description": "French door refrigerator with AutoFill pitcher for hassle-free water dispensing.",
      "price": 1799.99,
      "image": "https://example.com/images/fridge031.jpg"
    },
    {
      "id": "fridge032",
      name: "Side-by-Side Fridge with Dispenser",
      "description": "Side-by-side fridge with external dispenser for water, ice, and more.",
      "price": 1299.99,
      "image": "https://example.com/images/fridge032.jpg"
    },
    {
      "id": "fridge033",
      name: "French Door Refrigerator with TriCool Cooling",
      "description": "French door refrigerator with TriCool cooling system for optimal temperature control.",
      "price": 1599.99,
      "image": "https://example.com/images/fridge033.jpg"
    },
    {
      "id": "fridge034",
      name: "Top Freezer Refrigerator with Humidity Control",
      "description": "Top freezer refrigerator with humidity-controlled crispers for fresh produce.",
      "price": 649.99,
      "image": "https://example.com/images/fridge034.jpg"
    },
    {
      "id": "fridge035",
      name: "French Door Fridge with Showcase Door",
      "description": "French door fridge with showcase door for quick access to frequently used items.",
      "price": 1899.99,
      "image": "https://example.com/images/fridge035.jpg"
    },
    {
      "id": "fridge036",
      name: "Counter-Depth Side-by-Side Refrigerator",
      "description": "Counter-depth side-by-side refrigerator with modern design and spacious interior.",
      "price": 1399.99,
      "image": "https://example.com/images/fridge036.jpg"
    },
    {
      "id": "fridge037",
      name: "Smart French Door Refrigerator",
      "description": "Smart French door refrigerator with voice control and advanced cooling features.",
      "price": 1999.99,
      "image": "https://example.com/images/fridge037.jpg"
    },
    {
      "id": "fridge038",
      name: "Top Freezer Refrigerator with Door Alarm",
      "description": "Top freezer refrigerator with door alarm to alert you if the door is left open.",
      "price": 599.99,
      "image": "https://example.com/images/fridge038.jpg"
    },
    {
      "id": "fridge039",
      name: "Side-by-Side Fridge with Wine Rack",
      "description": "Side-by-side fridge with built-in wine rack for storing your favorite wines.",
      "price": 1499.99,
      "image": "https://example.com/images/fridge039.jpg"
    },
    {
      "id": "fridge040",
      name: "Counter-Depth French Door Fridge",
      "description": "Counter-depth French door fridge with adjustable shelves and elegant design.",
      "price": 1899.99,
      "image": "https://example.com/images/fridge040.jpg"
    },
    {
      "id": "fridge041",
      name: "French Door Refrigerator with InstaView",
      "description": "French door refrigerator with InstaView door-in-door for easy access to contents.",
      "price": 2099.99,
      "image": "https://example.com/images/fridge041.jpg"
    },
    {
      "id": "fridge042",
      name: "Compact Fridge with Freezer Compartment",
      "description": "Compact fridge with a small freezer compartment, ideal for small spaces.",
      "price": 179.99,
      "image": "https://example.com/images/fridge042.jpg"
    },
    {
      "id": "fridge043",
      name: "Side-by-Side Refrigerator with External Controls",
      "description": "Side-by-side refrigerator with external temperature and water controls.",
      "price": 999.99,
      "image": "https://example.com/images/fridge043.jpg"
    },
    {
      "id": "fridge044",
      name: "French Door Refrigerator with Dual Cooling",
      "description": "French door refrigerator with dual cooling system for optimal food preservation.",
      "price": 2299.99,
      "image": "https://example.com/images/fridge044.jpg"
    },
    {
      "id": "fridge045",
      name: "Counter-Depth Fridge with FlexZone",
      "description": "Counter-depth fridge with FlexZone compartment for customizable temperature settings.",
      "price": 1699.99,
      "image": "https://example.com/images/fridge045.jpg"
    },
    {
      "id": "fridge046",
      name: "French Door Refrigerator with Twin Cooling Plus",
      "description": "French door refrigerator with Twin Cooling Plus technology for maintaining freshness.",
      "price": 1799.99,
      "image": "https://example.com/images/fridge046.jpg"
    },
    {
      "id": "fridge047",
      name: "Side-by-Side Fridge with Beverage Chiller",
      "description": "Side-by-side fridge with dedicated beverage chiller compartment.",
      "price": 1399.99,
      "image": "https://example.com/images/fridge047.jpg"
    },
    {
      "id": "fridge048",
      name: "Counter-Depth French Door Fridge",
      "description": "Counter-depth French door fridge with adjustable bins and LED lighting.",
      "price": 2199.99,
      "image": "https://example.com/images/fridge048.jpg"
    },
    {
      "id": "fridge049",
      name: "French Door Refrigerator with CoolSelect Pantry",
      "description": "French door refrigerator with CoolSelect pantry for versatile food storage.",
      "price": 1899.99,
      "image": "https://example.com/images/fridge049.jpg"
    },
    {
      "id": "fridge050",
      name: "Side-by-Side Fridge with Deli Drawer",
      "description": "Side-by-side fridge with spacious deli drawer for cold cuts and cheeses.",
      "price": 1299.99,
      "image": "https://example.com/images/fridge050.jpg"
    }
  ]

//{<FridgeBridge fridges={fridges.filter((note)=>note.name.toLowerCase().includes(doom))}  />}