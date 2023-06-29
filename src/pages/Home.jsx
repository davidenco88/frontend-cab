import HeroHome from '../components/HeroHome/HeroHome';
import FleetSlider from '../components/FleetSlider/FleetSlider';
import HowToGet from '../components/HowToGet/HowToGet';
import StepsToUse from '../components/StepsToUse/StepsToUse';
import WhyUse from '../components/WhyUse/WhyUse';
import data from '../components/FleetSlider/FleeSlider.data';

function Home() {

  return (
    <div className="page">
      <HeroHome />
      <WhyUse />
      <StepsToUse />
      <FleetSlider data={data.cars} />
      <HowToGet />
    </div>
  );
}

export default Home;
