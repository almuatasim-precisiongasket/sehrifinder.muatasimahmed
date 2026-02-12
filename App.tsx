
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LandingSections } from './components/LandingSections';
import { FilterBar } from './components/FilterBar';
import { ListingCard } from './components/ListingCard';
import { BottomNav } from './components/BottomNav';
import { IslamicPattern } from './components/Pattern';
import { SAMPLE_DATA } from './constants';
import { Search } from 'lucide-react';

const SUPPORTED_CITIES = ['Chennai', 'Bangalore', 'Hyderabad', 'Mumbai'];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('Chennai');

  // Filter Logic
  const filteredData = useMemo(() => {
    let data = SAMPLE_DATA.filter(item => item.city === selectedCity);

    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      data = data.filter((item) => 
        item.name.toLowerCase().includes(lowerTerm) ||
        item.area.toLowerCase().includes(lowerTerm) ||
        item.features.some(f => f.toLowerCase().includes(lowerTerm)) ||
        item.specialNotes.toLowerCase().includes(lowerTerm) ||
        (item.zone && item.zone.toLowerCase().includes(lowerTerm))
      );
    }
    
    if (selectedArea) {
      data = data.filter(item => item.area === selectedArea);
    }

    return data;
  }, [searchTerm, selectedArea, selectedCity]);

  const cityAreas = useMemo(() => {
    const citySpots = SAMPLE_DATA.filter(item => item.city === selectedCity);
    const uniqueAreas = Array.from(new Set(citySpots.map(d => d.area))).sort();
    return uniqueAreas;
  }, [selectedCity]);

  const hasResults = filteredData.length > 0;

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setSelectedArea(null);
  };

  return (
    // Main Container - Dark Midnight Background
    <div className="min-h-screen bg-midnight flex flex-col font-sans relative">
      <Header />
      
      {/* 
        LANDING EXPERIENCE 
        The top half of the app is the "Atmosphere" (Dark)
      */}
      <div className="flex flex-col">
        <Hero 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm}
        />
        
        {/* Only show narrative sections if user hasn't searched yet */}
        {!searchTerm && <LandingSections />}
      </div>

      {/* 
        LISTING EXPERIENCE 
        The bottom half is the "Utility" (Light/Cream for readability of data cards)
      */}
      <div className="relative bg-cream z-30 rounded-t-[2.5rem] mt-[-2rem] border-t border-gold/30 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] min-h-[50vh]">
        
        {/* Background Pattern for Light Area */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
           <IslamicPattern variant="hexagonal" className="text-midnight" opacity={0.05} />
        </div>

        {/* Section Title for the List */}
        <div className="container mx-auto px-4 pt-12 pb-2 relative z-10 text-center">
          <h3 className="font-serif text-3xl font-bold text-midnight mb-2">
            Explore {selectedCity}
          </h3>
          <p className="text-gray-500 text-sm">Find the perfect spot for your Sehri</p>
        </div>

        <FilterBar 
          selectedArea={selectedArea}
          onSelectArea={setSelectedArea}
          selectedCity={selectedCity}
          onSelectCity={handleCityChange}
          totalSpots={filteredData.length}
          areas={cityAreas}
        />

        <main className="container mx-auto px-4 py-8 max-w-[1440px] relative z-10">
          {!hasResults ? (
            <div className="flex flex-col items-center justify-center py-20 text-center opacity-60">
              <div className="bg-gray-100 p-6 rounded-full mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
                {!SUPPORTED_CITIES.includes(selectedCity)
                  ? `No spots in ${selectedCity} yet` 
                  : 'No Sehri spots found'}
              </h3>
              <p className="text-gray-500 max-w-xs mx-auto">
                {!SUPPORTED_CITIES.includes(selectedCity)
                  ? `We are currently live only in Chennai, Bangalore, Hyderabad and Mumbai.` 
                  : "Try adjusting your filters or searching for a different area."}
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedArea(null);
                  if (!SUPPORTED_CITIES.includes(selectedCity)) setSelectedCity('Chennai');
                }}
                className="mt-6 text-emerald font-bold hover:underline"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in pb-24">
               {filteredData.map(spot => (
                  <ListingCard key={spot.id} data={spot} />
               ))}
            </div>
          )}
        </main>
      </div>

      <BottomNav />
    </div>
  );
}
