import './HeroDefault.scss';

function HeroDefault({ text }) {
  return (
    <div className="heroContainer">
      <div className="heroContainer__text">
        <h2 className="heroContainer__text__title">{text.title}</h2>
        <br />
        <h3 className="heroContainer__text__details">{text.details}</h3>
      </div>
    </div>
  );
}

export default HeroDefault;
