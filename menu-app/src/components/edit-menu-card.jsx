import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Form, CardGroup, Label } from "reactstrap";
import sides from "../food-data/sides.js";
import protein from "../food-data/protein.js";
import veggies from "../food-data/greens-veggies";
import axios from "axios";
import FoodCard from "./food-card.jsx";

export default function EditMenuCard({ data }) {
  const [plate, setPlate] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setPlate(data);
    // console.log(plate);
    reset(data);
  }, [data]);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      plate,
    },
  });

  const onDeleteClick = () => {
    console.log("inside the ondeleteClick");
    (async () => {
      const result = await axios.delete(
        "http://localhost:8000/menu/" + plate.id,
        data
      );
      console.log(result);
    })();
    navigate("/");
  };

  const onSubmit = (data) => {
    console.log(data);
    // (async () => {
    //   const result = await axios.put(
    //     "http://localhost:8000/menu/" + plate.id,
    //     data
    //   );
    //   console.log(result);
    // })();
  };

  return (
    <div>
      {/* This is plate with id: {plate.id}.<h1> {plate.name}</h1>
      <h2>Ingredients are: {plate.ingredients + ""}</h2>
      <h2>Vovo's fav: {plate.vovofav}</h2> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Name:
          <input id="namePlate" name={plate.name} {...register("name")}></input>
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
            id="vovofav"
            value="no"
            name={"no"}
            {...register("vovofav")}
            type="radio"
          />
        </Label>
        {/* <input
          id="vovofav"
          name={plate.vovofav}
          {...register("vovofav")}
        ></input> */}
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
      <br></br>
      <Button color="warning" onClick={onDeleteClick}>
        Delete Plate
      </Button>
    </div>
  );
}
