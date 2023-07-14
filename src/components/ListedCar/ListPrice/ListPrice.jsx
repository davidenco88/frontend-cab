import './ListPrice.scss';

function ListPrice({ item }) {
  const { VehicleTypes } = item;
  return (
    <div className="listPrice">
      {/* <h2 className="listPrice__base">${VehicleTypes.feeBase}</h2> */}
      <div className="listPrice__fare">
        <p className="listPrice__fare__text">Fare/Km&nbsp;:&nbsp;</p>
        <h2 className="listPrice__fare__price">${VehicleTypes.feeBase}</h2>
      </div>
    </div>
  );
}

export default ListPrice;
