import { useState } from "react";
import Porta from "../components/Porta";
import Presente from "../components/Presente";
import Door from "../model/door";

export default function Home() {
  const [p1, setP1] = useState(new Door(1));

  return (
    <div style={{ display: "flex" }}>
      <Porta porta={p1} />
    </div>
  );
}
