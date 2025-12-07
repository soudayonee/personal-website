import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";

const Playlist = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="playlist" />
        <h2>Apple Music</h2>
      </div>

      {/* Apple music library */}
      {/* <div className="flex h-full bg-white">
        <div className="sidebar">
          {renderList("Locations", Object.values(locations))}
        </div>
      </div> */}

      <div className="bg-white rounded-b-lg max-w-[740px] mx-auto">
        <iframe
          lang="en"
          title="Apple Music Playlist - Favorite Songs"
          allow="encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="450px"
          className="w-full sm:w-[740px] overflow-hidden rounded-bl-lg rounded-br-lg"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/jp/playlist/favorite-songs/pl.u-lxUM6BMML8?l=en&app=music&autoplay=1"
        ></iframe>
      </div>
    </>
  );
};

const PlaylistWindow = WindowWrapper(Playlist, "playlist");

export default PlaylistWindow;
