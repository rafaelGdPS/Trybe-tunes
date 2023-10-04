import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMusics from '../../services/musicsAPI';
import { AlbumType, SongType } from '../../types';

const initialAlbumType = {
  artistId: 0,
  artistName: '',
  collectionId: 0,
  collectionName: '',
  collectionPrice: 0,
  artworkUrl100: '',
  releaseDate: '',
  trackCount: 0,
};

function Album() {
  const { id } = useParams();
  const [load, setLoad] = useState(false);
  const [artist, setArtist] = useState<AlbumType>(initialAlbumType);
  const [music, SetMusic] = useState<SongType[]>([]);
  console.log(artist);

  useEffect(() => {
    if (id) {
      setLoad(true);
      const musicsData = async () => {
        const response = await getMusics(id);
        const [albumType, ...song] = response;

        setArtist(albumType);

        SetMusic(song);
      };
      musicsData();

      setLoad(false);
    }
  }, []);
  if (load) {
    return <h1>Carregando...</h1>;
  }
  return (
    <div>
      <h1 data-testid="artist-name">{ artist.artistName }</h1>
      <h2 data-testid="album-name">{artist.collectionName}</h2>
    </div>
  );
}

export default Album;
