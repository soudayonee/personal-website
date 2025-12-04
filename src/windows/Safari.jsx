import { WindowControls } from "#components";
// import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  // MoveRight,
  PanelLeft,
  Plus,
  SearchIcon,
  Share,
  ShieldHalf,
} from "lucide-react";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search">
            <SearchIcon className="icon" />

            <input
              type="text"
              name="search"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="blog">
        {/* <h2>My Developer Blog</h2>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <div className="col-span-2">
                <img src={post.image} alt={post.title} />
              </div>

              <div className="content">
                <p>{post.date}</p>
                <h3>{post.title}</h3>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  Check out the full post <MoveRight className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div> */}

        <div className="flex-center h-full text-gray-500">
          <h2>No blog posts available at the moment.</h2>
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
