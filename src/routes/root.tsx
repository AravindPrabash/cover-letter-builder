import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

export default function Root() {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ pt: 3 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}