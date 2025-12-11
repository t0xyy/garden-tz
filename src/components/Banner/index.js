import styles from "./Banner.module.css";
import banner from "../../assets/banner.png";


export default function Banner() {
  return (
    <div className={styles.banner}>
      <img src={banner} alt="banner" />
      <div className={styles.text}>
        <h1>Amazing Discounts on Garden Products!</h1>
        <button>Check out</button>
      </div>
    </div>
  );
}
