import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { Download, Square, SquareCheck } from "lucide-react";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;
  if (!data) return null;

  const { id, name, imageUrl, isWallpaper } = data;

  const wallpaperId = localStorage.getItem("wallpaperId");

  const setAsWallpaper = () => {
    window.location.reload();
    localStorage.setItem("wallpaperId", id);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>

        {isWallpaper && (
          <div className="flex items-center gap-1">
            {wallpaperId == id ? (
              <SquareCheck className="cursor-pointer icon" />
            ) : (
              <Square
                className="cursor-pointer icon"
                title="Set as wallpaper"
                onClick={() => setAsWallpaper()}
                onTouchStart={() => setAsWallpaper()}
              />
            )}
            <a
              href={imageUrl}
              download
              className="cursor-pointer"
              title={`Download ${name}`}
            >
              <Download className="icon" />
            </a>
          </div>
        )}
      </div>

      <div className="p-5 bg-white">
        {imageUrl ? (
          <div className="w-full">
            <img
              src={imageUrl}
              alt={name}
              className="w-auto m-auto max-h-96 h-auto rounded-lg object-contain"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

const ImageWrapper = WindowWrapper(Image, "imgfile");

export default ImageWrapper;
