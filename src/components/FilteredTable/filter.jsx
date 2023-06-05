import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    name: {
      carMark: 'some car',
      carModel: 'some model',
    },
    image: "https://rb.gy/wn2fl",
    passengers: 5,
    carType: 'Sedan',
  },
  {
    name: {
      carMark: 'Mercedez',
      carModel: 'bussines',
    },
    image: "https://rb.gy/wn2fl",
    passengers: 3,
    carType: 'mini',
  },
];

const Example = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.carMark', //access nested data with dot notation
        header: 'Car Name',
      },
      {
        accessorKey: 'name.carModel',
        header: 'Car Model',
      },
      {
        accessorKey: 'image', //normal accessorKey
        header: 'image',
      },
      {
        accessorKey: 'passengers',
        header: 'Passengers',
      },
      {
        accessorKey: 'carType',
        header: 'Car Type',
      },
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default Example;
