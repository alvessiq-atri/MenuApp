import React from "react";
import EditIngredients from "../components/edit-ingredients";
import Menu from "../components/menu";

export default function Homepage() {
  return (
    <div>
      <Menu />
      <EditIngredients />
    </div>
  );
}
