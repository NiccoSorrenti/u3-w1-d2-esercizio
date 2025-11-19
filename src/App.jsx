import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyWelcome from './components/MyWelcome';
import AllTheBooks from './components/AllTheBooks';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';
import { Container } from 'react-bootstrap';
import fantasy from './data/fantasy.json';

function App() {
  return (
    <>
      <MyNavbar />
      <Container>
        <MyWelcome />
        <SingleBook
          title={fantasy[0].title}
          imgUrl={fantasy[0].img}
          description={fantasy[0].category}
        />
        <BookList />
        <AllTheBooks />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
