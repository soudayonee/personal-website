import { Navbar, Welcome, Dock, Home } from "#components";
import {
  Contact,
  Finder,
  Image,
  Photos,
  Playlist,
  Resume,
  Safari,
  Terminal,
  Text,
} from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useEffect } from "react";

gsap.registerPlugin(Draggable);

const App = () => {
  const wallpaperId = localStorage.getItem("wallpaperId");

  useEffect(() => {
    if (!wallpaperId) return localStorage.setItem("wallpaperId", 1);

    document.documentElement.style.backgroundImage = `url("/images/wallpapers/wallpaper${wallpaperId}.jpg")`;

    if (wallpaperId != 1) {
      document.documentElement.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/wallpapers/wallpaper${wallpaperId}.jpg")`;
    }
  }, [wallpaperId]);
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Playlist />

      <Home />
    </main>
  );
};

export default App;
