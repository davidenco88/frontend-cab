import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { GiCarSeat } from 'react-icons/gi';
import { MdOutlineLuggage } from 'react-icons/md';
import { IoSnow } from 'react-icons/io5';
import { FiSettings } from 'react-icons/fi';
import './FleetSlider.scss';
import '@splidejs/react-splide/css';

function FleetSlider({ data }) {
  // const [width, setWidth] = useState(window.innerWidth)
  const getWindowWidth = () => window.innerWidth;
  const large = {
    width: '85%',
    type: 'loop',
    speed: 1500,
    perPage: 3,
    center: true,
    gap: '50px',
    snap: true,
    padding: { left: 60, right: 60 },
    focus: 'center',
    autoHeight: true,
    pagination: false,
  };

  const medium = {
    width: '85%',
    type: 'loop',
    speed: 1500,
    perPage: 2,
    center: true,
    gap: '50px',
    snap: true,
    padding: { left: 60, right: 60 },
    focus: 'center',
    autoHeight: true,
    pagination: false,
  };

  const small = {
    width: '85%',
    type: 'loop',
    speed: 1500,
    perPage: 1,
    center: true,
    gap: '50px',
    snap: true,
    padding: { left: 30, right: 30, bottom: 30 },
    focus: 'center',
    autoHeight: true,
    pagination: false,
  };

  // useEffect(() => {},[])
  const getOptions = () => {
    const width = getWindowWidth();

    if (width > 960) {
      return large;
    }

    if (width < 960 && width > 768) {
      return medium;
    }
    if (width < 768) {
      return small;
    }
  };

  const options = getOptions();

  return (
    <div className="component">
      <div className="component__info">
        <h3 className="component__info__emphasis">WIDEST VARITY</h3>
        <h2 className="component__info__title">Our Awesome fleet</h2>
        <p className="component__info__description">
          Choose from a diverse range of meticulously maintained vehicles,
          equipped with cutting-edge technology for a remarkable ride. Our
          professional drivers ensure convenience and reliability as you reach
          your destination effortlessly.
        </p>
      </div>
      <Splide
        options={options}
      >
        {data.map((item) => (
          <SplideSlide key={item.id}>
            <div className="container">
              <img className="container__image" src={item.image} alt="Cab" />
              <h2 className="container__textType">{item.service}</h2>
              <h3 className="container__textFee">Fee Start $12 / per Km</h3>
              <p className="container__description">{item.description}</p>
              <p>
                <GiCarSeat /> <IoSnow /> <MdOutlineLuggage /> <FiSettings />{' '}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default FleetSlider;
