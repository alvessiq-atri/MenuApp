import React, { useState, useMemo, useEffect } from "react";
import { Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import TableData from "./table-data";

function Menu() {
  const style = { width: "200px", whiteSpace: "normal" };
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
          accessor: "ingredients",
          Cell: (props) => {
            return props.row.values.ingredients.join(", ");
          },
        },
        {
          Header: "Button",
          accessor: "id",
          Cell: (props) => {
            return (
              <Button
                style={style}
                href={"/" + props.row.values.id}
                color="warning"
              >
                Edit {props.row.values.name}
              </Button>
            );
          },
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

  const [data, setData] = useState([]);
  useMemo(
    () =>
      (async () => {
        const result = await axios("/menu");
        setData(result.data);
      })(),
    []
  );

  // Using useEffect to call the API once mounted and set the data
  // useEffect(() => {
  //   (async () => {
  //     const result = await axios("/menu");
  //     setData(result.data);
  //   })();
  // }, []);

  return (
    <div className="m-5">
      <Col
        md={{
          offset: 2,
          size: 8,
        }}
        sm="12"
      >
        <TableData columns={columns} data={data} />
      </Col>
    </div>
  );
}

export default Menu;
