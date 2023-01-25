import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Form, CardGroup, Label } from "reactstrap";
import sides from "../food-data/sides.js";
import protein from "../food-data/protein.js";
import veggies from "../food-data/greens-veggies";
import FoodCard from "../components/food-card";
import axios from "axios";

export default function AddPlate() {
  const { register, handleSubmit } = useForm({});
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    (async () => {
      const result = await axios.post("http://localhost:3010/menu/", data);
      console.log(result);
    })();

    navigate("/");
  };

  return (
    <div>
      {/* This is plate with id: {plate.id}.<h1> {plate.name}</h1>
        <h2>Ingredients are: {plate.ingredients + ""}</h2>
        <h2>Vovo's fav: {plate.vovofav}</h2> */}
      <h3 className="d-flex justify-content-center">Add plate:</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Name:
          <input required id="namePlate" {...register("name")}></input>
        </Label>
        <br></br>
        <Label>Vovó's Fav:</Label>
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
        <Label>
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
        <CardGroup>
          <FoodCard
            register={{ ...register("ingredients") }}
            title={"Protein"}
            data={protein}
          ></FoodCard>
          <FoodCard
            register={{ ...register("ingredients") }}
            title={"Sides"}
            data={sides}
          ></FoodCard>
          <FoodCard
            register={{ ...register("ingredients") }}
            title={"Greens + Veggies"}
            data={veggies}
          ></FoodCard>
        </CardGroup>
        <Button type="submit" color="warning">
          Submit
        </Button>
      </Form>
    </div>
  );
}
