import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Search from './components/search';
import Album from './components/album';
import Layout from './components/layout';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route element={ <Layout /> }>
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
        </Route>
      </Routes>

    </>
  );
}

export default App;
