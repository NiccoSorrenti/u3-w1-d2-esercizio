import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyWelcome from './components/MyWelcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <>
      <MyNavbar />
      <MyWelcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
