import { useNavigate } from 'react-router-dom';
import { URI_LIST } from '../../app/consts';

const Home = () => {
  const navigate = useNavigate();
  const handleFabClick = () => navigate(URI_LIST.SHOP);
  return (
    <>
      <div>this is home</div>
      <div onClick={handleFabClick}>
        Navigate
      </div>
    </>
  );
};

export default Home;