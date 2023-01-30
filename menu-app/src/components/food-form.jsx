import React from "react";
import { Form, Label, Button, Row, Col } from "reactstrap";
import sides from "../food-data/sides.js";
import protein from "../food-data/protein.js";
import veggies from "../food-data/greens-veggies";
import FoodCard from "../components/food-card";
import { MDBRow } from "mdb-react-ui-kit";
import "../food_form.css";

export default function FoodForm({ onSubmit, register, handleSubmit }) {
  const ingredientsList = [
    {
      name: "Protein",
      list: protein,
    },
    {
      name: "Sides",
      list: sides,
    },
    {
      name: "Greens + Veggies",
      list: veggies,
    },
  ];
  const style = {
    fontSize: "20px",
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="d-flex justify-content-center">
          <Col className="border m-1" size="2" sm="4">
            <p className="parag m-4">
              IMPORTANT! <br></br> Plates require a name and at least one
              ingredient.
            </p>
          </Col>
          <Col className="border m-1" size="2" sm="4">
            <Row>
              <Label className="mt-3 label-name">
                Name:
                <input
                  className="ms-2"
                  required
                  id="namePlate"
                  {...register("name")}
                ></input>
              </Label>
            </Row>
            <Label className="m-3 label-name">Vovó's Fav:</Label>
            <Label style={style}>Yes</Label>
            <input
              id="vovofav"
              value="yes"
              name={"yes"}
              className="ms-1"
              {...register("vovofav")}
              type="radio"
            />

            <Label style={style} className="ms-3">
              No
            </Label>
            <input
              defaultChecked
              className="ms-1"
              id="vovofav"
              value="no"
              name={"no"}
              {...register("vovofav")}
              type="radio"
            />
          </Col>
        </Row>
        <MDBRow className="d-flex justify-content-center mt-3 ms-1">
          {ingredientsList.map((ingredients) => (
            <FoodCard
              key={ingredients.name}
              register={{ ...register("ingredients") }}
              title={ingredients.name}
              data={ingredients.list}
            />
          ))}
        </MDBRow>
        <Button type="submit" color="warning">
          Submit
        </Button>
      </Form>
    </div>
  );
}
