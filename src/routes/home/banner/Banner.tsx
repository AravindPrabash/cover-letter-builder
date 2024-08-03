import Slider from '../../../components/common/slider/Slider';
import styles from './banner.module.scss';

const Banner = () => (
  <div className={`${styles.banner} bg-slate-50 dark:bg-slate-950 grid`}>
    <Slider />
  </div>
);

export default Banner;