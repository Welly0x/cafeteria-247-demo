export interface MenuItem {
  id: string;
  name: string;
  arabicName?: string;
  category: string;
  price?: string;
  description?: string;
  image?: string;
  isPopular?: boolean;
  isSignature?: boolean;
  calories?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  iconName?: string;
  count?: number;
}

export const RESTAURANT_INFO = {
  name: 'Cafeteria 24/7',
  arabicName: 'كافتيريا 24/7',
  tagline: 'Your Cravings. Anytime.',
  subTagline: 'Fresh cafeteria favorites, loaded burgers, crispy chicken, parathas, wraps, juices and more.',
  phone: '04 554 1799',
  phoneDisplay: '04 554 1799',
  phoneTel: 'tel:045541799',
  phoneSecondary: '058 998 1799',
  whatsappNumber: '+971 58 998 1799',
  whatsappRaw: '971589981799',
  address: '25WW+Q7V, Al Barsha South Fifth, Jumeirah Village Triangle, Dubai, UAE',
  addressDetailed: 'Imperial Residence, Shop No: 25, Near Safestway Supermarket, Jumeirah Village Triangle, Dubai - UAE',
  mapsUrl: 'https://maps.app.goo.gl/GMky2HZr6ibE4LqT6',
  deliveryPolicy: 'FREE HOME DELIVERY up to AED 10',
  defaultWhatsAppMessage: 'Hi Cafeteria 24/7, I would like to place an order.',
};

export const OPENING_HOURS = [
  { day: 'Monday', hours: '6:30 AM – 12:30 AM', isSplit: false },
  { day: 'Tuesday', hours: '6:30 AM – 12:30 AM', isSplit: false },
  { day: 'Wednesday', hours: '6:30 AM – 12:30 AM', isSplit: false },
  { day: 'Thursday', hours: '6:30 AM – 12:30 AM', isSplit: false },
  { 
    day: 'Friday', 
    hours: '6:00 AM – 12:00 PM & 2:00 PM – 12:30 AM', 
    splitHours: ['6:00 AM – 12:00 PM', '2:00 PM – 12:30 AM'],
    isSplit: true 
  },
  { day: 'Saturday', hours: '6:30 AM – 12:30 AM', isSplit: false },
  { day: 'Sunday', hours: '6:30 AM – 12:30 AM', isSplit: false },
];

/**
 * Accurately checks whether Cafeteria 24/7 is currently open in Dubai time (GST: UTC+4).
 */
export function getDubaiCurrentStatus() {
  // Compute Dubai time (UTC+4)
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const dubaiTime = new Date(utc + (3600000 * 4));

  const dayOfWeek = dubaiTime.getDay(); // 0 is Sunday, 1 is Monday, 5 is Friday
  const currentMinutes = dubaiTime.getHours() * 60 + dubaiTime.getMinutes();

  // 12:30 AM next day is equivalent to 30 minutes past midnight
  // In our check, if currentMinutes < 30 (00:00 to 00:30), it falls into the previous day's late night shift!
  let effectiveDay = dayOfWeek;
  let isInMidnightExtension = false;

  if (currentMinutes < 30) {
    isInMidnightExtension = true;
    effectiveDay = (dayOfWeek + 6) % 7; // Previous day
  }

  let isOpen = false;
  let statusText = 'Closed';
  let nextEventText = '';

  if (isInMidnightExtension) {
    // All days close at 12:30 AM (00:30)
    isOpen = true;
    statusText = 'Open Now';
    nextEventText = 'Closes at 12:30 AM';
  } else if (effectiveDay === 5) { // Friday
    // Slot 1: 6:00 AM (360m) - 12:00 PM (720m)
    // Slot 2: 2:00 PM (840m) - 12:30 AM (00:30 next day, handled above)
    if (currentMinutes >= 360 && currentMinutes < 720) {
      isOpen = true;
      statusText = 'Open Now';
      nextEventText = 'Closes at 12:00 PM (Re-opens 2:00 PM)';
    } else if (currentMinutes >= 720 && currentMinutes < 840) {
      isOpen = false;
      statusText = 'Temporarily Closed for Friday Prayer';
      nextEventText = 'Re-opens at 2:00 PM';
    } else if (currentMinutes >= 840) {
      isOpen = true;
      statusText = 'Open Now';
      nextEventText = 'Closes at 12:30 AM';
    } else {
      isOpen = false;
      statusText = 'Closed';
      nextEventText = 'Opens at 6:00 AM';
    }
  } else { // Monday - Thursday, Saturday - Sunday (6:30 AM to 12:30 AM next day)
    // 6:30 AM is 390m
    if (currentMinutes >= 390) {
      isOpen = true;
      statusText = 'Open Now';
      nextEventText = 'Closes at 12:30 AM';
    } else {
      isOpen = false;
      statusText = 'Closed';
      nextEventText = 'Opens at 6:30 AM';
    }
  }

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayNames[dayOfWeek];

  return {
    isOpen,
    statusText,
    nextEventText,
    todayName,
    dubaiTimeString: dubaiTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
  };
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', name: 'All Featured' },
  { id: 'paratha', name: 'Paratha' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'wraps', name: 'Wraps' },
  { id: 'fried-chicken', name: 'Fried Chicken' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'juices', name: 'Juices' },
  { id: 'milkshakes', name: 'Milkshakes' },
  { id: 'plates', name: 'Plates & Sides' },
  { id: 'shawarma', name: 'Shawarma' },
  { id: 'hot-drinks', name: 'Hot Drinks & Chai' },
  { id: 'breakfast', name: 'Breakfast Combos' },
];

export const FEATURED_PRODUCTS: MenuItem[] = [
  {
    id: 'mighty-zinger-burger',
    name: 'Mighty Zinger Burger',
    arabicName: 'برجر مايتي زنجر',
    category: 'burgers',
    price: 'AED 18.00',
    description: 'Double stacked golden crispy chicken fillets, molten cheese slice, fresh lettuce, tomato and signature cafeteria spicy sauce.',
    image: 'src/assets/images/Crispy_fried_chicken_burger_2K_20261006234203-removebg-preview.png',
    isPopular: true,
    isSignature: true,
  },
  {
    id: 'zinger-paratha',
    name: 'Zinger Paratha',
    arabicName: 'زنجر براتا',
    category: 'paratha',
    price: 'AED 13.00',
    description: 'Freshly griddled layered flaky paratha wrapped tightly around crunchy zinger chicken, spicy mayonnaise, onions and cabbage.',
    image: 'src/assets/images/Zinger_paratha_roll_commercial_i__2K_20261006234308-removebg-preview.png',
    isPopular: true,
    isSignature: true,
  },
  {
    id: 'zinger-wrap',
    name: 'Zinger Wrap',
    arabicName: 'زنجر راب',
    category: 'wraps',
    price: 'AED 14.00',
    description: 'Toasted flat tortilla wrap filled with crispy breaded chicken strips, fresh lettuce, tomatoes, and house dressing.',
    image: 'src/assets/images/Zinger_wrap_food_product_image_2K_20261006234248-removebg-preview.png',
    isPopular: true,
  },
  {
    id: 'chicken-pizza',
    name: 'Chicken Pizza',
    arabicName: 'بيتزا دجاج',
    category: 'pizza',
    price: 'AED 18.00',
    description: 'Oven-baked flat crust topped with shredded mozzarella, spiced chicken chunks, bell peppers, tomato base and black olives.',
    image: 'src/assets/images/Chicken_pizza_isolated_commercia__2K_20261006234213-removebg-preview.png',
    isPopular: true,
  },
  {
    id: 'fried-chicken-meal',
    name: 'Fried Chicken Dinner Meal',
    arabicName: 'وجبة دجاج بروستد',
    category: 'fried-chicken',
    price: 'AED 25.00',
    description: '4 pieces of hot & crispy broasted chicken served with golden french fries, garlic dip, bun and coleslaw.',
    image: 'src/assets/images/Fried_chicken_family_meal_product_2K_20261006234223-removebg-preview.png',
    isPopular: true,
    isSignature: true,
  },
  {
    id: 'strawberry-milkshake',
    name: 'Strawberry Milkshake',
    arabicName: 'حليب شيك فراولة',
    category: 'milkshakes',
    price: 'AED 10 / 12',
    description: 'Creamy thick shake blended with strawberry puree, whole milk, rich vanilla ice cream, and whipped cream.',
    image: 'src/assets/images/Strawberry_milkshake_product_image_2K_20261006234231-removebg-preview.png',
    isPopular: false,
  },
  {
    id: 'orange-juice',
    name: 'Fresh Orange Juice',
    arabicName: 'عصير برتقال طازج',
    category: 'juices',
    price: 'AED 10 / 12',
    description: '100% freshly squeezed sweet and tangy Valencia oranges, pressed on order. Pure refreshment.',
    image: 'src/assets/images/Orange_juice_in_glass_2K_20261006234147-removebg-preview.png',
    isPopular: false,
  },
  {
    id: 'golden-french-fries',
    name: 'French Fries',
    arabicName: 'صحن بطاطا',
    category: 'plates',
    price: 'AED 8.50 / 12.50',
    description: 'A generous portion of golden potato fries, salted to perfection. The ultimate cafeteria side snack.',
    image: 'src/assets/images/Golden_french_fries_pile_2K_20261006234252-removebg-preview.png',
    isPopular: false,
  },
];

export const AUTHENTIC_MENU_DIRECTORY: Record<string, { title: string; items: { name: string; arabic?: string; price: string; note?: string }[] }> = {
  paratha: {
    title: 'Paratha Sandwiches · براتا سندويشات',
    items: [
      { name: 'Zinger Paratha', arabic: 'زنجر براتا', price: 'AED 13.00', note: 'Best seller signature roll' },
      { name: 'Francisco Paratha', arabic: 'فرانسيسكو براتا', price: 'AED 7.00', note: 'Served with Amwaj chips' },
      { name: 'Oman Chips Paratha', arabic: 'بطاطا عمان براتا', price: 'AED 4.00', note: 'Classic Dubai favorite' },
      { name: 'Tikka Paratha', arabic: 'تكه براتا', price: 'AED 10.00', note: 'Spicy chicken tikka pieces' },
      { name: 'Hotdog Paratha', arabic: 'نقانق براتا', price: 'AED 8.00' },
      { name: 'Chicken Nashif Paratha', arabic: 'ناشف براتا دجاج', price: 'AED 6.00' },
      { name: 'Prawns Nashif Paratha', arabic: 'روبيان ناشف براتا', price: 'AED 6.00' },
      { name: 'Jumbo Prawns Paratha', arabic: 'جامبو روبيان براتا', price: 'AED 6.00' },
      { name: 'Kebab Chi./Beef Paratha', arabic: 'كباب دجاج / لحم براتا', price: 'AED 6.00' },
      { name: 'Chilli Paratha', arabic: 'شيلي براتا', price: 'AED 6.00' },
      { name: 'Cheese Honey Paratha', arabic: 'جبن عسل براتا', price: 'AED 4.00' },
      { name: 'Nutella Paratha', arabic: 'نوتيلا براتا', price: 'AED 4.00' },
      { name: 'Omelette Paratha', arabic: 'اومليت براتا', price: 'AED 5.00' },
    ],
  },
  burgers: {
    title: 'Burger Sandwiches · برجر سندويشات',
    items: [
      { name: 'Mighty Zinger Burger', arabic: 'برجر مايتي زنجر', price: 'AED 18.00', note: 'Double patty monster' },
      { name: 'Grilled Beef Burger Meal', arabic: 'برجر وجبة لحم مشوي', price: 'AED 18.00' },
      { name: 'Grilled Chicken Burger Meal', arabic: 'برجر وجبة دجاج مشوي', price: 'AED 18.00' },
      { name: 'Zinger Burger', arabic: 'برجر زنجر', price: 'AED 10.00' },
      { name: 'Khaleej Burger', arabic: 'برجر خليج', price: 'AED 12.00' },
      { name: 'Cheetos Burger', arabic: 'برجر شيتوس', price: 'AED 15.00' },
      { name: 'Grilled Burger (Chi/Beef)', arabic: 'برجر مشوي', price: 'AED 15.00' },
      { name: 'Fish Burger', arabic: 'برجر سمك', price: 'AED 11.00' },
      { name: 'Jumbo Prawns Burger', arabic: 'جمبو روبيان', price: 'AED 10.00' },
      { name: 'Chicken Tikka Burger', arabic: 'برجر دجاج تكه', price: 'AED 12.00' },
      { name: 'Chicken Lemon Burger', arabic: 'برجر دجاج ليمون', price: 'AED 10.00' },
      { name: 'Burger Chicken/Beef Regular', arabic: 'برجر دجاج / لحم', price: 'AED 7.00' },
      { name: 'Veg. Burger', arabic: 'برجر خضار', price: 'AED 8.00' },
      { name: 'Cajun Burger', arabic: 'برجر كاجون', price: 'AED 10.00' },
      { name: 'Fillet Burger', arabic: 'برجر فيليه', price: 'AED 10.00' },
    ],
  },
  wraps: {
    title: 'Wrap Sandwiches · راب سندويشات',
    items: [
      { name: 'Zinger Wrap', arabic: 'زنجر راب', price: 'AED 14.00' },
      { name: 'Twister Wrap', arabic: 'تويستر راب', price: 'AED 20.00' },
      { name: 'Mathafi Wrap', arabic: 'مطافي راب', price: 'AED 15.00' },
      { name: 'Falafel Wrap', arabic: 'فلافل راب', price: 'AED 10.00' },
      { name: 'Prawns Wrap', arabic: 'روبيان راب', price: 'AED 15.00' },
      { name: 'Nuggets Wrap', arabic: 'ناجتس راب', price: 'AED 12.00' },
      { name: 'Kabab Wrap', arabic: 'كباب راب', price: 'AED 12.00' },
      { name: 'Tikka Wrap', arabic: 'تكه راب', price: 'AED 12.00' },
      { name: 'Hotdog Wrap', arabic: 'نقانق راب', price: 'AED 12.00' },
      { name: 'Egg Wrap', arabic: 'بيض راب', price: 'AED 12.00' },
    ],
  },
  combos: {
    title: 'Combo Sandwiches · كومبو سندويشات',
    items: [
      { name: 'Crunchy & Crispy Fillet', arabic: 'كرانشي وكريسبي كومبو', price: 'AED 17.00' },
      { name: 'Zinger Combo', arabic: 'زنجر كومبو', price: 'AED 15.00' },
      { name: 'Mathafi Combo', arabic: 'مطافي كومبو', price: 'AED 18.00' },
      { name: 'Zinger Doritos Combo', arabic: 'كومبو زنجر دوريتوس', price: 'AED 15.00' },
      { name: 'Butterfly Prawns Combo', arabic: 'بترفلاي روبيان', price: 'AED 15.00' },
      { name: 'Chicken Tikka Combo', arabic: 'تكه دجاج كومبو', price: 'AED 12.00' },
      { name: 'Chicken Fillet Combo', arabic: 'دجاج فيليه كومبو', price: 'AED 12.00' },
      { name: 'Hotdog Combo', arabic: 'نقانق كومبو', price: 'AED 10.00' },
    ],
  },
  club: {
    title: 'Club Sandwiches · كلوب سندويشات',
    items: [
      { name: '24/7 Club Special', arabic: 'كلوب ٢٤/٧', price: 'AED 49.00', note: 'Huge sharing platter with fries & Cola' },
      { name: 'Family Club', arabic: 'كلوب عائلية', price: 'AED 35.00' },
      { name: 'Zinger Club', arabic: 'كلوب زنجر', price: 'AED 15.00' },
      { name: 'Emarati Club', arabic: 'كلوب إماراتي', price: 'AED 15.00' },
      { name: 'Mutton Club', arabic: 'كلوب لحم', price: 'AED 15.00' },
      { name: 'Seafood Club', arabic: 'كلوب بحرية', price: 'AED 15.00' },
      { name: 'Chicken/Beef Club', arabic: 'كلوب دجاج / لحم', price: 'AED 14.00' },
      { name: 'Mega Club', arabic: 'كلوب ميجا', price: 'AED 15.00' },
      { name: 'Lulu Club', arabic: 'كلوب لولو', price: 'AED 13.00' },
      { name: 'Veg / Egg Club', arabic: 'كلوب خضار / بيض', price: 'AED 12.00' },
    ],
  },
  shawarma: {
    title: 'Shawarma Corner · ركن الشاورما',
    items: [
      { name: 'Chicken Shawarma Normal / Spicy', arabic: 'شاورما دجاج عادي / حار', price: 'AED 7.00' },
      { name: 'Hassan Mathar Shawarma', arabic: 'حسن مطر', price: 'AED 8.00', note: 'Beloved Dubai cafeteria recipe' },
      { name: 'Arabic Shawarma Plate', arabic: 'شاورما عربي', price: 'AED 15.00' },
      { name: 'Shawarma Plate with Fries', arabic: 'صحن شاورما', price: 'AED 25.00' },
      { name: 'Shawarma Club', arabic: 'كلوب شاورما', price: 'AED 15.00' },
      { name: 'Shawarma Paratha', arabic: 'شاورما براتا', price: 'AED 7.00' },
    ],
  },
  friedChicken: {
    title: 'Broasted Fried Chicken · دجاج بروستد مقرمش',
    items: [
      { name: 'Family Meal (22 Pcs)', arabic: 'وجبة فاميلي', price: 'AED 99.00', note: '22 Pcs + Fries + Coleslaw + Garlic + Chilli + 8 Buns + 1.5L Cola' },
      { name: 'Friends Meal (12 Pcs)', arabic: 'وجبة صديق', price: 'AED 68.00', note: '12 Pcs + Fries + Coleslaw + Garlic + Chilli + 5 Buns + Cola' },
      { name: 'Dinner Meal (4 Pcs)', arabic: 'وجبة دينر', price: 'AED 25.00', note: '4 Pcs + Fries + Coleslaw + 2 Buns + Cola' },
      { name: 'Lunch Meal (3 Pcs)', arabic: 'وجبة غداء', price: 'AED 20.00', note: '3 Pcs + Fries + Coleslaw + Bun + Cola' },
      { name: 'Snack Meal (2 Pcs)', arabic: 'وجبة سناك', price: 'AED 15.00', note: '2 Pcs + Fries + Coleslaw + Bun' },
      { name: 'Happy Meal (6 Pcs)', arabic: 'وجبة سعيدة', price: 'AED 38.00', note: '6 Pcs + Fries + Coleslaw + 2 Buns + Cola' },
      { name: 'Golden Meal (8 Pcs)', arabic: 'وجبة جولدن', price: 'AED 46.00', note: '8 Pcs + Fries + Coleslaw + 3 Buns + 2 Colas' },
      { name: 'Happy Strips (6 Pcs)', arabic: 'ستريبس سعيدة', price: 'AED 29.00', note: '6 Pcs Chicken Strips + Fries + Coleslaw + 2 Buns' },
    ],
  },
  pizza: {
    title: 'Super Delicious 24/7 Pizza · بيتزا',
    items: [
      { name: 'Chicken Pizza', arabic: 'بيتزا دجاج', price: 'AED 18.00' },
      { name: 'Chicken Mushroom Pizza', arabic: 'بيتزا دجاج فطر', price: 'AED 20.00' },
      { name: 'Chicken BBQ Pizza', arabic: 'بيتزا باربيكيو دجاج', price: 'AED 20.00' },
      { name: 'Mexican Pizza', arabic: 'بيتزا مكسيكية', price: 'AED 20.00' },
      { name: 'Vegetable Pizza', arabic: 'بيتزا خضار', price: 'AED 18.00' },
      { name: 'Royal Emarath Special Box', arabic: 'رويال الإمارات', price: 'AED 20.00' },
      { name: 'Fantasia Pizza Roll Platter', arabic: 'فانتازيا', price: 'AED 16.00' },
    ],
  },
  plates: {
    title: 'Plates, Snacks & Indomie · صحون وإندومي',
    items: [
      { name: 'Indomie Mix', arabic: 'إندومي مشكل', price: 'AED 18.00', note: 'Best seller cafeteria noodles' },
      { name: 'Indomie Chicken', arabic: 'إندومي دجاج', price: 'AED 15.00' },
      { name: 'Indomie Hotdog', arabic: 'إندومي نقانق', price: 'AED 10.00' },
      { name: 'Indomie Egg', arabic: 'إندومي بيض', price: 'AED 10.00' },
      { name: 'Indomie Cheese', arabic: 'إندومي جبن', price: 'AED 10.00' },
      { name: 'Indomie Prawns', arabic: 'إندومي روبيان', price: 'AED 16.00' },
      { name: 'Chicken Popcorn', arabic: 'دجاج بوب كورن', price: 'AED 11.00 / 16.00' },
      { name: 'Chicken Nuggets Plate', arabic: 'ناجتس دجاج', price: 'AED 10.00 / 16.00' },
      { name: 'French Fries', arabic: 'صحن بطاطا', price: 'AED 8.50 / 12.50' },
      { name: 'Potato Wedges', arabic: 'بطاطا ودجز', price: 'AED 10.00 / 15.00' },
      { name: 'Onion Rings', arabic: 'حلقات بصل', price: 'AED 13.00' },
      { name: 'Kids Meal', arabic: 'وجبة الأطفال', price: 'AED 14.00' },
    ],
  },
  juices: {
    title: 'Juice Gallery & Signature Mixes · عصائر طازجة',
    items: [
      { name: '24/7 Special Juice', arabic: '٢٤/٧ خاص', price: 'AED 10.00 / 12.00', note: 'Layered house bestseller' },
      { name: 'Avocado Juice', arabic: 'أفوكادو', price: 'AED 10.00 / 12.00' },
      { name: 'Mango Juice', arabic: 'مانجو', price: 'AED 10.00 / 12.00' },
      { name: 'Strawberry Juice', arabic: 'فراولة', price: 'AED 10.00 / 12.00' },
      { name: 'Lemon Mint', arabic: 'ليمون نعناع', price: 'AED 8.00 / 10.00' },
      { name: 'Fresh Orange Juice', arabic: 'برتقال', price: 'AED 10.00 / 12.00' },
      { name: 'Pomegranate Juice', arabic: 'رمان', price: 'AED 10.00 / 12.00' },
      { name: 'Burj Al Arab Juice', arabic: 'برج العرب', price: 'AED 12.00 / 14.00' },
      { name: 'Awar Al Qalb', arabic: 'عوار القلب', price: 'AED 12.00 / 14.00' },
      { name: 'Tender Coconut Shake', arabic: 'جوز هند طري', price: 'AED 10.00 / 12.00' },
    ],
  },
  hotDrinks: {
    title: 'Samovar Chai, Coffee & Evening Snacks · شاي ووجبات خفيفة',
    items: [
      { name: 'Samovar Karak Tea', arabic: 'كرك شاي', price: 'AED 1.50 / 3.00', note: 'Taste of Kerala away from Kerala' },
      { name: 'Fresh Milk Zafran Tea', arabic: 'شاي زعفران', price: 'AED 3.00 / 5.00' },
      { name: 'Fresh Milk Tea', arabic: 'شاي حليب طازج', price: 'AED 3.00 / 5.00' },
      { name: 'Fresh Milk Nescafe', arabic: 'نسكافيه حليب طازج', price: 'AED 3.00 / 5.00' },
      { name: 'Fresh Milk Zafran', arabic: 'زعفران حليب طازج', price: 'AED 8.00' },
      { name: 'Cappuccino', arabic: 'كابتشينو', price: 'AED 10.00' },
      { name: 'Samosa (Hot Snack)', arabic: 'سمبوسة', price: 'AED 1.50 / piece' },
      { name: 'Banana Fry', arabic: 'موز مقلي', price: 'AED 2.50' },
      { name: 'Chicken Cutlet', arabic: 'كتلت دجاج', price: 'AED 3.00' },
      { name: 'Chicken Roll', arabic: 'رول دجاج', price: 'AED 3.50' },
    ],
  },
  breakfast: {
    title: 'Breakfast Combos @ 7 AED Each · وجبات الإفطار',
    items: [
      { name: '2pc Poratta & 2pc Bulls Eye Eggs', arabic: '٢ براتا و ٢ بيض عيون', price: 'AED 7.00', note: 'Start your day right!' },
      { name: '2pc Poratta & Egg Omelette', arabic: '٢ براتا و بيض أومليت', price: 'AED 7.00' },
      { name: '2pc Toast & 2pc Bulls Eye Eggs', arabic: '٢ توست و ٢ بيض عيون', price: 'AED 7.00' },
      { name: '2pc Toast & Egg Omelette', arabic: '٢ توست و بيض أومليت', price: 'AED 7.00' },
    ],
  },
};
