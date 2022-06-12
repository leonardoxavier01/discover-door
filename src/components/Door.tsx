import DoorModel from "../model/doorModel";
import styles from "../styles/Door.module.css";
import Gift from "./Gift";

interface PortaProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

const Door = (props: PortaProps) => {
  const door = props.value;
  const selected = door.selected && !door.open ? styles.selected : "";

  const alterSelection = (e) => props.onChange(door.alterSelection());

  const willOpen = (e) => {
    e.stopPropagation();
    props.onChange(door.willOpen());
  };

  const renderPorta = () => {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.doorhandle} onClick={willOpen}></div>
      </div>
    );
  };

  return (
    <div className={styles.area} onClick={alterSelection}>
      <div className={`${styles.structure} ${selected}`}>
        {door.closed ? renderPorta() : door.haveGift ? <Gift /> : false}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
