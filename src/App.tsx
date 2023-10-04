import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Search from './components/search';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
        {/* <Route path="/album/:id" element={ } /> */}
      </Routes>
    </>
  );
}

export default App;
