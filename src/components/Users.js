// import { useState, useEffect } from "react";
// // import useAxiosPrivate from "../hooks/useAxiosPrivate";
// import useAxiosPrivate from "../hooks/useAxiosPrivate";


// const Users = () => {
//     const [users, setUsers] = useState();
//     // const {} = users
//     // console.log(role)
//     // console.log(users[0].role)
    
//     const axiosPrivate = useAxiosPrivate();

//     useEffect(() => {
//         let isMounted = true;
//         const controller = new AbortController();

//         const getUsers = async () => {
//             try {
//                 const response = await axiosPrivate.get('/api/v1/users/get', {
//                     signal: controller.signal
//                 });
//                 console.log(response.data.user);
//                 // console.log(response.data); 
//                 isMounted && setUsers(response.data.user);
//             } catch (err) {
//                 console.error(err);
//                 // navigate('/login');
//             }
//         }

//         getUsers();

//         return () => {
//             isMounted = false;
//             controller.abort();
//         }
//     }, [])

//     return (
//         <article>
//             <h2>Users List</h2>
//             {users?.length
//                 ? (
//                     <ul>
//                         {users.map((user, i) => <li key={i}>{user?.email}</li>)}
//                     </ul>
//                 ) : <p>No users to display</p>
//             }
//         </article>
//     );
// };

// export default Users;