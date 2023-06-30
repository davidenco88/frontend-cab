import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';


//const [users, setUsers] = useState([]);
const url = `${import.meta.env.VITE_BASE_URL}/api/vehicles/actives`;
console.log(url);

const response = await fetch(url);
const data2 = await response.json();
console.log(data2);

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
      "id": 1,
      "driverID": 3,
      "vehicleTypeID": 1,
      "image": "https://cdn.imagin.studio/getImage?&customer=counivalle&make=cupra&modelFamily=formentor&modelRange=formentor&modelVariant=od&modelYear=2020",
      "mark": "Cupra",
      "line": "Formentor",
      "model": 2020,
      "plates": "1235486",
      "isAvailable": true,
      "isActive": true,
      "Users": {
          "id": 3,
          "name": "Andres",
          "lastname": "Lopez",
          "email": "andres@mkir.com",
          "avatar": "empty",
          "isActive": true,
          "password": "$2b$10$kzdeRSS.zhH/yiTToKLLkuc.JmddE0wHc8eSIlaJrWuozIbBDVHP.",
          "passwordResetToken": null,
          "passwordResetExpires": null
      },
      "VehicleTypes": {
          "id": 1,
          "name": "Spacious vehicle",
          "seats": 5,
          "luggage": "25 lts",
          "feeBase": 120,
          "isActive": true
      }
  },
  {
      "id": 2,
      "driverID": 3,
      "vehicleTypeID": 1,
      "image": "https://cdn.imagin.studio/getImage?&customer=counivalle&make=dodge&modelFamily=hornet&modelRange=hornet&modelVariant=od&modelYear=2023",
      "mark": "Dodge",
      "line": "Hornet",
      "model": 2023,
      "plates": "1235487",
      "isAvailable": true,
      "isActive": true,
      "Users": {
          "id": 3,
          "name": "Andres",
          "lastname": "Lopez",
          "email": "andres@mkir.com",
          "avatar": "empty",
          "isActive": true,
          "password": "$2b$10$kzdeRSS.zhH/yiTToKLLkuc.JmddE0wHc8eSIlaJrWuozIbBDVHP.",
          "passwordResetToken": null,
          "passwordResetExpires": null
      },
      "VehicleTypes": {
          "id": 1,
          "name": "Spacious vehicle",
          "seats": 5,
          "luggage": "25 lts",
          "feeBase": 120,
          "isActive": true
      }
  },
  {
      "id": 3,
      "driverID": 3,
      "vehicleTypeID": 1,
      "image": "https://cdn.imagin.studio/getImage?&customer=counivalle&make=chevrolet&modelFamily=captiva&modelRange=captiva&modelVariant=od&modelYear=2023",
      "mark": "Chevrolet",
      "line": "Captiva",
      "model": 2022,
      "plates": "1235489",
      "isAvailable": true,
      "isActive": true,
      "Users": {
          "id": 3,
          "name": "Andres",
          "lastname": "Lopez",
          "email": "andres@mkir.com",
          "avatar": "empty",
          "isActive": true,
          "password": "$2b$10$kzdeRSS.zhH/yiTToKLLkuc.JmddE0wHc8eSIlaJrWuozIbBDVHP.",
          "passwordResetToken": null,
          "passwordResetExpires": null
      },
      "VehicleTypes": {
          "id": 1,
          "name": "Spacious vehicle",
          "seats": 5,
          "luggage": "25 lts",
          "feeBase": 120,
          "isActive": true
      }
  },
  {
      "id": 4,
      "driverID": 3,
      "vehicleTypeID": 1,
      "image": "https://cdn.imagin.studio/getImage?&customer=counivalle&make=ford&modelFamily=ecosport&modelRange=ecosport&modelVariant=od&modelYear=2022&paintId=pspc0016",
      "mark": "Ford",
      "line": "Ecosport",
      "model": 2022,
      "plates": "1235488",
      "isAvailable": true,
      "isActive": true,
      "Users": {
          "id": 3,
          "name": "Andres",
          "lastname": "Lopez",
          "email": "andres@mkir.com",
          "avatar": "empty",
          "isActive": true,
          "password": "$2b$10$kzdeRSS.zhH/yiTToKLLkuc.JmddE0wHc8eSIlaJrWuozIbBDVHP.",
          "passwordResetToken": null,
          "passwordResetExpires": null
      },
      "VehicleTypes": {
          "id": 1,
          "name": "Spacious vehicle",
          "seats": 5,
          "luggage": "25 lts",
          "feeBase": 120,
          "isActive": true
      }
  },
  {
      "id": 5,
      "driverID": 3,
      "vehicleTypeID": 2,
      "image": "https://cdn.imagin.studio/getImage?&customer=counivalle&make=bmw&modelFamily=series-5&modelRange=m5&modelVariant=sa&modelYear=2021&paintId=pspc0016",
      "mark": "BMW",
      "line": "Serie 5",
      "model": 2022,
      "plates": "987456",
      "isAvailable": true,
      "isActive": true,
      "Users": {
          "id": 3,
          "name": "Andres",
          "lastname": "Lopez",
          "email": "andres@mkir.com",
          "avatar": "empty",
          "isActive": true,
          "password": "$2b$10$kzdeRSS.zhH/yiTToKLLkuc.JmddE0wHc8eSIlaJrWuozIbBDVHP.",
          "passwordResetToken": null,
          "passwordResetExpires": null
      },
      "VehicleTypes": {
          "id": 2,
          "name": "Luxury vehicle",
          "seats": 3,
          "luggage": "25 lts",
          "feeBase": 150,
          "isActive": true
      }
  },
  {
      "id": 6,
      "driverID": 3,
      "vehicleTypeID": 2,
      "image": "https://cdn.imagin.studio/getImage?&customer=counivalle&make=mercedes&modelFamily=c-class&modelRange=c-class&modelVariant=ca&modelYear=2018",
      "mark": "Mercedes",
      "line": "Class-c",
      "model": 2018,
      "plates": "987457",
      "isAvailable": true,
      "isActive": true,
      "Users": {
          "id": 3,
          "name": "Andres",
          "lastname": "Lopez",
          "email": "andres@mkir.com",
          "avatar": "empty",
          "isActive": true,
          "password": "$2b$10$kzdeRSS.zhH/yiTToKLLkuc.JmddE0wHc8eSIlaJrWuozIbBDVHP.",
          "passwordResetToken": null,
          "passwordResetExpires": null
      },
      "VehicleTypes": {
          "id": 2,
          "name": "Luxury vehicle",
          "seats": 3,
          "luggage": "25 lts",
          "feeBase": 150,
          "isActive": true
      }
  },
  {
      "id": 7,
      "driverID": 3,
      "vehicleTypeID": 2,
      "image": "https://cdn.imagin.studio/getImage?&customer=counivalle&make=audi&modelFamily=a5&modelRange=a5&modelVariant=ca&modelYear=2019&powerTrain=petrol&transmission=0&bodySize=2&trim=eu&paintId=pspc0016&angle=01",
      "mark": "Audi",
      "line": "A5",
      "model": 2019,
      "plates": "987458",
      "isAvailable": true,
      "isActive": true,
      "Users": {
          "id": 3,
          "name": "Andres",
          "lastname": "Lopez",
          "email": "andres@mkir.com",
          "avatar": "empty",
          "isActive": true,
          "password": "$2b$10$kzdeRSS.zhH/yiTToKLLkuc.JmddE0wHc8eSIlaJrWuozIbBDVHP.",
          "passwordResetToken": null,
          "passwordResetExpires": null
      },
      "VehicleTypes": {
          "id": 2,
          "name": "Luxury vehicle",
          "seats": 3,
          "luggage": "25 lts",
          "feeBase": 150,
          "isActive": true
      }
  },
  {
      "id": 8,
      "driverID": 3,
      "vehicleTypeID": 2,
      "image": "https://cdn.imagin.studio/getImage?&customer=counivalle&make=alfa-romeo&modelFamily=mito&modelRange=mito&modelVariant=ha&modelYear=2018&powerTrain=fossil&transmission=0&bodySize=3&trim=0&paintId=pspc0016&angle=01",
      "mark": "Alpha-Romeo",
      "line": "mito",
      "model": 2019,
      "plates": "987458",
      "isAvailable": true,
      "isActive": true,
      "Users": {
          "id": 3,
          "name": "Andres",
          "lastname": "Lopez",
          "email": "andres@mkir.com",
          "avatar": "empty",
          "isActive": true,
          "password": "$2b$10$kzdeRSS.zhH/yiTToKLLkuc.JmddE0wHc8eSIlaJrWuozIbBDVHP.",
          "passwordResetToken": null,
          "passwordResetExpires": null
      },
      "VehicleTypes": {
          "id": 2,
          "name": "Luxury vehicle",
          "seats": 3,
          "luggage": "25 lts",
          "feeBase": 150,
          "isActive": true
      }
  },
  {
      "id": 9,
      "driverID": 3,
      "vehicleTypeID": 3,
      "image": "https://cdn.imagin.studio/getImage?&customer=counivalle&make=chevrolet&modelFamily=aveo&modelRange=aveo&modelVariant=ha&modelYear=2016&powerTrain=petrol&transmission=0&bodySize=5&trim=eu&paintId=pspc0016&angle=01",
      "mark": "Chevrolet",
      "line": "Aveo",
      "model": 2016,
      "plates": "192847",
      "isAvailable": true,
      "isActive": true,
      "Users": {
          "id": 3,
          "name": "Andres",
          "lastname": "Lopez",
          "email": "andres@mkir.com",
          "avatar": "empty",
          "isActive": true,
          "password": "$2b$10$kzdeRSS.zhH/yiTToKLLkuc.JmddE0wHc8eSIlaJrWuozIbBDVHP.",
          "passwordResetToken": null,
          "passwordResetExpires": null
      },
      "VehicleTypes": {
          "id": 3,
          "name": "Economic vehicle",
          "seats": 4,
          "luggage": "10 lts",
          "feeBase": 80,
          "isActive": true
      }
  },
  {
      "id": 10,
      "driverID": 3,
      "vehicleTypeID": 3,
      "image": "https://cdn.imagin.studio/getImage?&customer=counivalle&make=renault&modelFamily=symbol&modelRange=symbol&modelVariant=sa&modelYear=2018&powerTrain=fossil&transmission=0&bodySize=4&trim=eu&paintId=pspc0016&angle=01",
      "mark": "Renault",
      "line": "Symbol",
      "model": 2018,
      "plates": "192846",
      "isAvailable": true,
      "isActive": true,
      "Users": {
          "id": 3,
          "name": "Andres",
          "lastname": "Lopez",
          "email": "andres@mkir.com",
          "avatar": "empty",
          "isActive": true,
          "password": "$2b$10$kzdeRSS.zhH/yiTToKLLkuc.JmddE0wHc8eSIlaJrWuozIbBDVHP.",
          "passwordResetToken": null,
          "passwordResetExpires": null
      },
      "VehicleTypes": {
          "id": 3,
          "name": "Economic vehicle",
          "seats": 4,
          "luggage": "10 lts",
          "feeBase": 80,
          "isActive": true
      }
  },
  {
      "id": 11,
      "driverID": 3,
      "vehicleTypeID": 3,
      "image": "https://cdn.imagin.studio/getImage?&customer=counivalle&make=volkswagen&modelFamily=golf&modelRange=e-golf&modelVariant=ha&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0016&angle=01",
      "mark": "Volskwagen",
      "line": "Golf",
      "model": 2020,
      "plates": "192848",
      "isAvailable": true,
      "isActive": true,
      "Users": {
          "id": 3,
          "name": "Andres",
          "lastname": "Lopez",
          "email": "andres@mkir.com",
          "avatar": "empty",
          "isActive": true,
          "password": "$2b$10$kzdeRSS.zhH/yiTToKLLkuc.JmddE0wHc8eSIlaJrWuozIbBDVHP.",
          "passwordResetToken": null,
          "passwordResetExpires": null
      },
      "VehicleTypes": {
          "id": 3,
          "name": "Economic vehicle",
          "seats": 4,
          "luggage": "10 lts",
          "feeBase": 80,
          "isActive": true
      }
  },
  {
      "id": 12,
      "driverID": 3,
      "vehicleTypeID": 3,
      "image": "https://cdn.imagin.studio/getImage?&customer=counivalle&make=ford&modelFamily=fiesta&modelRange=fiesta&modelVariant=ha&modelYear=2022&powerTrain=fossil&transmission=0&bodySize=3&trim=eu&paintId=pspc0016&angle=01",
      "mark": "Ford",
      "line": "Fiesta",
      "model": 2020,
      "plates": "192849",
      "isAvailable": true,
      "isActive": true,
      "Users": {
          "id": 3,
          "name": "Andres",
          "lastname": "Lopez",
          "email": "andres@mkir.com",
          "avatar": "empty",
          "isActive": true,
          "password": "$2b$10$kzdeRSS.zhH/yiTToKLLkuc.JmddE0wHc8eSIlaJrWuozIbBDVHP.",
          "passwordResetToken": null,
          "passwordResetExpires": null
      },
      "VehicleTypes": {
          "id": 3,
          "name": "Economic vehicle",
          "seats": 4,
          "luggage": "10 lts",
          "feeBase": 80,
          "isActive": true
      }
  }
];

const Example = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'mark'+'line', //access nested data with dot notation
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
        accessorKey: 'VehicleTypes.feeBase',
        header: 'Price per KM',
      },
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default Example;

