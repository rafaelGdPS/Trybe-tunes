type MusicProps = {
  trackName: string;
  previewUrl: string;
};

function MusicCard({ trackName, previewUrl }: MusicProps) {
  return (
    <div>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        { trackName }
      </audio>
    </div>
  );
}
export default MusicCard;
