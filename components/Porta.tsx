import Door from "../model/door";
import styles from "../styles/Porta.module.css";

interface PortaProps {
  porta: Door;
}

const Porta = (props: PortaProps) => {
  const { porta } = props;
  const selected = porta.selected ? styles.selected : "";

  return (
    <div className={styles.area}>
      <div className={`${styles.structure} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.number}>{porta.number}</div>
          <div className={styles.doorhandle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Porta;
