import Slider from '../../../components/common/slider/Slider';
import styles from './banner.module.scss';

const Banner = () => (
  <div className={`${styles.banner} relative`}>
    <div className={`${styles.backdrop} absolute top-0 left-0 w-full bg-slate-200 dark:bg-slate-950`} />
    <Slider />
  </div>
);

export default Banner;