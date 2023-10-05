import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../services/userAPI';

function Header() {
  const [load, setLoad] = useState(true);
  const [user, setUser] = useState('');
  useEffect(() => {
    const userName = async () => {
      const data = await getUser();
      setUser(data.name);
      setLoad(false);
      console.log(data);
    };
    userName();
  }, []);

  return load ? <h1>Carregando...</h1> : (
    <header data-testid="header-component">
      <h1 data-testid="header-user-name">{user}</h1>
      <nav>
        <NavLink to="/search" data-testid="link-to-search">Pesquisar</NavLink>
        <NavLink to="/favorites" data-testid="link-to-favorites">Favoritos</NavLink>
        <NavLink to="/profile" data-testid="link-to-profile">Perfil</NavLink>
      </nav>
    </header>
  );
}
export default Header;
