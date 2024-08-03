import { ReactElement, useEffect, useState } from 'react';
import styles from './slider.module.scss';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

const items = [0, 1, 2, 3, 4];

const ArrowButton = (props: { action: VoidFunction, children: ReactElement}) => {
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
        <div
          className={`absolute h-full w-full top-0 left-0 bg-green-200 transition-opacity duration-500 ease-in-out ${
            activeIndex === i ? 'opacity-100' : 'opacity-0'
          }`}
          key={i}
        >
          {item}
        </div>
      ))}
      <div className="absolute flex justify-between gap-4 z-10 w-full bottom-1/4 left-1/2 -translate-x-1/2 max-w-screen-lg">
        <ArrowButton action={() => handleNextOrPrevious(false)}>
          <ArrowLeft />
        </ArrowButton>
        <ArrowButton action={() => handleNextOrPrevious(true)}>
          <ArrowRight />
        </ArrowButton>
      </div>
      <div className="absolute flex justify-center gap-2 w-full bottom-2 left-0">
        {Array.from({ length: items.length }).map((_dot, i) => (
          <div key={i} onClick={() => setActiveIndex(i)} className={`w-2 h-2 cursor-pointer transition-colors duration-500 ease-in-out rounded-full bg-white ${i === activeIndex ? 'bg-opacity-100' : 'bg-opacity-25'}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
