import { useState } from 'react';
import checkedImg from '../../images/checked_heart.png';
import emptyCheck from '../../images/empty_heart.png';
// ./src/images/empty_heart.png'
type MusicProps = {
  trackName: string;
  previewUrl: string;
  trackId: number;
};

function MusicCard({ trackName, previewUrl, trackId }: MusicProps) {
  const [isChecked, setIsChecked] = useState(false);

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
          onChange={ () => setIsChecked((check) => !check) }
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
