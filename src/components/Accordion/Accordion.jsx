function Accordion(props) {
  const { title, text } = props;
  return (
    <div className="accordion">
      <h3 className="accordion-title">{title}</h3>
      <div className="accordion-content">
        {text}
      </div>
    </div>
  );
}

export default Accordion;
