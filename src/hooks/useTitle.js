import { useEffect } from 'react'

export const useTitle = (title) => {

  useEffect(() => {
    document.title = `${title} | Cotton Candy`
  }, [title])
  
  return null;
}
