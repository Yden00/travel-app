import { useCallback, useState } from "react"

export const useHttp = () => {
  const [loading, setLoading] = useState(false)  
  const [error, setError] = useState(null)
  
  const request = useCallback(async (url, method = "GET" , body = null, headers = {}) => {
    setLoading(true)
    try {
      if(body) {
        body = JSON.stringify(body)
        headers['Content-type'] = 'application/json'
      }

      const responce = await fetch(url, {method, body, headers})
      const data = await responce.json()
      console.log(data)
      if(!responce.ok){
        throw new Error(data.message || 'Something goes wrong')
      }
    setLoading(false)
      return data
    } catch (error) {
      setLoading(false)
      setError(error.message)
      throw error
    }

  },[])
  const clearError = () => setError(null) 
  return {loading, request, error, clearError};
  }
