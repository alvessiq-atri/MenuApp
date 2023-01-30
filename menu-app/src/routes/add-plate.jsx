import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import FoodForm from "../components/food-form.jsx";

export default function AddPlate() {
  const { register, handleSubmit } = useForm({});
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data.ingredients);
    if (data.ingredients.length === 0 || data.ingredients === false) {
      console.log(data);
      alert("Add Ingredients");
      // setModal(true);
    } else {
      console.log(data);
      (async () => {
        const result = await axios.post("/menu/", data);
        console.log(result);
      })();

      navigate("/");
    }
  };

  return (
    <>
      <h3 className="d-flex justify-content-center m-3">ADD PLATE</h3>
      <FoodForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
