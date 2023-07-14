import './ImageAndType.scss';

function ImageAndType({ item }) {
  const { VehicleTypes } = item;
  return (
    <div className="listCar" key={item.id}>
      <div className="listCar__img">
        <img className="listCar__img__pic" src={item.image} alt="car" />
      </div>
      <h3 className="listCar__name">{item.brand} {item.model}</h3>
      <p className="listCar__type">{VehicleTypes.type}</p>
    </div>
  );
}

export default ImageAndType;
