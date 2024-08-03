// import { useNavigate, useSearchParams } from "react-router-dom";

// export const Profile = ()=> {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSearchParams({ q: searchQuery });
//     navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchQuery}
//         onChange={(event) => setSearchQuery(event.target.value)}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// }
