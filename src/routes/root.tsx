import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

export default function Root() {
  return (
    <>
      <Container>
      </Container>
      <Header />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
}