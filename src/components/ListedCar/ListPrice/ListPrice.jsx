import './ListPrice.scss';

function ListPrice({ item }) {
  return (
    <div className="listPrice">
      <h2 className="listPrice__base">${item.price}</h2>
      <div className="listPrice__fare">
        <p className="listPrice__fare__text">Fare/Km&nbsp;:&nbsp;</p>
        <h4 className="listPrice__fare__price">${item.kmFare}</h4>
      </div>
    </div>
  );
}

export default ListPrice;
