import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMusics from '../../services/musicsAPI';
import { AlbumType, SongType } from '../../types';
import MusicCard from '../music-card';

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
  const [load, setLoad] = useState(true);
  const [artist, setArtist] = useState<AlbumType>(initialAlbumType);
  const [musics, SetMusic] = useState<SongType[]>([]);
  console.log(artist);

  useEffect(() => {
    if (id) {
      const musicsData = async () => {
        const response = await getMusics(id);
        const [albumType, ...song] = response;

        setArtist(albumType);

        SetMusic(song);
        setLoad(false);
      };
      musicsData();
    }
  }, [id]);
  if (load) {
    return <h1>Carregando...</h1>;
  }
  return (
    <div>
      <h1 data-testid="artist-name">{ artist.artistName }</h1>
      <h2 data-testid="album-name">{artist.collectionName}</h2>
      {musics.map((music) => (

        <MusicCard
          key={ music.trackId }
          trackName={ music.trackName }
          previewUrl={ music.previewUrl }
        />
      ))}
    </div>
  );
}

export default Album;
