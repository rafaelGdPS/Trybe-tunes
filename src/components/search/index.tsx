import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputValue } from '../../types/types';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { AlbumType } from '../../types';

const initialSearch = {
  name: '',
};

function Search() {
  const [inputSearch, setInputSearch] = useState<InputValue>(initialSearch);
  const [isLoad, setIsLoad] = useState(false);
  const [result, setResult] = useState(false);
  const [albuns, setAlbuns] = useState<AlbumType[]>([]);
  const disable = inputSearch.name.length < 2;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputSearch({
      ...inputSearch,
      [name]: value,
    });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoad(true);
    const resultApi = await searchAlbumsAPI(inputSearch.name);
    setResult(true);
    setAlbuns(resultApi);
    setIsLoad(false);
  };
  if (isLoad) {
    return <h2>Carregando...</h2>;
  }

  return (
    <>
      <form action="" onSubmit={ handleSubmit }>
        <label htmlFor="input-search">
          Digite nome da banda ou artista:
          <input
            id="input-search"
            name="name"
            onChange={ handleSearch }
            type="text"
            data-testid="search-artist-input"
          />
        </label>
        <button
          disabled={ disable }
          type="submit"
          data-testid="search-artist-button"
        >
          Pesquisar

        </button>
      </form>
      {result
      && (
        <div>
          <h1>
            Resultado de álbuns de:
            {' '}
            {inputSearch.name}
            {' '}
          </h1>
          {albuns.length === 0
            ? <h1>Nenhum álbum foi encontrado</h1> : albuns.map((albun) => (

              <div
                key={ albun.artistId }

              >
                <h3>{albun.collectionName}</h3>
                <p>{albun.artistName}</p>
                <Link
                  to={ `/album/${albun.collectionId}` }
                  data-testid={ `link-to-album-${albun.collectionId}` }
                >
                  Musicas

                </Link>
              </div>
            ))}
        </div>)}
    </>
  );
}

export default Search;
