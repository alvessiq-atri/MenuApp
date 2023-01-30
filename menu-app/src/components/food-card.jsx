import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../food_form.css";

export default function FoodCard({ register, data, title }) {
  // console.log(data);
  return (
    // <MDBContainer className="border border-warning">

    <MDBCol
      className="border m-3"
      md={{
        offset: 3,
        size: "auto",
      }}
      sm="3"
    >
      <p className="title">{title.toUpperCase()}</p>

      {data.map((c) => (
        // <MDBRow key={c}>
        //   <MDBCol>
        <div key={c} className="item">
          <label className="label-name-check" key={c}>
            <input
              className="me-2"
              type="checkbox"
              value={c}
              name={c}
              {...register}
            />
            {c}
          </label>
        </div>
        //   </MDBCol>
        // </MDBRow>
      ))}
    </MDBCol>
  );
}
