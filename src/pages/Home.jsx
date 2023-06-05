import { useState, useEffect } from 'react';
import { fetchCars } from '../services/cars';
import HeroHome from '../components/HeroHome/HeroHome';
import FleetSlider from '../components/FleetSlider/FleetSlider';
import HowToGet from '../components/HowToGet/HowToGet';
import StepsToUse from '../components/StepsToUse/StepsToUse';
import WhyUse from '../components/WhyUse/WhyUse';

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars()
      .then((vehicles) => {
        setCars(vehicles);
      });
  }, []);

  return (
    <div className="page">
      <HeroHome />
      <WhyUse />
      <StepsToUse />
      <FleetSlider data={cars} />
      <HowToGet />
    </div>
  );
}

export default Home;
