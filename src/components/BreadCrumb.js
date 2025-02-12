import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  console.log(paths, 'paths')

  // Format text from URL
  const formatPath = (path) => {
    // Decode URL-encoded string and replace hyphens with spaces
    const decodedPath = decodeURIComponent(path);
    return decodedPath.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <ol className="flex items-center space-x-2">
        {/* Homepage link */}
        <li>
          <Link to="/" className="hover:underline text-[#8F8F8F]">Homepage</Link>
        </li>
        
        {/* Loop through the path segments and create breadcrumb links */}
        {paths.map((path, index) => {
          const url = "/" + paths.slice(0, index + 1).join("/");

          return (
            <li key={url} className="flex items-center">
              <span className="mx-2">/</span>
              {index === paths.length - 1 ? (
                // The last segment is displayed without a link (final product name)
                <span className="text-gray-900 font-semibold dark:text-[#FFF]">{formatPath(path)}</span>
              ) : (
                // Links for each path segment
                <Link to={url} className="hover:underline">{formatPath(path)}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
