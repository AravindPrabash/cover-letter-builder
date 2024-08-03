import { ReactElement, ReactNode, useEffect, useState } from 'react';
import styles from './slider.module.scss';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import shoe1 from '../../../assets/slider/—Pngtree—sneakers running shoes color_9145069.png';
import shoe2 from '../../../assets/slider/nike-free-nike-air-max-sneakers-shoe-red-shoes-78c3ee1eb5170ce50ef0c55755e33899.png';

const products = [
  {
    price: 100,
    id: 'test1',
    img: shoe1,
  },
  {
    price: 200,
    id: 'test2',
    img: shoe2,
  }
];

const items = products.map((product) => (
  <img className="block w-1/3 mx-auto" src={product.img} key={product.id} />
));

const Slide = (props: { active: boolean, children: ReactNode }) => {
  const { active, children } = props;
  return (
    <div
      className={`absolute h-full w-full top-0 left-0 transition-opacity duration-500 ease-in-out ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

const ArrowButton = (props: { action: VoidFunction, children: ReactElement }) => {
  const { action, children } = props;
  return (
    <button
      className="grid place-content-center rounded-full transition-colors duration-500 ease-in-out backdrop-blur bg-white w-8 h-8 bg-opacity-50 hover:bg-opacity-75"
      type="button" onClick={action}>
      {children}
    </button>
  );
};

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextOrPrevious = (next: boolean) => {
    setActiveIndex((prevIndex) => {
      const itemCount = items.length;
      if (next) {
        return (prevIndex + 1) % itemCount;
      } else {
        return (prevIndex - 1 + itemCount) % itemCount;
      }
    });
  };

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <div className={`${styles.wrapper} h-full flex relative`}>
      {items.map((item, i) => (
        <Slide active={i === activeIndex} key={`slide_${i}`}>
          {item}
        </Slide>
      ))}
      <div className="absolute flex justify-between gap-4 z-10 w-full bottom-1/4 left-1/2 -translate-x-1/2 max-w-screen-md">
        <ArrowButton action={() => handleNextOrPrevious(false)}>
          <ArrowLeft />
        </ArrowButton>
        <ArrowButton action={() => handleNextOrPrevious(true)}>
          <ArrowRight />
        </ArrowButton>
      </div>
      <div className="absolute flex justify-center gap-2 w-full -bottom-4 left-0">
        {Array.from({ length: items.length }).map((_dot, i) => (
          <div key={`dot_${i}`} onClick={() => setActiveIndex(i)} className={`w-2 h-2 cursor-pointer transition-all duration-500 ease-in-out rounded-full bg-slate-900 ${i === activeIndex ? 'bg-opacity-100 scale-150' : 'bg-opacity-25'}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
