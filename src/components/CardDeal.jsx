import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Best for our <br className="sm:block hidden" /> Partners & Teams.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      ProwessSoft prioritizes value, benefiting partners and our global team of 350+. Our open culture fosters personal growth and client success. With deep industry insights and decades of expertise, we offer tailored integration services, enabling clients to thrive in the digital landscape.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
