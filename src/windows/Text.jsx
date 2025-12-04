import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div
        className={`p-5 bg-white ${
          name === "about-me.txt"
            ? "flex max-sm:flex-col sm:gap-6 items-start w-auto sm:w-4xl max-sm:h-[700px] overflow-y-auto"
            : "space-y-6 w-md"
        }`}
      >
        {image && (
          <div
            className={`${
              name === "about-me.txt"
                ? "m-auto w-auto shrink-0"
                : "w-full h-full"
            }`}
          >
            <img
              src={image}
              alt={name}
              className={`${
                name === "about-me.txt"
                  ? "w-80 rounded max-sm:mb-3"
                  : "w-auto h-auto rounded"
              }`}
            />
          </div>
        )}

        {name === "about-me.txt" ? (
          <div className="flex flex-col flex-1 space-y-3 h-full">
            {subtitle && <h3 className="text-lg font-semibold">{subtitle}</h3>}
            {Array.isArray(description) && description.length > 0 && (
              <div className="space-y-3 text-base leading-relaxed text-gray-800 max-sm:pb-3">
                {description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            {subtitle && <h3 className="text-lg font-semibold">{subtitle}</h3>}
            {Array.isArray(description) && description.length > 0 && (
              <div className="space-y-3 text-base leading-relaxed text-gray-800">
                {description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
