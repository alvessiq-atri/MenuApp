import React from "react";
import {
  FormGroup,
  Label,
  CardTitle,
  CardBody,
  Card,
  CardText,
} from "reactstrap";

export default function FoodCard({ register, data, title }) {
  // console.log(data);
  return (
    <Card>
      {/* <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            /> */}
      <CardBody>
        <CardTitle tag="h5" className="d-flex justify-content-center">
          {title}
        </CardTitle>
        <CardText>
          {data.map((c) => (
            <FormGroup className="d-flex justify-content-center">
              <input type="checkbox" value={c} name={c} {...register} />
              <Label key={c}>{c}</Label>
            </FormGroup>
          ))}
        </CardText>
      </CardBody>
    </Card>
  );
}
