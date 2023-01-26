import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditMenuCard from "../components/edit-menu-card";

export default function EditMenu() {
  let { plateId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const result = await axios.get("/menu/" + plateId);
      //   console.log(result.data);
      setData(result.data);
    })();
  }, [plateId]);
  //   console.log(data);
  return (
    <div>
      <h3 className="d-flex justify-content-center m-3">Edit plate:</h3>
      {data ? <EditMenuCard data={data} /> : null}
    </div>
  );
}
