import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/doors";
import Link from "../../../../node_modules/next/link";
import { useRouter } from "../../../../node_modules/next/router";
import styles from "../../../styles/Game.module.css";

const Game = () => {
  const router = useRouter();
  const [valid, setValid] = useState(false);
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const doors = +router.query.doors;
    const haveGift = +router.query.haveGift;

    const doorsValid = doors >= 3 && doors <= 100;
    const haveGiftValid = haveGift >= 1 && haveGift <= doors;

    setValid(doorsValid && haveGiftValid);
  }, [doors, router.query.doors, router.query.haveGift]);

  useEffect(() => {
    const doors = +router.query.doors;
    const haveGift = +router.query.haveGift;
    setDoors(createDoors(doors, haveGift));
  }, [router?.query]);

  function renderDoors() {
    return (
      valid &&
      doors.map((door) => {
        return (
          <Door
            key={door.number}
            value={door}
            onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
          />
        );
      })
    );
  }
  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {valid ? renderDoors() : <h1>Valores inválidos</h1>}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
};

export default Game;
