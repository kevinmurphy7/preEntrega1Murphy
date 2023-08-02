import Main from './components/Main';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return(
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido/a a nuestra tienda"}/>
      <Main />
      <Footer />
    </>
  );
}

export default App;
