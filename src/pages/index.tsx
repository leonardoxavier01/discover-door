import { useState } from "react";
import Card from "../components/Card";
import NumericInput from "../components/NumericInput";
import Link from "../../node_modules/next/link";
import styles from "../styles/Form.module.css";

export default function Form() {
  const [amountDoor, setAmountDoor] = useState(3);
  const [withGift, setWithGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0342c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumericInput
            text="Quantidade de Portas?"
            value={amountDoor}
            onChange={(newAmount) => setAmountDoor(newAmount)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumericInput
            text="Porta com presente"
            value={withGift}
            onChange={(newDoorWithGift) => setWithGift(newDoorWithGift)}
          />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${amountDoor}/${withGift}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
