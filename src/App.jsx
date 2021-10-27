import './Styles/reset.css';

import { Routes } from './Routes/router';
import { Container } from './Styles/style';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export function App() {
  return (
    <Container>
      <Routes />
      <ToastContainer autoClose={3000} />
    </Container>
  )
}