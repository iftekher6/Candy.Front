import { useContext } from 'react'
import { AuthContext } from '..'

function useAuth() {
  return useContext(AuthContext)
}

export default useAuth;