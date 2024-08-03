import styles from './banner.module.scss';

const Banner = () => (
  <div className={`${styles.banner} bg-slate-50 dark:bg-slate-950 grid`}>
    <h1 className="self-center text-center text-4xl text-gray-400 dark:text-slate-800">Hero Banner</h1>
  </div>
);

export default Banner;