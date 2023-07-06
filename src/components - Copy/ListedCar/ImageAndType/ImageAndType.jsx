import './ImageAndType.scss';

function ImageAndType({ item }) {
  const { VehicleTypes } = item;
  return (
    <div className="listCar" key={item.id}>
      <img className="listCar__img" src={item.image} alt="car" />
      <h3 className="listCar__name">{item.brand} {item.model}</h3>
      <p className="listCar__type">{VehicleTypes.type}</p>
    </div>
  );
}

export default ImageAndType;
