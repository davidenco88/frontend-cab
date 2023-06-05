import './ImageAndType.scss';

function ImageAndType({ item }) {
  return (
    <div className="listCar" key={item.id}>
      <img className="listCar__img" src={item.image} alt={item.name} />
      <h3 className="listCar__name">{item.name}</h3>
      <p className="listCar__type">({item.type})</p>
    </div>
  );
}

export default ImageAndType;
