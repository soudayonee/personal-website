import { navLinks } from "#constants";
import useWindowStore from "#store/window";
import dayjs from "dayjs";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/icons/logo.svg" alt="Apple Logo" />
        <p className="font-bold">My Personal Website</p>

        <ul>
          {navLinks.map((item) => (
            <li key={item.id} onClick={() => openWindow(item.type)}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {/* <ul>
          {navIcons.map((icon) => (
            <li key={icon.id}>
              <img src={icon.img} alt={icon.id} className="icon-hover" />
            </li>
          ))}
        </ul> */}

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
