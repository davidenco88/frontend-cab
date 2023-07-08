import './OrangeButton.scss';

function OrangeButton({ text, isDisabled = false, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button className="orangeButton" type="button" disabled={isDisabled} onClick={handleClick}>{text}</button>
  );
}

export default OrangeButton;
