import Slider from '../../../components/common/slider/Slider';
import styles from './banner.module.scss';

const Banner = () => (
  <>
    <div className="bg-slate-100 pt-10 pb-1 flex flex-col">
      <h1 className="text-center text-5xl font-normal mb-4">Fashion fades, but style is eternal.</h1>
      <h1 className="text-center text-2xl font-thin mb-8">Explore our elegant collection today.</h1>
      <div className="flex gap-4 justify-center">
        <button className="bg-slate-100 border-cyan-500 border px-4 h-10 text-lg py-1 rounded text-slate-900">About Shop</button>
        <button className="bg-cyan-400 border-cyan-500 border px-4 h-10 text-lg py-1 rounded text-slate-900">Shop Now</button>
      </div>
    </div>
    <div className={`${styles.banner} relative`}>
      <div className={`${styles.backdrop} absolute top-0 left-0 w-full bg-slate-100 dark:bg-slate-950`} />
      <Slider />
    </div>
  </>
);

export default Banner;