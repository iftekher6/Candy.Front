// import axios from "axios";
import axios from "../api/axios";
import { useContext} from "react";
import { AuthContext } from "..";

const useRefreshToken = ()=>{
    // const [auth, setAuth] = useState({})
    const {setAuth} = useContext(AuthContext)
 
    const refresh = async()=>{
        const response = await axios.get(`api/v1/users/refresh-token`,{
            withCredentials: true,
           
         
        })
        setAuth(prev=> {
            console.log(prev)
            console.log(response.data)
           
            return {...prev, accessToken: response.data.accessToken}
        })
        
        return response.data.accessToken
    }
    return refresh
}

export default useRefreshToken;