import { useState } from 'react';
import checkedImg from '../../images/checked_heart.png';
import emptyCheck from '../../images/empty_heart.png';
import { SongType } from '../../types';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';

type MusicProps = {
  music: SongType
};

function MusicCard({ music }: MusicProps) {
  const { trackName, previewUrl, trackId } = music;
  const [isChecked, setIsChecked] = useState(false);

  const addRemove = async () => {
    setIsChecked((check) => !check);
    if (!isChecked) {
      await addSong(music);
    } else {
      await removeSong(music);
    }
  };
  // isChecked ? addSong(music) : removeSong(music);
  return (
    <div>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        {' '}
        <code>{ trackName }</code>
      </audio>
      <label
        htmlFor={ JSON.stringify(trackId) }
        data-testid={ `checkbox-music-${trackId}` }
      >
        <input
          onChange={ addRemove }
          checked={ isChecked }
          type="checkbox"
          name="favorite"
          id={ JSON.stringify(trackId) }
        />
        {isChecked
          ? <img src={ checkedImg } alt="favorite" />
          : <img src={ emptyCheck } alt="favorite" /> }
      </label>
    </div>
  );
}
export default MusicCard;
