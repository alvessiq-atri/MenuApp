import React from "react";
import { Form, Label, Button } from "reactstrap";
import sides from "../food-data/sides.js";
import protein from "../food-data/protein.js";
import veggies from "../food-data/greens-veggies";
import FoodCard from "../components/food-card";
import { MDBRow } from "mdb-react-ui-kit";

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
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Name:
          <input required id="namePlate" {...register("name")}></input>
        </Label>
        <br></br>
        <Label className="m-3">Vovó's Fav:</Label>
        <Label>
          Yes
          <input
            id="vovofav"
            value="yes"
            name={"yes"}
            {...register("vovofav")}
            type="radio"
          />
        </Label>
        <Label className="m-3">
          No
          <input
            defaultChecked
            id="vovofav"
            value="no"
            name={"no"}
            {...register("vovofav")}
            type="radio"
          />
        </Label>
        <MDBRow className="mt-3 ms-1">
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
