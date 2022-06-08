import styles from "../styles/Porta.module.css";

const Porta = (props) => {
  const selected = props.selected ? styles.selected : "";

  return (
    <div className={styles.area}>
      <div className={`${styles.structure} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.number}>3</div>
          <div className={styles.doorhandle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Porta;
