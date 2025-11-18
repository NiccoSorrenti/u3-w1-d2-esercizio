import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyWelcome from './components/MyWelcome';
import AllTheBooks from './components/AllTheBooks';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <MyNavbar />
      <Container>
        <MyWelcome />
        <AllTheBooks />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
