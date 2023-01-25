import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import { Button, Table, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function MenuData({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <Table striped {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th scope="row" {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function Menu() {
  const columns = [
    {
      Header: "MENU",
      columns: [
        {
          Header: "ID",
          accessor: (row) => <Link to={"/" + row.id}>{row.id}</Link>,
        },
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Vovos Fav",
          accessor: "vovofav",
        },
        {
          Header: "Ingredients",
          accessor: (row) => row.ingredients + " ",
        },
        {
          Header: "Button",
          accessor: (row) => (
            <Button href={"/" + row.id} color="warning">
              Edit {row.name}
            </Button>
          ),
        },
        // {
        //   Header: "Image",
        //   accessor: "image",
        //   Cell: (props) => (
        //     <img src={props.row.original.image} width={100} alt="Food" />
        //   ),
        // },
      ],
    },
  ];

  //   const data = useMemo(() => menuTest, [menuTest]);
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:3010/menu");
      setData(result.data);
    })();
  }, []);

  return (
    <Row>
      <Col
        className="bg-light border"
        md={{
          offset: 2,
          size: 8,
        }}
        sm="12"
      >
        <MenuData columns={columns} data={data} />
      </Col>
    </Row>
  );
}

export default Menu;
