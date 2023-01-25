import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  ButtonGroup,
  Button,
  Form,
  CardGroup,
  Label,
  Row,
  Col,
} from "reactstrap";
import sides from "../food-data/sides.js";
import protein from "../food-data/protein.js";
import veggies from "../food-data/greens-veggies";
import axios from "axios";
import FoodCard from "./food-card.jsx";
import AlertModal from "./alert-modal.jsx";

export default function EditMenuCard({ data }) {
  const [plate, setPlate] = useState({});
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

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
        "http://localhost:3010/menu/" + plate.id,
        data
      );
      console.log(result);
    })();
    navigate("/");
  };

  const onSubmit = (data) => {
    if (data.ingredients.length === 0) {
      console.log(data);
      setModal(true);
    } else {
      console.log(data);
      (async () => {
        const result = await axios.put(
          "http://localhost:3010/menu/" + plate.id,
          data
        );
        console.log(result);
      })();
      navigate("/");
    }
  };

  return (
    <div>
      {/* This is plate with id: {plate.id}.<h1> {plate.name}</h1>
      <h2>Ingredients are: {plate.ingredients + ""}</h2>
      <h2>Vovo's fav: {plate.vovofav}</h2> */}
      <AlertModal toggle={toggle} modal={modal} />
      <Button color="warning" onClick={onDeleteClick}>
        Delete Plate
      </Button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Col
          className="d-flex justify-content-center"
          md={{
            offset: 2,
            size: 8,
          }}
          sm="12"
        >
          <Label size="lg">
            Name:
            <input
              required
              id="namePlate"
              name={plate.name}
              {...register("name")}
            ></input>
          </Label>
          {/* <br></br> */}
        </Col>
        <Col className="d-flex justify-content-center">
          {/* <ButtonGroup>
            <Button
              color="primary"
              outline
              onClick={() => console.log("1")}
              // active={rSelected === 1}
            >
              Radio 1
            </Button>
            <Button
              color="primary"
              outline
              onClick={() => console.log("2")}
              // active={rSelected === 2}
            >
              Radio 2
            </Button>
          </ButtonGroup> */}
          <Label style={{ fontWeight: "bold" }} size="lg">
            Vovó's Fav:
          </Label>
          <Label size="lg">
            Yes
            <input
              id="vovofav"
              value="yes"
              name={"yes"}
              {...register("vovofav")}
              type="radio"
            />
          </Label>
          <Label size="lg">
            No
            <input
              id="vovofav"
              value="no"
              name={"no"}
              {...register("vovofav")}
              type="radio"
            />
          </Label>
        </Col>
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
        <Col className="d-flex justify-content-center">
          <Button type="submit" color="warning">
            Submit
          </Button>
        </Col>
      </Form>
      <br></br>
    </div>
  );
}
