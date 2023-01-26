import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function FoodCard({ register, data, title }) {
  // console.log(data);
  return (
    // <MDBContainer className="border border-warning">
    <MDBCol className="border border-warning" size="6" sm="4">
      <p className="text-center fs-2">{title}</p>

      {data.map((c) => (
        <MDBRow key={c}>
          <div className="item">
            <label key={c}>
              <input type="checkbox" value={c} name={c} {...register} />
              {c}
            </label>
          </div>
        </MDBRow>
      ))}
    </MDBCol>
  );
}
