import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return(
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
