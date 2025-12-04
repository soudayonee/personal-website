import { WindowControls } from "#components";
import { photosLinks } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { usePhotosStore } from "#store/location";
import useWindowStore from "#store/window";
import { Mail, Search } from "lucide-react";

const Photos = () => {
  const { openWindow } = useWindowStore();
  const { activePhotos, setActivePhotos } = usePhotosStore();

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />

        <div className="flex items-center justify-end w-full gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full">
        <div className="sidebar">
          <h2>Photos</h2>

          <ul>
            {photosLinks.map((link) => (
              <li
                key={link.id}
                className={
                  link.id === activePhotos.id ? "active" : "not-active"
                }
                onClick={() => setActivePhotos(link)}
                onTouchStart={() => setActivePhotos(link)}
              >
                <img src={link.icon} alt={link.name} />
                <p>{link.name}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul className="scrollbar-hide">
            {activePhotos?.children?.map((photo) => (
              <li
                key={photo.id}
                onDoubleClick={() =>
                  openWindow("imgfile", {
                    id: photo.id,
                    name: photo.name,
                    icon: "/images/image.png",
                    kind: "image",
                    fileType: "img",
                    imageUrl: photo.img,
                    isWallpaper: photo.isWallpaper,
                  })
                }
                onTouchStart={() =>
                  openWindow("imgfile", {
                    id: photo.id,
                    name: photo.name,
                    icon: "/images/image.png",
                    kind: "image",
                    fileType: "img",
                    imageUrl: photo.img,
                    isWallpaper: photo.isWallpaper,
                  })
                }
                title="Double click to open"
              >
                <img src="/images/image.png" alt={photo.id} />
                <p>{photo.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
