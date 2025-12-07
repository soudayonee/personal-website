import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <div className="flex max-md:flex-col items-start gap-3">
          <img src="/images/nay1.jpg" alt="Photo" />
          <div className="flex flex-col">
            <h3>Let's Be a friend</h3>
            <p>
              Got any suggestions for this site? Or just want to chat and be
              friends? Feel like talking about tech, games, or even anime? Reach
              out and let's connect!
            </p>
          </div>
        </div>

        <ul>
          {socials.map((social) => (
            <li key={social.id} style={{ backgroundColor: social.bg }}>
              <a
                href={social.link}
                target="_blank"
                title={social.text}
                onTouchStart={() => window.open(social.link, "_blank")}
              >
                <img src={social.icon} alt={social.text} className="size-5" />
                <p>{social.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
