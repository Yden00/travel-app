import {
    useState,
    useCallback,
    useEffect
} from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const userData = localStorage.getItem(storageName)
    console.log(JSON.parse(userData))
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [username, setUsername] = useState('')
    
    useEffect(()=>{
        if (!!userData) {
          setUserId(JSON.parse(userData).userId)
          setToken(JSON.parse(userData).token)
          setUsername(JSON.parse(userData).username)
        }
    },[userData])
    const login = useCallback((jwtToken, id, username) => {
        setToken(jwtToken)
        setUserId(id)
        setUsername(username)
        localStorage.setItem(storageName, JSON.stringify({
            userId: id,
            token: jwtToken,
            username
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setUsername(null)
        localStorage.removeItem(storageName)
    }, [])

    return {
        login,
        logout,
        token,
        userId,
        username
    }
}