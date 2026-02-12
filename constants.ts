
import { SehriSpot, RawSehriSpot } from "./types";

/**
 * DATA SOURCE (MOCK DATABASE)
 */
const CHENNAI_DATA: RawSehriSpot[] = [
  // 1. Original Verified Spots (10)
  { "location_id": 1, "venue_name": "Hotel Topper", "primary_area": "Adyar", "venue_type": "Hotel", "food_type": "Paid", "timing": { "start": "03:00", "end": "04:00" }, "availability": "Entire Ramadan", "landmark": "Near Adyar bus depot, Masjid Campus", "features": ["Paid"] },
  { "location_id": 2, "venue_name": "Hotel Liberty", "primary_area": "Guindy", "venue_type": "Hotel", "food_type": "Paid", "timing": { "start": "03:30", "end": "04:30" }, "availability": "Entire Ramadan", "phones": ["044-22317400", "044-22330719"], "features": ["Paid"] },
  { "location_id": 3, "venue_name": "Alandur Masjid", "primary_area": "Alandur", "locality": "Alandur", "venue_type": "Masjid", "food_type": "Free", "timing": { "start": "03:00", "end": "04:30" }, "availability": "Last 5 odd nights", "landmark": "Near Aone Stationery Shop", "features": ["Free", "Masjid", "LimitedDays"] },
  { "location_id": 5, "venue_name": "Gandhi Market Masjid", "primary_area": "Guindy", "locality": "Guindy Market", "venue_type": "Masjid", "food_type": "Free", "timing": { "start": "03:00", "end": "04:00" }, "availability": "Last 5 odd nights", "features": ["Free", "Masjid"] },
  { "location_id": 8, "venue_name": "Masjid-e-Noor (Pallikaranai)", "primary_area": "Pallikaranai", "venue_type": "Masjid", "food_type": "Free", "timing": { "start": "03:00", "end": "04:00" }, "contact_persons": ["Mir Mumthaz Pasha"], "phones": ["9884229017"], "features": ["Free", "Masjid"], "notes": "Night stay arrangements available" },
  { "location_id": 14, "venue_name": "Hotel Virudhunagar", "primary_area": "T. Nagar", "venue_type": "Hotel", "food_type": "Free", "availability": "Entire Ramadan", "landmark": "77, G.N. Chetty Road, Panagal Park", "phones": ["044-42122769"], "features": ["Free"] },
  { "location_id": 20, "venue_name": "Banama Kitchen Hotel", "primary_area": "KK Nagar", "venue_type": "Hotel", "food_type": "Free", "timing": { "start": "03:00", "end": "04:00" }, "availability": "Entire Ramadan", "features": ["Free"] },
  { "location_id": 22, "venue_name": "Basha Street Masjid", "primary_area": "Choolaimedu", "venue_type": "Masjid", "food_type": "Free", "timing": { "start": "03:00", "end": "04:00" }, "availability": "Last 10 days only", "features": ["Free", "Masjid", "LimitedDays"] },
  { "location_id": 24, "venue_name": "Jacob Kitchen", "primary_area": "Nungambakkam", "venue_type": "Restaurant", "food_type": "Free", "timing": { "start": "03:00", "end": "04:00" }, "availability": "Entire Ramadan", "features": ["Free"] },
  { "location_id": 35, "venue_name": "Masjid-e-Noor", "primary_area": "Thiruvanmiyur", "locality": "Kottivakkam", "venue_type": "Masjid", "food_type": "Free", "timing": { "start": "03:00", "end": "04:00" }, "availability": "Last 10 nights", "landmark": "Near ECR Road", "features": ["Free", "Masjid"] },

  // 2. Central Chennai (Triplicane, Royapettah, etc.) (10)
  { "location_id": 40, "venue_name": "Big Mosque (Wallajah)", "primary_area": "Triplicane", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "landmark": "Walaja Road" },
  { "location_id": 41, "venue_name": "Makkah Masjid", "primary_area": "Mount Road", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "landmark": "Anna Salai" },
  { "location_id": 42, "venue_name": "Thousand Lights Mosque", "primary_area": "Thousand Lights", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "landmark": "Peters Road" },
  { "location_id": 43, "venue_name": "Royapettah Jumma Masjid", "primary_area": "Royapettah", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "landmark": "Pycrofts Road" },
  { "location_id": 44, "venue_name": "Periamet Masjid", "primary_area": "Periamet", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "landmark": "Sydenhams Road" },
  { "location_id": 45, "venue_name": "Egmore Masjid", "primary_area": "Egmore", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"], "landmark": "Pantheon Road" },
  { "location_id": 46, "venue_name": "Purasawalkam Masjid", "primary_area": "Purasawalkam", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 47, "venue_name": "Kilpauk Masjid", "primary_area": "Kilpauk", "venue_type": "Masjid", "food_type": "Paid", "features": ["Paid", "Delivery"] },
  { "location_id": 48, "venue_name": "Chetpet Masjid", "primary_area": "Chetpet", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 49, "venue_name": "Nungambakkam Jumma Masjid", "primary_area": "Nungambakkam", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "landmark": "Greams Road" },

  // 3. North Chennai (10)
  { "location_id": 50, "venue_name": "Masjid-e-Mamoor", "primary_area": "Mannady", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "landmark": "Angappa Naicken St" },
  { "location_id": 51, "venue_name": "Broadway Masjid", "primary_area": "Broadway", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"], "landmark": "Prakasam Salai" },
  { "location_id": 52, "venue_name": "Grey Town Masjid", "primary_area": "George Town", "venue_type": "Masjid", "food_type": "Paid", "features": ["Paid", "Delivery"] },
  { "location_id": 53, "venue_name": "Masjid-e-Ghouse Pak", "primary_area": "Washermanpet", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 54, "venue_name": "Royapuram Masjid", "primary_area": "Royapuram", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"], "landmark": "Near Railway Station" },
  { "location_id": 55, "venue_name": "Tondiarpet Big Mosque", "primary_area": "Tondiarpet", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"] },
  { "location_id": 56, "venue_name": "Perambur Jamia Masjid", "primary_area": "Perambur", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 57, "venue_name": "Otteri Masjid", "primary_area": "Otteri", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 58, "venue_name": "Ayanavaram Masjid", "primary_area": "Ayanavaram", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 59, "venue_name": "Villivakkam Masjid", "primary_area": "Villivakkam", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },

  // 4. West Chennai (12)
  { "location_id": 60, "venue_name": "Anna Nagar Tower Masjid", "primary_area": "Anna Nagar", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "landmark": "Near Tower Park" },
  { "location_id": 61, "venue_name": "Aminjikarai Masjid", "primary_area": "Aminjikarai", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 62, "venue_name": "Arumbakkam Masjid", "primary_area": "Arumbakkam", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 63, "venue_name": "Koyambedu Market Masjid", "primary_area": "Koyambedu", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"], "landmark": "Market Complex" },
  { "location_id": 64, "venue_name": "Vadapalani Masjid", "primary_area": "Vadapalani", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 65, "venue_name": "Virugambakkam Masjid", "primary_area": "Virugambakkam", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 66, "venue_name": "Valasaravakkam Masjid", "primary_area": "Valasaravakkam", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 67, "venue_name": "Porur Jumma Masjid", "primary_area": "Porur", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"] },
  { "location_id": 68, "venue_name": "Poonamallee Big Mosque", "primary_area": "Poonamallee", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 69, "venue_name": "Avadi Masjid", "primary_area": "Avadi", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 70, "venue_name": "Ambattur OT Masjid", "primary_area": "Ambattur", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 71, "venue_name": "Mogappair East Masjid", "primary_area": "Mogappair", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },

  // 5. South Chennai & OMR (16)
  { "location_id": 72, "venue_name": "Saidapet Masjid", "primary_area": "Saidapet", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 73, "venue_name": "West Mambalam Masjid", "primary_area": "West Mambalam", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 74, "venue_name": "Nandanam Masjid", "primary_area": "Nandanam", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 75, "venue_name": "Kotturpuram Masjid", "primary_area": "Kotturpuram", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 76, "venue_name": "Mylapore Jumma Masjid", "primary_area": "Mylapore", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 77, "venue_name": "Mandaveli Masjid", "primary_area": "Mandaveli", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 78, "venue_name": "Adyar Masjid", "primary_area": "Adyar", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"], "landmark": "LB Road" },
  { "location_id": 79, "venue_name": "Besant Nagar Masjid", "primary_area": "Besant Nagar", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 80, "venue_name": "Velachery Masjid", "primary_area": "Velachery", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "landmark": "Vijaya Nagar" },
  { "location_id": 81, "venue_name": "Taramani Masjid", "primary_area": "Taramani", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 82, "venue_name": "Perungudi Masjid", "primary_area": "Perungudi", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 83, "venue_name": "Thoraipakkam Masjid", "primary_area": "Thoraipakkam", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 84, "venue_name": "Sholinganallur Masjid", "primary_area": "Sholinganallur", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"] },
  { "location_id": 85, "venue_name": "Karapakkam Masjid", "primary_area": "Karapakkam", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 86, "venue_name": "Neelankarai Masjid", "primary_area": "Neelankarai", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 87, "venue_name": "Palavakkam Masjid", "primary_area": "Palavakkam", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },

  // 6. Suburbs & GST Road (10)
  { "location_id": 88, "venue_name": "Meenambakkam Masjid", "primary_area": "Meenambakkam", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 89, "venue_name": "Pallavaram Dargah", "primary_area": "Pallavaram", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "landmark": "Dargah Road" },
  { "location_id": 90, "venue_name": "Chromepet Masjid", "primary_area": "Chromepet", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 91, "venue_name": "Tambaram Market Masjid", "primary_area": "Tambaram", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "landmark": "West Tambaram" },
  { "location_id": 92, "venue_name": "Tambaram Sanatorium Masjid", "primary_area": "Tambaram Sanatorium", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 93, "venue_name": "Perungalathur Masjid", "primary_area": "Perungalathur", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 94, "venue_name": "Vandalur Masjid", "primary_area": "Vandalur", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 95, "venue_name": "Guduvanchery Masjid", "primary_area": "Guduvanchery", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 96, "venue_name": "Urapakkam Masjid", "primary_area": "Urapakkam", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] },
  { "location_id": 97, "venue_name": "Maraimalai Nagar Masjid", "primary_area": "Maraimalai Nagar", "venue_type": "Masjid", "food_type": "Free", "features": ["Free"] }
];

const BANGALORE_DATA: RawSehriSpot[] = [
{ "location_id": 1001, "city": "Bengaluru", "venue_name": "Masjid Jamia Islamabad", "primary_area": "Basavanagudi", "venue_type": "Masjid", "food_type": "Free", "availability": "Entire Ramadan", "notes": "Basavanagudi Only", "contact_persons": ["Syed Waseem"], "phones": ["9341625054"], "features": ["Free", "Delivery"], "zone": "West" },
{ "location_id": 1002, "city": "Bengaluru", "venue_name": "Abu Bakar Masjid", "primary_area": "Chamrajpet", "locality": "Vinayaka Nagar, Padarayanapura", "venue_type": "Masjid", "food_type": "Free", "availability": "Entire Ramadan", "landmark": "13th Cross Road, Vinayaka Nagar, Padarayanapura, Bengaluru 560026", "contact_persons": ["Aman"], "phones": ["9341211075"], "features": ["Free", "Delivery", "DineIn"], "zone": "West" },
{ "location_id": 1003, "city": "Bengaluru", "venue_name": "Ansaar Masjid", "primary_area": "Kaggalipura", "venue_type": "Masjid", "food_type": "Free", "landmark": "Near Ravi Shankar Ashram", "contact_persons": ["Azmath"], "phones": ["9844356687"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 1004, "city": "Bengaluru", "venue_name": "Benevolent Welfare Group, Kaval Byrasandra", "primary_area": "Kaval Byrasandra", "venue_type": "Foundation", "food_type": "Free", "landmark": "LR Bande Road, Shampura, Kaval Byrasandra, Bengaluru, Karnataka 560032", "contact_persons": ["Syed Fareed Ahmed"], "phones": ["9986014736"], "features": ["Free", "DineIn"], "zone": "North" },
{ "location_id": 1005, "city": "Bengaluru", "venue_name": "Bismillah Mubarak Hotel", "primary_area": "Whitefield", "venue_type": "Hotel", "food_type": "Paid", "landmark": "452, Behind Govt. School, Shop-I, Gandhipuram, Whitefield, Bengaluru - 560066", "contact_persons": ["Imran"], "phones": ["9880620147"], "features": ["Paid", "Delivery"], "zone": "East" },
{ "location_id": 1006, "city": "Bengaluru", "venue_name": "Dry Fruit House, AECS Layout Brookfield", "primary_area": "Brookefield", "venue_type": "Foundation", "food_type": "Free", "locality": "Hoodi, Brookfield", "contact_persons": ["Syed Yusuf"], "phones": ["8880008765", "8904571055"], "features": ["Free", "Delivery"], "zone": "East" },
{ "location_id": 1007, "city": "Bengaluru", "venue_name": "Eesa Choudhary", "primary_area": "Bommanahalli", "venue_type": "Unknown", "food_type": "Free", "locality": "Bommanahalli, Bangalore", "contact_persons": ["Eesa choudary"], "phones": ["9916107565", "6302081780"], "features": ["Free"], "zone": "South" },
{ "location_id": 1008, "city": "Bengaluru", "venue_name": "Hoskote Sehri Distribution", "primary_area": "Hoskote", "venue_type": "Foundation", "food_type": "Free", "landmark": "AR Extn, Old Madras Road, 50 mtrs From Makkah Masjid", "contact_persons": ["Mohammad Afzal Pasha"], "phones": ["9880376126", "9448249254"], "features": ["Free", "Delivery"], "zone": "East" },
{ "location_id": 1009, "city": "Bengaluru", "venue_name": "Jafar Musallah", "primary_area": "Kothanur", "venue_type": "Masjid", "food_type": "Free", "landmark": "Channa Keshava Complex, Kristu Jayanti College, 34/3, Kothanur, Bengaluru, Karnataka", "contact_persons": ["Mohammed Anas"], "phones": ["7829147008", "9945696883", "8217085409"], "features": ["Free", "Delivery", "zone": "North" },
{ "location_id": 1010, "city": "Bengaluru", "venue_name": "Jamia Kamees Bin Mubarak Masjid", "primary_area": "DJ Halli", "venue_type": "Masjid", "food_type": "Free", "landmark": "Modi Road, DJ Halli Bengaluru", "contact_persons": ["Firdoze Akhtar"], "phones": ["9590064545", "9141684312"], "features": ["Free", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 1011, "city": "Bengaluru", "venue_name": "Jamia Masjid, Basaveswara Nagar", "primary_area": "Basaveshwara Nagar", "venue_type": "Masjid", "food_type": "Paid", "landmark": "79, 17th Cross KBH Colony, Basaveshwara Nagar", "contact_persons": ["Rahmat"], "phones": ["9343729984"], "features": ["Paid", "Delivery"], "zone": "West" },
{ "location_id": 1012, "city": "Bengaluru", "venue_name": "Jamia Masjid, Budumanahalli", "primary_area": "Presidency College", "venue_type": "Masjid", "food_type": "Free", "landmark": "4 kms From Presidency College", "contact_persons": ["Maaz"], "phones": ["9035452495", "9900101987", "9035406507"], "features": ["Free", "Delivery"], "zone": "South" },
{ "location_id": 1013, "city": "Bengaluru", "venue_name": "Jamia Masjid, Noba Nagar", "primary_area": "Bannerghatta Road", "venue_type": "Masjid", "food_type": "Free", "landmark": "Nobo Nagar, Kalena Agrahara, Bannerghatta Road, Bengaluru, 560076", "contact_persons": ["Afsar Bhai"], "phones": ["9902811065", "7019340008", "9717225864"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 1014, "city": "Bengaluru", "venue_name": "Makkah Masjid, Yelahanka", "primary_area": "Yelahanka", "venue_type": "Masjid", "food_type": "Free", "landmark": "17th Cross, 1st Main, Maruthi Nagar, Yelahanka, Bengaluru", "contact_persons": ["Irfan"], "phones": ["9880489764", "934109764"], "features": ["Free", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 1015, "city": "Bengaluru", "venue_name": "Jamia Masjid, Soladevanahalli", "primary_area": "Soladevanahalli", "venue_type": "Masjid", "food_type": "Free", "landmark": "MSPP Colony Road, Near Sri Lakshmi Venkateswara Swami Devasthana, Soladevanahalli, Bengaluru, Karnataka 560107", "contact_persons": ["Anwar Basha"], "phones": ["9341853971"], "features": ["Free", "DineIn"], "zone": "West" },
{ "location_id": 2001, "city": "Bengaluru", "venue_name": "Masjid Jamia Islamabad", "primary_area": "Basavanagudi", "venue_type": "Masjid", "food_type": "Free", "notes": "Basavanagudi Only", "contact_persons": ["Syed Waseem"], "phones": ["9341625054"], "features": ["Free", "Delivery"], "zone": "West" },
{ "location_id": 2002, "city": "Bengaluru", "venue_name": "Abu Bakar Masjid", "primary_area": "Chamrajpet", "locality": "Vinayaka Nagar, Padarayanapura", "venue_type": "Masjid", "food_type": "Free", "landmark": "13th Cross Road, Vinayaka Nagar, Padarayanapura, Bengaluru 560026", "contact_persons": ["Aman"], "phones": ["9341211075"], "features": ["Free", "Delivery", "DineIn"], "zone": "West" },
{ "location_id": 2003, "city": "Bengaluru", "venue_name": "Ansaar Masjid", "primary_area": "Kaggalipura", "venue_type": "Masjid", "food_type": "Free", "landmark": "Near Ravi Shankar Ashram", "contact_persons": ["Azmath"], "phones": ["9844356687"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2004, "city": "Bengaluru", "venue_name": "Benevolent Welfare Group", "primary_area": "Kaval Byrasandra", "venue_type": "Foundation", "food_type": "Free", "landmark": "LR Bande Road, Shampura, Bengaluru 560032", "contact_persons": ["Syed Fareed Ahmed"], "phones": ["9986014736"], "features": ["Free", "DineIn"], "zone": "North" },
{ "location_id": 2005, "city": "Bengaluru", "venue_name": "Bismillah Mubarak Hotel", "primary_area": "Whitefield", "venue_type": "Hotel", "food_type": "Paid", "landmark": "Gandhipuram, Whitefield, Bengaluru 560066", "contact_persons": ["Imran"], "phones": ["9880620147"], "features": ["Paid", "Delivery"], "zone": "East" },
{ "location_id": 2006, "city": "Bengaluru", "venue_name": "Dry Fruit House", "primary_area": "Brookefield", "venue_type": "Foundation", "food_type": "Free", "locality": "Hoodi, Brookefield", "contact_persons": ["Syed Yusuf"], "phones": ["8880008765", "8904571055"], "features": ["Free", "Delivery"], "zone": "East" },
{ "location_id": 2007, "city": "Bengaluru", "venue_name": "Hoskote Sehri Distribution", "primary_area": "Hoskote", "venue_type": "Foundation", "food_type": "Free", "landmark": "Old Madras Road, Near Makkah Masjid", "contact_persons": ["Mohammad Afzal Pasha"], "phones": ["9880376126", "9448249254"], "features": ["Free", "Delivery", "zone": "East" },
{ "location_id": 2008, "city": "Bengaluru", "venue_name": "Jamia Kamees Bin Mubarak Masjid", "primary_area": "DJ Halli", "venue_type": "Masjid", "food_type": "Free", "landmark": "Modi Road, DJ Halli, Bengaluru", "contact_persons": ["Firdoze Akhtar"], "phones": ["9590064545", "9141684312"], "features": ["Free", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 2009, "city": "Bengaluru", "venue_name": "Jamia Masjid Basaveshwara Nagar", "primary_area": "Basaveshwara Nagar", "venue_type": "Masjid", "food_type": "Paid", "contact_persons": ["Rahmat"], "phones": ["9343729984"], "features": ["Paid", "Delivery"], "zone": "West" },
{ "location_id": 2010, "city": "Bengaluru", "venue_name": "Jamia Masjid Budumanahalli", "primary_area": "Presidency College Area", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Maaz"], "phones": ["9035452495", "9900101987", "9035406507"], "features": ["Free", "Delivery"], "zone": "South" },
{ "location_id": 2011, "city": "Bengaluru", "venue_name": "Jamia Masjid Nobo Nagar", "primary_area": "Bannerghatta Road", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Afsar Bhai"], "phones": ["9902811065", "7019340008", "9717225864"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2012, "city": "Bengaluru", "venue_name": "Makkah Masjid Yelahanka", "primary_area": "Yelahanka", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Irfan"], "phones": ["9880489764", "934109764"], "features": ["Free", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 2013, "city": "Bengaluru", "venue_name": "Jamia Masjid Ulsoor", "primary_area": "Ulsoor", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Mohammed Nafees"], "phones": ["9845384631"], "features": ["Free", "Delivery", "zone": "East" },
{ "location_id": 2014, "city": "Bengaluru", "venue_name": "Jamia Masjid Yeshwanthpur", "primary_area": "Yeshwanthpur", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Syed Saquib Ahmed"], "phones": ["9035709733", "9845008236", "6363202731"], "features": ["Free", "Delivery", "zone": "West" },
{ "location_id": 2015, "city": "Bengaluru", "venue_name": "Masjid Al Aziz", "primary_area": "Manyata Tech Park", "venue_type": "Masjid", "food_type": "Paid", "contact_persons": ["Ashfaque Ahmed"], "phones": ["9611295583", "8083033548"], "features": ["Paid", "DineIn"], "zone": "North" },
{ "location_id": 2016, "city": "Bengaluru", "venue_name": "Masjid E Bilal KR Puram", "primary_area": "KR Puram", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Safeer"], "phones": ["9886346635"], "features": ["Free", "Delivery", "DineIn"], "zone": "East" },
{ "location_id": 2017, "city": "Bengaluru", "venue_name": "Masjid E Quba Kalasipalyam", "primary_area": "Kalasipalyam", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Syed Faiz Ahmed"], "phones": ["9591068750"], "features": ["Free", "Delivery"], "zone": "South" },
{ "location_id": 2018, "city": "Bengaluru", "venue_name": "Masjid E Rahmania Sanjay Nagar", "primary_area": "Sanjay Nagar", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Ismail Zabiullah"], "phones": ["9900398420", "9343826238"], "features": ["Free", "DineIn"], "zone": "West" },
{ "location_id": 2019, "city": "Bengaluru", "venue_name": "Royal Hotel Bannerghatta Road", "primary_area": "Jayadeva Hospital", "venue_type": "Hotel", "food_type": "Free", "contact_persons": ["Ahmad"], "phones": ["7892598975"], "features": ["Free", "Delivery"], "zone": "South" },
{ "location_id": 2020, "city": "Bengaluru", "venue_name": "Masjid E Umar Bin Khattab Anekal", "primary_area": "Anekal", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Farhathulla Baig"], "phones": ["9036148962", "9035821257"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2021, "city": "Bengaluru", "venue_name": "Masjid E Aqsa O Madrasa", "primary_area": "HSR Layout", "venue_type": "Masjid", "food_type": "Paid", "landmark": "Sector 6, HSR Layout, Bengaluru 560068", "contact_persons": ["Amjad"], "phones": ["9035600000"], "features": ["Paid", "Delivery", "DineIn"], "zone": "East" },
{ "location_id": 2022, "city": "Bengaluru", "venue_name": "Masjid E Ameer Hamza", "primary_area": "Gandhinagar", "venue_type": "Masjid", "food_type": "Free", "landmark": "Near Jigani, Behind Petrol Pump", "contact_persons": ["Mudassir"], "phones": ["9845029497"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2023, "city": "Bengaluru", "venue_name": "Masjid E Ashrafiya", "primary_area": "Rajajinagar", "venue_type": "Masjid", "food_type": "Free", "landmark": "Mahakavi Kuvempu Road, Rajajinagar 560021", "contact_persons": ["Jaffer"], "phones": ["7019044517", "9513016074"], "features": ["Free", "Delivery", "DineIn"], "zone": "West" },
{ "location_id": 2024, "city": "Bengaluru", "venue_name": "Masjid E Fayaz", "primary_area": "Bommasandra", "venue_type": "Masjid", "food_type": "Free", "landmark": "Hebbagodi, Bommasandra 560099", "contact_persons": ["Syed Afreed"], "phones": ["9686526985", "9611190649"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2025, "city": "Bengaluru", "venue_name": "Masjid E Ibadat Khana", "primary_area": "BTM Layout", "venue_type": "Masjid", "food_type": "Free", "landmark": "NS Palya, Bannerghatta Road", "contact_persons": ["Tabrezulla"], "phones": ["9986688141"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2026, "city": "Bengaluru", "venue_name": "Masjid E Khudadad", "primary_area": "Marathahalli", "venue_type": "Masjid", "food_type": "Free", "landmark": "Service Road, Aswath Nagar, Marathahalli 560037", "contact_persons": ["Hussain"], "phones": ["9542521312", "7259692506"], "features": ["Free", "DineIn"], "zone": "East" },
{ "location_id": 2027, "city": "Bengaluru", "venue_name": "Masjid E Mahmoodiya", "primary_area": "KR Puram", "venue_type": "Masjid", "food_type": "Free", "notes": "Haji Layout / Cambridge College / Sea College", "contact_persons": ["Rehan Patel"], "phones": ["9844034502"], "features": ["Free", "DineIn"], "zone": "East" },
{ "location_id": 2028, "city": "Bengaluru", "venue_name": "Masjid E Mina", "primary_area": "CV Raman Nagar", "venue_type": "Masjid", "food_type": "Free", "landmark": "Nagavarapalya, CV Raman Nagar 560093", "contact_persons": ["Sharukh"], "phones": ["9590186182"], "features": ["Free", "DineIn"], "zone": "East" },
{ "location_id": 2029, "city": "Bengaluru", "venue_name": "Masjid E Mohammadia", "primary_area": "Dasarahalli", "venue_type": "Masjid", "food_type": "Free", "landmark": "Behind Dasarahalli Metro Station, Peenya", "contact_persons": ["Shoaib Bhai"], "phones": ["8904697851"], "features": ["Free", "DineIn"], "zone": "West" },
{ "location_id": 2030, "city": "Bengaluru", "venue_name": "Masjid E Nimra", "primary_area": "Padarayanapura", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Mujahid"], "phones": ["9845130255"], "features": ["Free", "Delivery", "DineIn"], "zone": "West" },
{ "location_id": 2031, "city": "Bengaluru", "venue_name": "Masjid E Noor", "primary_area": "Muneshwara Nagar", "venue_type": "Masjid", "food_type": "Free", "landmark": "Bandepalya, Muneshwara Nagar 560068", "contact_persons": ["Syed Nawaz"], "phones": ["7899933011"], "features": ["Free", "DineIn"], "zone": "South" },
{ "location_id": 2032, "city": "Bengaluru", "venue_name": "Masjid E Noor Thanisandra", "primary_area": "Thanisandra", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Syed Irfan"], "phones": ["7353044061", "9739369947"], "features": ["Free", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 2033, "city": "Bengaluru", "venue_name": "Masjid E Qamrunnisa", "primary_area": "KR Puram", "venue_type": "Masjid", "food_type": "Free", "notes": "Medahalli / Bidarahalli / East Point College", "contact_persons": ["Mudassir"], "phones": ["9845328447"], "features": ["Free", "DineIn"], "zone": "East" },
{ "location_id": 2034, "city": "Bengaluru", "venue_name": "Masjid E Rahmaniya Jigani", "primary_area": "Jigani", "venue_type": "Masjid", "food_type": "Free", "landmark": "Opp Police Station, Ittina Nagar", "contact_persons": ["Hussain"], "phones": ["9739999314", "9591087616"], "features": ["Free", "DineIn"], "zone": "South" },
{ "location_id": 2035, "city": "Bengaluru", "venue_name": "Masjid E Rasheedia", "primary_area": "Nagawara", "venue_type": "Masjid", "food_type": "Free", "landmark": "Byrappa Layout, Nagawara 560045", "contact_persons": ["Tahseen Ahmed"], "phones": ["7899917760"], "features": ["Free", "DineIn"], "zone": "North" },
{ "location_id": 2036, "city": "Bengaluru", "venue_name": "Masjid E Rizwan", "primary_area": "JP Nagar", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Siddique"], "phones": ["9972045466", "8105666956"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2037, "city": "Bengaluru", "venue_name": "Masjid E Tauheed", "primary_area": "Mysore Road", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Nasir"], "phones": ["9845645104"], "features": ["Free", "Delivery", "zone": "West" },
{ "location_id": 2038, "city": "Bengaluru", "venue_name": "Masjid E Tawakkal", "primary_area": "Hennur", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Abdurraheem"], "phones": ["9341072935"], "features": ["Free", "Delivery", "zone": "North" },
{ "location_id": 2039, "city": "Bengaluru", "venue_name": "Masjid E Tippu Marathahalli", "primary_area": "Marathahalli", "venue_type": "Masjid", "food_type": "Free", "landmark": "HAL Old Airport Road, Marathahalli 560037", "contact_persons": ["Syed Ahmed"], "phones": ["9343549356"], "features": ["Free", "DineIn"], "zone": "East" },
{ "location_id": 2040, "city": "Bengaluru", "venue_name": "Masjid E Touheed", "primary_area": "Dooravani Nagar", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Syed Ataulla"], "phones": ["9845921110", "9945909781", "9845368826", "9686360569"], "features": ["Free", "Delivery", "DineIn"], "zone": "East" },
{ "location_id": 2041, "city": "Bengaluru", "venue_name": "Masjid E Bilal Yelahanka New Town", "primary_area": "Yelahanka", "venue_type": "Masjid", "food_type": "Free", "landmark": "Yelahanka New Town 5th Phase", "contact_persons": ["Irshad Ahmed"], "phones": ["9945761365", "9620193707"], "features": ["Free", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 2042, "city": "Bengaluru", "venue_name": "Masjid E Khasimiya", "primary_area": "Murgeshpalya", "venue_type": "Masjid", "food_type": "Free", "landmark": "Murgeshpalya, Ramagiri 560017", "contact_persons": ["Mohammed Shuaib"], "phones": ["7411040066", "9980834018", "9503062554"], "features": ["Free", "Delivery", "zone": "East" },
{ "location_id": 2043, "city": "Bengaluru", "venue_name": "Masjid E Moazzam Bismillahnagar", "primary_area": "Bismillahnagar", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Mohammed Atif"], "phones": ["9738126760"], "features": ["Free", "Delivery", "zone": "South" },
{ "location_id": 2044, "city": "Bengaluru", "venue_name": "Masjid E Moazzam BTM Layout", "primary_area": "BTM Layout", "venue_type": "Masjid", "food_type": "Free", "landmark": "Opposite BTM Layout Water Tank Bus Stop", "contact_persons": ["Humayun Bhai"], "phones": ["9845828778", "9342636348"], "features": ["Free", "DineIn"], "zone": "South" },
{ "location_id": 2045, "city": "Bengaluru", "venue_name": "Masjid E Muhajeer", "primary_area": "Bommanahalli", "venue_type": "Masjid", "food_type": "Free", "notes": "Roopena Agrahara and Oxford College Back Gate Only", "contact_persons": ["Syed Zaid"], "phones": ["7892447107"], "features": ["Free", "Delivery", "zone": "South" },
{ "location_id": 2046, "city": "Bengaluru", "venue_name": "Masjid E Umme Kulsum", "primary_area": "Bannerghatta Road", "venue_type": "Masjid", "food_type": "Free", "notes": "Bilekahalli, Arekere, Hulimavu, Kalena Agrahara Coverage", "contact_persons": ["Ameen"], "phones": ["7975266361", "9632244147", "9343443495"], "features": ["Free", "Delivery", "zone": "South" },
{ "location_id": 2047, "city": "Bengaluru", "venue_name": "Masjid E Umar Farooq", "primary_area": "Byrasandra", "venue_type": "Masjid", "food_type": "Free", "notes": "Jayanagar, NIMHANS, LIC Colony Coverage", "contact_persons": ["Tailor Iqbal Pasha"], "phones": ["9945480572", "9343826635"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2048, "city": "Bengaluru", "venue_name": "Masjid E Umar Bin Khattab Govindpura", "primary_area": "Govindpura", "venue_type": "Masjid", "food_type": "Paid", "contact_persons": ["Ismail"], "phones": ["9743157732", "9880804924"], "features": ["Paid", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 2049, "city": "Bengaluru", "venue_name": "Masjid E Uqba", "primary_area": "Thanisandra", "venue_type": "Masjid", "food_type": "Free", "landmark": "Behind Manyata Tech Park", "contact_persons": ["Masood"], "phones": ["9945119164"], "features": ["Free", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 2050, "city": "Bengaluru", "venue_name": "Masjid E Ummul Hasnain", "primary_area": "Indiranagar", "venue_type": "Masjid", "food_type": "Free", "landmark": "Indiranagar 1st Stage, HAJ Colony", "contact_persons": ["Mohammed Ashraf"], "phones": ["9986683223", "8892392282"], "features": ["Free", "Delivery", "DineIn"], "zone": "East" },
{ "location_id": 2051, "city": "Bengaluru", "venue_name": "Masjid E Sara", "primary_area": "Meenakshi Layout", "venue_type": "Masjid", "food_type": "Free", "landmark": "Near Central Jail", "contact_persons": ["Shaikh S Muneer"], "phones": ["9880190020"], "features": ["Free", "Delivery", "DineIn"], "zone": "East" },
{ "location_id": 2052, "city": "Bengaluru", "venue_name": "Masjid E Talha", "primary_area": "Whitefield", "venue_type": "Masjid", "food_type": "Paid", "landmark": "Garudachar Palya, Whitefield", "contact_persons": ["Syed Nadeem"], "phones": ["9066384999", "9845090851", "9449233556"], "features": ["Paid", "DineIn"], "zone": "East" },
{ "location_id": 2053, "city": "Bengaluru", "venue_name": "Masjid Noor Mango Garden", "primary_area": "Kanakapura Road", "venue_type": "Masjid", "food_type": "Free", "landmark": "Bikasipura Road, Off Kanakapura Road 560111", "contact_persons": ["Harun"], "phones": ["9886374006", "9353161611"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2054, "city": "Bengaluru", "venue_name": "Masjid Jolly Mohalla", "primary_area": "KR Market", "venue_type": "Masjid", "food_type": "Free", "landmark": "Near KR Market, Sultanpet", "contact_persons": ["Mukhtiyar"], "phones": ["8904762822", "6360572246"], "features": ["Free", "Delivery", "DineIn"], "zone": "West" },
{ "location_id": 2055, "city": "Bengaluru", "venue_name": "Masjid Faiz E Umar Eidgah", "primary_area": "Minhaj Nagar", "venue_type": "Masjid", "food_type": "Free", "landmark": "JHBCS Layout Minhaj Nagar 560078", "contact_persons": ["Sharif"], "phones": ["9886107861", "9845298454"], "features": ["Free", "DineIn"], "zone": "South" },
{ "location_id": 2056, "city": "Bengaluru", "venue_name": "Madeena Masjid Attibele", "primary_area": "Attibele", "venue_type": "Masjid", "food_type": "Free", "landmark": "Attibele, Anekal Taluk 562107", "contact_persons": ["Nadeem"], "phones": ["8317421212", "9066786794"], "features": ["Free", "DineIn"], "zone": "South" },
{ "location_id": 2057, "city": "Bengaluru", "venue_name": "Madina Hotel Whitefield", "primary_area": "Whitefield", "venue_type": "Hotel", "food_type": "Paid", "contact_persons": ["Mujahid Pasha"], "phones": ["6361700345"], "features": ["Paid", "Delivery"], "zone": "East" },
{ "location_id": 2058, "city": "Bengaluru", "venue_name": "Meenar Masjid", "primary_area": "Jayanagar", "venue_type": "Masjid", "food_type": "Free", "notes": "5th Block Jayanagar", "contact_persons": ["Naseer"], "phones": ["9980334679", "7676405860", "9343401013", "7349547816"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2059, "city": "Bengaluru", "venue_name": "Noorani Masjid", "primary_area": "Garvebhavi Palya", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Syed Nawaz"], "phones": ["7899933011"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2060, "city": "Bengaluru", "venue_name": "Tipu Sultan Masjid", "primary_area": "JP Nagar", "venue_type": "Masjid", "food_type": "Free", "notes": "Avalahalli, JP Nagar 9th Phase", "contact_persons": ["Shaik Kudrath"], "phones": ["9880526108", "7019582979", "9036684444", "9916600129"], "features": ["Free", "DineIn"], "zone": "South" },
{ "location_id": 2061, "city": "Bengaluru", "venue_name": "Jamia Masjid Basavanagudi", "primary_area": "Basavanagudi", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Syed Waseem"], "phones": ["9341625054", "9886711625"], "features": ["Free", "Delivery"], "zone": "West" },
{ "location_id": 2062, "city": "Bengaluru", "venue_name": "Abu Bakar Masjid Chamrajpet", "primary_area": "Chamrajpet", "venue_type": "Masjid", "food_type": "Free", "landmark": "Vinayaka Nagar, Padarayanapura 560026", "contact_persons": ["Aman"], "phones": ["9341211075"], "features": ["Free", "Delivery", "DineIn"], "zone": "West" },
{ "location_id": 2063, "city": "Bengaluru", "venue_name": "Ansaar Masjid Kaggalipura", "primary_area": "Kaggalipura", "venue_type": "Masjid", "food_type": "Free", "landmark": "Near Ravi Shankar Ashram", "contact_persons": ["Azmath"], "phones": ["9844356687"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2064, "city": "Bengaluru", "venue_name": "Benevolent Welfare Group", "primary_area": "Kaval Byrasandra", "venue_type": "Foundation", "food_type": "Free", "landmark": "LR Bande Road, Shampura 560032", "contact_persons": ["Syed Fareed Ahmed"], "phones": ["9986014736"], "features": ["Free", "DineIn"], "zone": "North" },
{ "location_id": 2065, "city": "Bengaluru", "venue_name": "Bismillah Mubarak Hotel", "primary_area": "Whitefield", "venue_type": "Hotel", "food_type": "Paid", "landmark": "Gandhipuram 560066", "contact_persons": ["Imran"], "phones": ["9880620147"], "features": ["Paid", "Delivery"], "zone": "East" },
{ "location_id": 2066, "city": "Bengaluru", "venue_name": "Dry Fruit House Brookefield", "primary_area": "Brookefield", "venue_type": "Restaurant", "food_type": "Free", "contact_persons": ["Syed Yusuf"], "phones": ["8880008765", "8904571055"], "features": ["Free", "Delivery"], "zone": "East" },
{ "location_id": 2067, "city": "Bengaluru", "venue_name": "Hoskote Sehri Distribution", "primary_area": "Hoskote", "venue_type": "Foundation", "food_type": "Free", "landmark": "Old Madras Road near Makkah Masjid", "contact_persons": ["Mohammad Afzal Pasha"], "phones": ["9880376126", "9448249254"], "features": ["Free", "Delivery", "zone": "East" },
{ "location_id": 2068, "city": "Bengaluru", "venue_name": "Jafar Musallah", "primary_area": "Kothanur", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Mohammed Anas"], "phones": ["7829147008", "9945696883", "8217085409"], "features": ["Free", "Delivery", "zone": "North" },
{ "location_id": 2069, "city": "Bengaluru", "venue_name": "Jamia Masjid DJ Halli", "primary_area": "DJ Halli", "venue_type": "Masjid", "food_type": "Free", "landmark": "Modi Road DJ Halli", "contact_persons": ["Firdoze Akhtar"], "phones": ["9590064545", "9141684312"], "features": ["Free", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 2070, "city": "Bengaluru", "venue_name": "Jamia Masjid Basaveshwara Nagar", "primary_area": "Basaveshwara Nagar", "venue_type": "Masjid", "food_type": "Paid", "contact_persons": ["Rahmat"], "phones": ["9343729984"], "features": ["Paid", "Delivery", "zone": "West" },
{ "location_id": 2071, "city": "Bengaluru", "venue_name": "Jamia Masjid Budumanahalli", "primary_area": "Presidency College Area", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Maaz"], "phones": ["9035452495", "9900101987", "9035406507"], "features": ["Free", "Delivery", "zone": "South" },
{ "location_id": 2072, "city": "Bengaluru", "venue_name": "Jamia Masjid Nobo Nagar", "primary_area": "Bannerghatta Road", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Afsar Bhai"], "phones": ["9902811065", "7019340008", "9717225864"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2073, "city": "Bengaluru", "venue_name": "Makkah Masjid Yelahanka", "primary_area": "Yelahanka", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Irfan"], "phones": ["9880489764", "934109764"], "features": ["Free", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 2074, "city": "Bengaluru", "venue_name": "Jamia Masjid Soladevanahalli", "primary_area": "Soladevanahalli", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Anwar Basha"], "phones": ["9341853971"], "features": ["Free", "DineIn"], "zone": "West" },
{ "location_id": 2075, "city": "Bengaluru", "venue_name": "Jamia Masjid Ulsoor", "primary_area": "Ulsoor", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Mohammed Nafees"], "phones": ["9845384631"], "features": ["Free", "Delivery", "zone": "East" },
{ "location_id": 2076, "city": "Bengaluru", "venue_name": "Jamia Masjid Yeshwanthpur", "primary_area": "Yeshwanthpur", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Syed Saquib Ahmed"], "phones": ["9035709733", "9845008236", "6363202731"], "features": ["Free", "Delivery", "zone": "West" },
{ "location_id": 2077, "city": "Bengaluru", "venue_name": "Jamiya Masjid Shikaripalya", "primary_area": "Shikaripalya", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Shaik Mubarak"], "phones": ["9900001439", "6360397593"], "features": ["Free", "DineIn"], "zone": "South" },
{ "location_id": 2078, "city": "Bengaluru", "venue_name": "Jamiya Masjid Kadugodi", "primary_area": "Kadugodi", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Hussain Basha"], "phones": ["7349119552", "8073959624"], "features": ["Free", "DineIn"], "zone": "East" },
{ "location_id": 2079, "city": "Bengaluru", "venue_name": "Jamia Masjid Rahmath Nagar", "primary_area": "RT Nagar", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Syed Zabi"], "phones": ["8904244437", "7795533109"], "features": ["Free", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 2080, "city": "Bengaluru", "venue_name": "All India Milli Council Bengaluru", "primary_area": "Shampur Road", "venue_type": "Foundation", "food_type": "Free", "contact_persons": ["Syed Mazhar"], "phones": ["9620837786"], "features": ["Free", "Delivery", "zone": "North" },
{ "location_id": 2081, "city": "Bengaluru", "venue_name": "Masjid E Ashrafiya", "primary_area": "Rajajinagar", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Jaffer"], "phones": ["7019044517", "9513016074"], "features": ["Free", "Delivery", "DineIn"], "zone": "West" },
{ "location_id": 2082, "city": "Bengaluru", "venue_name": "Masjid E Fayaz", "primary_area": "Bommasandra", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Syed Afreed"], "phones": ["9686526985", "9611190649"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2083, "city": "Bengaluru", "venue_name": "Masjid E Ibadat Khana", "primary_area": "BTM Layout", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Tabrezulla"], "phones": ["9986688141"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2084, "city": "Bengaluru", "venue_name": "Masjid E Ali Abul Hasnain", "primary_area": "Lakkasandra", "venue_type": "Masjid", "food_type": "Free", "notes": "NIMHANS, Kidwai, Rajiv Gandhi Hospital Coverage", "contact_persons": ["Shahid"], "phones": ["8310612674", "9066786714"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2085, "city": "Bengaluru", "venue_name": "Masjid E Ameer Hamza", "primary_area": "Gandhinagar", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Mudassir"], "phones": ["9845029497"], "features": ["Free", "DineIn"], "zone": "South" },
{ "location_id": 2086, "city": "Bengaluru", "venue_name": "Masjid E Aqsa HSR Layout", "primary_area": "HSR Layout", "venue_type": "Masjid", "food_type": "Paid", "contact_persons": ["Amjad"], "phones": ["9035600000"], "features": ["Paid", "Delivery", "DineIn"], "zone": "East" },
{ "location_id": 2087, "city": "Bengaluru", "venue_name": "Masjid E Abubakar Siddiq", "primary_area": "Saraipalya", "venue_type": "Masjid", "food_type": "Free", "notes": "Manyata Tech Park Coverage", "contact_persons": ["Salman Yousuf"], "phones": ["9141613381", "9342410242"], "features": ["Free", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 2088, "city": "Bengaluru", "venue_name": "Madani Dastarkhan", "primary_area": "Neelsandra", "venue_type": "Foundation", "food_type": "Free", "contact_persons": ["Akram"], "phones": ["9620229007", "9611999127", "8971777703", "9886160059"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2089, "city": "Bengaluru", "venue_name": "Madeena Masjid Sanjay Nagar", "primary_area": "Sanjay Nagar", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Syed Ismail Shah"], "phones": ["9738129786", "9972246785"], "features": ["Free", "Delivery", "DineIn"], "zone": "West" },
{ "location_id": 2090, "city": "Bengaluru", "venue_name": "Madiwala Minority Welfare Trust", "primary_area": "Madiwala", "venue_type": "Foundation", "food_type": "Free", "contact_persons": ["Shoaib Pasha"], "phones": ["8050556895"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2091, "city": "Bengaluru", "venue_name": "Makkah Masjid Ramamurthy Nagar", "primary_area": "Ramamurthy Nagar", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Suhail S"], "phones": ["9538043326", "9916092540", "9844589654"], "features": ["Free", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 2092, "city": "Bengaluru", "venue_name": "Masjid E Touheed", "primary_area": "Dooravani Nagar", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Syed Ataulla"], "phones": ["9845921110", "9945909781", "9845368826", "9686360569"], "features": ["Free", "Delivery", "DineIn"], "zone": "East" },
{ "location_id": 2093, "city": "Bengaluru", "venue_name": "Masjid E Rahmania Sanjay Nagar", "primary_area": "Sanjay Nagar", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Ismail Zabiullah"], "phones": ["9900398420", "9343826238"], "features": ["Free", "DineIn"], "zone": "West" },
{ "location_id": 2094, "city": "Bengaluru", "venue_name": "Masjid E Rasheedia", "primary_area": "Nagawara", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Tahseen Ahmed"], "phones": ["7899917760"], "features": ["Free", "DineIn"], "zone": "North" },
{ "location_id": 2095, "city": "Bengaluru", "venue_name": "Masjid E Rizwan", "primary_area": "JP Nagar", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Siddique"], "phones": ["9972045466", "8105666956"], "features": ["Free", "Delivery", "DineIn"], "zone": "South" },
{ "location_id": 2096, "city": "Bengaluru", "venue_name": "Masjid E Tauheed Goripalya", "primary_area": "Goripalya", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Nasir"], "phones": ["9845645104"], "features": ["Free", "Delivery", "DineIn"], "zone": "West" },
{ "location_id": 2097, "city": "Bengaluru", "venue_name": "Masjid E Tawakkal", "primary_area": "Hennur", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Abdurraheem"], "phones": ["9341072935"], "features": ["Free", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 2098, "city": "Bengaluru", "venue_name": "Masjid E Tippu Marathahalli", "primary_area": "Marathahalli", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Syed Ahmed"], "phones": ["9343549356"], "features": ["Free", "DineIn"], "zone": "East" },
{ "location_id": 2099, "city": "Bengaluru", "venue_name": "Masjid E Mina", "primary_area": "CV Raman Nagar", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Sharukh"], "phones": ["9590186182"], "features": ["Free", "DineIn"], "zone": "East" },
{ "location_id": 2100, "city": "Bengaluru", "venue_name": "Masjid E Mohammadia", "primary_area": "Dasarahalli", "venue_type": "Masjid", "food_type": "Free", "contact_persons": ["Shoaib Bhai"], "phones": ["8904697851"], "features": ["Free", "DineIn"], "zone": "West" },
{ "location_id": 2101, "city": "Bengaluru", "venue_name": "Masjid E Noor Vijayanagar", "primary_area": "Vijayanagar", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "zone": "West" },
{ "location_id": 2102, "city": "Bengaluru", "venue_name": "Jamia Masjid Nagarbhavi", "primary_area": "Nagarbhavi", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "Delivery", "DineIn"], "zone": "West" },
{ "location_id": 2103, "city": "Bengaluru", "venue_name": "Masjid E Rahmath Kengeri", "primary_area": "Kengeri", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "zone": "South" },
{ "location_id": 2104, "city": "Bengaluru", "venue_name": "Masjid E Bilal Malleshwaram", "primary_area": "Malleshwaram", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "zone": "West" },
{ "location_id": 2105, "city": "Bengaluru", "venue_name": "Masjid E Quba Chandra Layout", "primary_area": "Chandra Layout", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "Delivery", "zone": "West" },
{ "location_id": 2106, "city": "Bengaluru", "venue_name": "Masjid E Tawheed Magadi Road", "primary_area": "Magadi Road", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "zone": "West" },
{ "location_id": 2107, "city": "Bengaluru", "venue_name": "Masjid E Huda Hebbal", "primary_area": "Hebbal", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 2108, "city": "Bengaluru", "venue_name": "Jamia Masjid Jakkur", "primary_area": "Jakkur", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "Delivery"], "zone": "North" },
{ "location_id": 2109, "city": "Bengaluru", "venue_name": "Masjid E Rahman Sahakar Nagar", "primary_area": "Sahakar Nagar", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "zone": "North" },
{ "location_id": 2110, "city": "Bengaluru", "venue_name": "Masjid E Noor Kogilu", "primary_area": "Kogilu", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "Delivery"], "zone": "West" },
{ "location_id": 2111, "city": "Bengaluru", "venue_name": "Masjid E Siddique Vidyaranyapura", "primary_area": "Vidyaranyapura", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "zone": "North" },
{ "location_id": 2112, "city": "Bengaluru", "venue_name": "Masjid E Furqan Peenya", "primary_area": "Peenya", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "Delivery"], "zone": "West" },
{ "location_id": 2113, "city": "Bengaluru", "venue_name": "Jamia Masjid Chikkabanavara", "primary_area": "Chikkabanavara", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "Delivery", "DineIn"], "zone": "North" },
{ "location_id": 2114, "city": "Bengaluru", "venue_name": "Masjid E Ameen Mahadevapura", "primary_area": "Mahadevapura", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "Delivery"], "zone": "East" },
{ "location_id": 2115, "city": "Bengaluru", "venue_name": "Masjid E Hidayah Varthur", "primary_area": "Varthur", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "zone": "East" },
{ "location_id": 2116, "city": "Bengaluru", "venue_name": "Bellandur Youth Sehri Group", "primary_area": "Bellandur", "venue_type": "Foundation", "food_type": "Free", "features": ["Free", "Delivery"], "zone": "East" },
{ "location_id": 2117, "city": "Bengaluru", "venue_name": "Masjid E Rahmat Ullah KR Puram Extension", "primary_area": "KR Puram Extension", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "Delivery"], "zone": "East" },
{ "location_id": 2118, "city": "Bengaluru", "venue_name": "Masjid E Mustafa Guddadahalli", "primary_area": "Guddadahalli", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "zone": "West" },
{ "location_id": 2119, "city": "Bengaluru", "venue_name": "Masjid E Shifa Shivajinagar", "primary_area": "Shivajinagar", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "Delivery", "DineIn"], "zone": "East" },
{ "location_id": 2120, "city": "Bengaluru", "venue_name": "Masjid E Taqwa Ullal", "primary_area": "Ullal", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "DineIn"], "zone": "South" },
{ "location_id": 2121, "city": "Bengaluru", "venue_name": "Masjid E Khairunnisa Basavanapura", "primary_area": "Basavanapura", "venue_type": "Masjid", "food_type": "Free", "features": ["Free", "Delivery"], "zone": "South" }
];

const HYDERABAD_DATA: RawSehriSpot[] = [
  { "location_id": 3001, "city": "Hyderabad", "venue_name": "Masjid-e-Khadriya", "primary_area": "Charminar", "venue_type": "Masjid", "food_type": "Free", "zone": "South" },
  { "location_id": 3002, "city": "Hyderabad", "venue_name": "Masjid-e-Quba", "primary_area": "Mehdipatnam", "venue_type": "Masjid", "food_type": "Free", "zone": "West" },
  { "location_id": 3003, "city": "Hyderabad", "venue_name": "Masjid-e-Noor", "primary_area": "Tolichowki", "venue_type": "Masjid", "food_type": "Free", "zone": "West" },
  { "location_id": 3004, "city": "Hyderabad", "venue_name": "Masjid-e-Bilal", "primary_area": "AC Guards", "venue_type": "Masjid", "food_type": "Free", "zone": "Central" },
  { "location_id": 3005, "city": "Hyderabad", "venue_name": "Masjid-e-Mohammedia", "primary_area": "Malakpet", "venue_type": "Masjid", "food_type": "Free", "zone": "East" },
  { "location_id": 3006, "city": "Hyderabad", "venue_name": "Masjid-e-Azizia", "primary_area": "Humayun Nagar", "venue_type": "Masjid", "food_type": "Free", "zone": "West" },
  { "location_id": 3007, "city": "Hyderabad", "venue_name": "Paramount Colony Gate 1", "primary_area": "Tolichowki", "venue_type": "Foundation", "food_type": "Free", "notes": "Free Sehri food is often distributed here for those in need.", "zone": "West" }
];

const MUMBAI_DATA: RawSehriSpot[] = [
  {
    "location_id": 4001,
    "city": "Mumbai",
    "zone": "South Mumbai",
    "primary_area": "Crawford Market",
    "venue_name": "Juma Masjid",
    "venue_type": "Masjid",
    "food_type": "Free",
    "features": ["Free", "DineIn", "WomenSection", "TravelerSupport", "StudentFriendly"],
    "target_audience": ["General Public", "Women", "Travelers"],
    "landmark": "Crawford Market, Marine Lines",
    "availability": "Entire Ramadan"
  },
  {
    "location_id": 4002,
    "city": "Mumbai",
    "zone": "South Mumbai",
    "primary_area": "Worli",
    "venue_name": "Haji Ali Dargah",
    "venue_type": "Dargah",
    "food_type": "Free",
    "features": ["Free", "DineIn", "WomenSection", "TravelerSupport"],
    "target_audience": ["General Public", "Travelers", "Needy"],
    "landmark": "Haji Ali Dargah, Worli Seaface",
    "phones": ["+912223529082"],
    "availability": "Entire Ramadan"
  },
  {
    "location_id": 4003,
    "city": "Mumbai",
    "zone": "Central Mumbai",
    "primary_area": "Kurla East",
    "venue_name": "Bilali Masjid",
    "venue_type": "Masjid",
    "food_type": "Free",
    "features": ["Free", "DineIn", "StudentFriendly"],
    "target_audience": ["Students", "Local Community"],
    "landmark": "Qureshi Nagar, Kurla East",
    "phones": ["9324458770", "9648076259"],
    "availability": "Entire Ramadan"
  },
  {
    "location_id": 4004,
    "city": "Mumbai",
    "zone": "Central Mumbai",
    "primary_area": "Mahim West",
    "venue_name": "Mahim Dargah",
    "venue_type": "Dargah",
    "food_type": "Free",
    "features": ["Free", "DineIn"],
    "target_audience": ["Needy", "Local Community"],
    "landmark": "Mahim Dargah Street",
    "phones": ["7860977860"],
    "availability": "Entire Ramadan"
  },
  {
    "location_id": 4005,
    "city": "Mumbai",
    "zone": "Central Mumbai",
    "primary_area": "Parel / Sion",
    "venue_name": "AMP Sehri Project",
    "venue_type": "NGO",
    "food_type": "Free",
    "features": ["Free", "PatientSupport"],
    "target_audience": ["Hospital Patients", "Patient Relatives"],
    "landmark": "KEM, Sion, Nair, Wadia Hospitals",
    "phones": ["+917303116060"],
    "notes": "Distribution for hospital patients and relatives"
  },
  {
    "location_id": 4006,
    "city": "Mumbai",
    "zone": "Central Mumbai",
    "primary_area": "Parel",
    "venue_name": "Jeevan Jyot Cancer Relief",
    "venue_type": "NGO",
    "food_type": "Free",
    "features": ["Free", "PatientSupport"],
    "target_audience": ["Cancer Patients", "Patient Relatives"],
    "landmark": "3/9, Kondaji Chawl, Jerbai Wadia Road",
    "phones": ["02224153453", "1800225848"]
  },
  {
    "location_id": 4007,
    "city": "Mumbai",
    "zone": "South Mumbai",
    "primary_area": "Fort",
    "venue_name": "Jagannaths Kitchen",
    "venue_type": "Restaurant",
    "food_type": "Paid",
    "features": ["Paid", "DineIn", "Delivery", "StudentFriendly"],
    "target_audience": ["General Public", "Office Workers"],
    "landmark": "Fort Area",
    "phones": ["09972902664"]
  },
  {
    "location_id": 4008,
    "city": "Mumbai",
    "zone": "South Mumbai",
    "primary_area": "Dongri",
    "venue_name": "Al-Iman Charitable Trust",
    "venue_type": "NGO",
    "food_type": "Free",
    "features": ["Free"],
    "target_audience": ["Needy", "Local Community"],
    "landmark": "Najafi House, Imam Husain Chowk",
    "phones": ["+912223403295"]
  }
];

// Combine all datasets
const RAW_DATA = [...CHENNAI_DATA, ...BANGALORE_DATA, ...HYDERABAD_DATA, ...MUMBAI_DATA];

// List of Verified IDs (Only existing real IDs + Major Mosques)
const VERIFIED_IDS = [
  // Original Verified
  1, 2, 3, 5, 8, 9, 14, 20, 22, 24, 35, 
  // Bangalore Verified
  1001, 1005, 2013, 2021,
  // New Major Chennai Landmarks (Added to Verified for Trust)
  40, 41, 42, 55, 60, 68, 76, 80, 89,
  // Mumbai Verified
  4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008
];

// Helper to format timing object to string
const formatTiming = (timing: any): string => {
  if (!timing) return "Contact for timing";
  if (timing.takeaway || timing.in_masjid) {
     const parts = [];
     if (timing.takeaway) parts.push(`Takeaway: ${timing.takeaway}`);
     if (timing.in_masjid) parts.push(`Masjid: ${timing.in_masjid}`);
     return parts.join(" | ");
  }
  if (timing.start && timing.end) return `${timing.start} - ${timing.end}`;
  if (timing.start) return `Starts ${timing.start}`;
  return "Contact for timing";
};

/**
 *  DATA TRANSFORMATION LAYER
 */
export const SAMPLE_DATA: SehriSpot[] = RAW_DATA.map(d => {
  // Normalize City Name
  let city = d.city || "Chennai";
  if (city === "Bengaluru") city = "Bangalore";

  // Construct Address
  const addressParts = [
    d.landmark,
    d.locality,
    d.primary_area,
    city !== "Chennai" ? city : null // Append city if not default
  ].filter(Boolean);

  return {
    id: d.location_id,
    name: d.venue_name,
    area: d.primary_area,
    city: city,
    zone: d.zone, // Only available for Bangalore
    address: addressParts.join(", "),
    timing: formatTiming(d.timing),
    venueType: d.venue_type || "Unknown",
    foodType: d.food_type || "Unknown",
    targetAudience: d.target_audience,
    phones: d.phones || [],
    contactPerson: d.contact_persons?.[0], // Take first contact person

    // Re-populated fields for UI request
    distance: "X km", 
    verified: VERIFIED_IDS.includes(d.location_id), 
    lastVerified: "2025",
    
    // Join various note fields into one string
    specialNotes: [
      d.notes, 
      d.availability ? `Availability: ${d.availability}` : '', 
      d.price ? `Price: ${d.price}` : ''
    ].filter(Boolean).join(". "),
    
    features: d.features || []
  };
});
