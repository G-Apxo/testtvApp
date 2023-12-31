const hotels =  [
  {
    name: "Hotel Old Seti",
    mainImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/15/oldset0.jpg",
    location: " Mestia, Georgia",
    rating: 3.2,
    facilities: ["Flat Tv", "Internet – Wifi", "Coffee and tea"],
    price: 96,
  },
  {
    name: "Hill Inn",
    mainImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/hillin6.jpg",
    location: "",
    rating: 3.5,
    facilities: [],
    price: 175,
  },
  {
    name: "Hotel Liberty Theatre",
    mainImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/liberty-600.jpg",
    location: " Tbilisi",
    rating: 5,
    facilities: ["Flat Tv", "Internet – Wifi", "Coffee and tea"],
    price: 710,
  },
  {
    name: "Best Western Tbilisi City",
    mainImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/9895896282-600.jpg",
    location: " Tbilisi",
    rating: 4.2,
    facilities: ["Wake-up call", "Internet – Wifi", "Coffee and tea"],
    price: 448,
  },
  {
    name: "Hualing",
    mainImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/hotels-preference-hualing-tbilisi-600.png",
    location: " Tbilisi",
    rating: 4.9,
    facilities: [
      "Wake-up call",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
    ],
    price: 727,
  },
  {
    name: "Kisi Garden",
    mainImage: "https://nomadao.net/public/uploads/0000/1/2023/02/14/kisi0.jpg",
    location: " Georgia",
    rating: 4.9,
    facilities: [],
    price: 490,
  },
  {
    name: "Episode Tbilisi",
    mainImage:
      "https://nomadao.net/public/uploads/0000/123/2023/01/23/327284333-600.jpg",
    location: " Tbilisi",
    rating: 4.9,
    facilities: [
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Flat Tv",
      "Coffee and tea",
    ],
    price: 311,
  },
  {
    name: "Hotel Margi",
    mainImage:
      "https://nomadao.net/public/uploads/0000/1/2022/12/01/dsc7171-hdr1-600.jpg",
    location: " Tbilisi",
    rating: 3.9,
    facilities: [
      "Wake-up call",
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 582,
  },
  {
    name: "Hotel Imperial House",
    mainImage: "https://nomadao.net/public/uploads/demo/space/space-2.jpg",
    location: " Tbilisi",
    rating: 3.7,
    facilities: [
      "Wake-up call",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 375,
  },
  {
    name: "Dylan Hotel",
    mainImage: "https://nomadao.net/public/uploads/demo/space/space-13.jpg",
    location: " New York, United States",
    rating: 4.6,
    facilities: [
      "Wake-up call",
      "Car hire",
      "Bicycle hire",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 500,
  },
  {
    name: "Parian Holiday Villas",
    mainImage: "",
    location: " Paris",
    rating: 3.9,
    facilities: [
      "Wake-up call",
      "Car hire",
      "Bicycle hire",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
    ],
    price: 377,
  },
  {
    name: "The May Fair Hotel",
    mainImage: "",
    location: " Paris",
    rating: 4.9,
    facilities: [
      "Wake-up call",
      "Car hire",
      "Bicycle hire",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 185,
  },
  {
    name: "Stewart Hotel",
    mainImage: "",
    location: " Los Angeles",
    rating: 3.6,
    facilities: [
      "Wake-up call",
      "Car hire",
      "Bicycle hire",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 449,
  },
  {
    name: "Crowne Plaza Hotel",
    mainImage: "",
    location: " New York, United States",
    rating: 4.7,
    facilities: [
      "Wake-up call",
      "Bicycle hire",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Coffee and tea",
    ],
    price: 753,
  },
  {
    name: "Studio Allston Hotel",
    mainImage: "https://nomadao.net/public/uploads/demo/space/space-9.jpg",
    location: " Los Angeles",
    rating: 3.3,
    facilities: [
      "Wake-up call",
      "Car hire",
      "Bicycle hire",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 617,
  },
  {
    name: "Redac Gateway Hotel",
    mainImage: "https://nomadao.net/public/uploads/demo/space/space-8.jpg",
    location: " Paris",
    rating: 3.8,
    facilities: [
      "Wake-up call",
      "Bicycle hire",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 776,
  },
  {
    name: "Castello Casole Hotel",
    mainImage: "https://nomadao.net/public/uploads/demo/space/space-7.jpg",
    location: " Paris",
    rating: 4,
    facilities: [
      "Wake-up call",
      "Car hire",
      "Bicycle hire",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 98,
  },
  {
    name: "Hotel WBF Hommachi",
    mainImage: "https://nomadao.net/public/uploads/demo/space/space-6.jpg",
    location: " Paris",
    rating: 3,
    facilities: [
      "Car hire",
      "Bicycle hire",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Coffee and tea",
    ],
    price: 156,
  },
  {
    name: "Hotel Stanford",
    mainImage: "https://nomadao.net/public/uploads/demo/space/space-5.jpg",
    location: " Paris",
    rating: 4.6,
    facilities: [
      "Wake-up call",
      "Bicycle hire",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 765,
  },
  {
    name: "Lamara Hotel",
    mainImage:
      "https://nomadao.net/public/uploads/0000/1/2023/03/06/vinum-banner-600.jpg",
    location: " Tbilisi",
    rating: 5,
    facilities: [
      "Wake-up call",
      "Car hire",
      "Flat Tv",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 412,
  },
  {
    name: "Vinum",
    mainImage: "",
    location: " Tbilisi",
    rating: 3.7,
    facilities: ["Internet – Wifi", "Coffee and tea"],
    price: 305,
  },
  {
    name: "Shota@Rustaveli boutique hotel",
    mainImage: "",
    location: "",
    rating: 4,
    facilities: [],
    price: 504,
  },
  {
    name: "Safran Hotel Baku",
    mainImage: "",
    location: " Baku, Azerbaijan",
    rating: 3,
    facilities: [
      "Wake-up call",
      "Car hire",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 476,
  },
  {
    name: "Sapphire Marine Hotel",
    mainImage: "",
    location: " Baku, Azerbaijan",
    rating: 4.1,
    facilities: [
      "Wake-up call",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 890,
  },
  {
    name: "Sapphire Bayil Hotel",
    mainImage: "",
    location: " Baku, Azerbaijan",
    rating: 3.5,
    facilities: [],
    price: 456,
  },
  {
    name: "AZCOT HOTEL BAKU",
    mainImage:
      "https://nomadao.net/public/uploads/0000/68/2022/11/24/88e32286-dcc5-4f8f-93fc-46ee1d4b0755-600.jpg",
    location: " Baku, Azerbaijan",
    rating: 4,
    facilities: [],
    price: 107,
  },
  {
    name: "Callisto Hotel",
    mainImage:
      "https://nomadao.net/public/uploads/0000/1/2022/11/21/bob2-600.jpg",
    location: " Baku, Azerbaijan",
    rating: 3.1,
    facilities: [],
    price: 886,
  },
  {
    name: "Bob W Telliskivi",
    mainImage:
      "https://nomadao.net/public/uploads/0000/1/2022/11/21/luxury-600.jpg",
    location: " Tallinn, Estonia",
    rating: 4.1,
    facilities: [
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 644,
  },
  {
    name: "Luxury inn",
    mainImage: "https://nomadao.net/public/uploads/0000/1/2022/11/21/caza.jpg",
    location: " Tbilisi",
    rating: 4.7,
    facilities: ["Flat Tv", "Internet – Wifi", "Coffee and tea"],
    price: 516,
  },
  {
    name: "Hotel Caza Fisherman's Wharf",
    mainImage: "",
    location: " San Francisco",
    rating: 4.1,
    facilities: [
      "Wake-up call",
      "Car hire",
      "Bicycle hire",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 864,
  },
  {
    name: "Costa Azul Suites Virginia Beach by Red Collection",
    mainImage: "",
    location: " Virginia",
    rating: 3.9,
    facilities: [
      "Wake-up call",
      "Car hire",
      "Bicycle hire",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 496,
  },
  {
    name: "Quiet Mind Mountain Lodge, Retreat & Spa",
    mainImage: "",
    location: " California",
    rating: 4.9,
    facilities: [],
    price: 239,
  },
  {
    name: "Hotel Normandie",
    mainImage: "",
    location: " Los Angeles",
    rating: 4.4,
    facilities: [
      "Wake-up call",
      "Bicycle hire",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 698,
  },
  {
    name: "Hotel Lutetia",
    mainImage: "",
    location: " Paris",
    rating: 3.3,
    facilities: [
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 767,
  },
  {
    name: "THE FLAG München M.",
    mainImage: "",
    location: " Munich, Germany",
    rating: 3.2,
    facilities: [
      "Bicycle hire",
      "Flat Tv",
      "Laundry and dry cleaning",
      "Internet – Wifi",
      "Coffee and tea",
    ],
    price: 773,
  },
];

export default hotels;