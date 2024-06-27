import { Fab } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useNavigate } from 'react-router-dom';
import { URI_LIST } from '../../app/consts';

const Home = () => {
  const navigate = useNavigate();
  const handleFabClick = () => navigate(URI_LIST.COVER_LETTER_GENERATOR);
  return (
    <>
      <div>this is home</div>
      <Fab onClick={handleFabClick} variant="extended">
        <AutoAwesomeIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
    </>
  );
};

export default Home;