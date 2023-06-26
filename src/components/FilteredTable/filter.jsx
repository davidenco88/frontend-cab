import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';


//const [users, setUsers] = useState([]);
/*const url = `${import.meta.env.VITE_BASE_URL}/api/vehicles/actives`;
console.log(url);

const response = await fetch(url);
const data2 = await response.json();
console.log(data2);*/

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
      "id": 1,
      "driverID": 3,
      "vehicleTypeID": 1,
      "name": "Vehiculo generico 1",
      "plates": "1235486",
      "isAvailable": true,
      "isActive": true,
      "Users": {
          "id": 3,
          "name": "Andres",
          "lastname": "Lopez",
          "email": "andres@mkir.com",
          "avatar": "empty",
          "isActive": false,
          "password": "$2b$10$dRXshQ3jY5TDadvpThlDguILyXpTYFZAehSKzdcHIV11tIQlvnnTG"
      },
      "VehicleTypes": {
          "id": 1,
          "name": "Vehiculo epacioso",
          "seats": 5,
          "luggage": "25 lts",
          "isActive": true,
          "ServiceType":
              {
                  "id": 1,
                  "vehicleTypesId": 1,
                  "feeBase": 120,
                  "isActive": true
              }
      }
  },
  {
      "id": 2,
      "driverID": 3,
      "vehicleTypeID": 2,
      "name": "Vehiculo generico 2",
      "plates": "987456",
      "isAvailable": true,
      "isActive": true,
      "Users": {
          "id": 3,
          "name": "Andres",
          "lastname": "Lopez",
          "email": "andres@mkir.com",
          "avatar": "empty",
          "isActive": false,
          "password": "$2b$10$dRXshQ3jY5TDadvpThlDguILyXpTYFZAehSKzdcHIV11tIQlvnnTG"
      },
      "VehicleTypes": {
          "id": 2,
          "name": "Vehiculo de lujo",
          "seats": 3,
          "luggage": "25 lts",
          "isActive": true,
          "ServiceType":
              {
                  "id": 2,
                  "vehicleTypesId": 2,
                  "feeBase": 150,
                  "isActive": true
              }
      }
  },
  {
      "id": 3,
      "driverID": 3,
      "vehicleTypeID": 3,
      "name": "Vehiculo generico 3",
      "plates": "192846",
      "isAvailable": true,
      "isActive": true,
      "Users": {
          "id": 3,
          "name": "Andres",
          "lastname": "Lopez",
          "email": "andres@mkir.com",
          "avatar": "empty",
          "isActive": false,
          "password": "$2b$10$dRXshQ3jY5TDadvpThlDguILyXpTYFZAehSKzdcHIV11tIQlvnnTG"
      },
      "VehicleTypes": {
          "id": 3,
          "name": "Vehiculo economico",
          "seats": 4,
          "luggage": "10 lts",
          "isActive": true,
          "ServiceType":
              {
                  "id": 3,
                  "vehicleTypesId": 3,
                  "feeBase": 80,
                  "isActive": true
              }
      }
  }
];

const Example = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', //access nested data with dot notation
        header: 'Car Name',
      },
      {
        accessorKey: 'VehicleTypes.name',
        header: 'Car Model',
      },
      {
        accessorKey: 'plates', //normal accessorKey
        header: 'Placas',
      },
      {
        accessorKey: 'VehicleTypes.seats',
        header: 'Passengers',
      },
      {
        accessorKey: 'VehicleTypes.luggage',
        header: 'Car capacity',
      },
      {
        accessorKey: 'VehicleTypes.ServiceType.feeBase',
        header: 'Pricing',
      },
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default Example;

