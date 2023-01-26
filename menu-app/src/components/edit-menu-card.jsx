import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import FoodForm from "./food-form.jsx";
import { MDBBtn } from "mdb-react-ui-kit";

export default function EditMenuCard({ data }) {
  const [plate, setPlate] = useState({});
  const navigate = useNavigate();
  // const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);

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
      const result = await axios.delete("/menu/" + plate.id, data);
      console.log(result);
    })();
    navigate("/");
  };

  const onSubmit = (data) => {
    console.log(data.ingredients);
    if (data.ingredients.length === 0) {
      console.log(data);
      alert("Add Ingredients");
      // setModal(true);
    } else {
      console.log(data);
      (async () => {
        const result = await axios.put("/menu/" + plate.id, data);
        console.log(result);
      })();
      navigate("/");
    }
  };

  return (
    <>
      {/* <AlertModal toggle={toggle} modal={modal} /> */}
      <MDBBtn className="mb-3" color="warning" onClick={onDeleteClick}>
        Delete Plate
      </MDBBtn>
      <FoodForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
