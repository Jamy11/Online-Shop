import { useState } from "react"

const useAllState = () => {
    const [user, setUser] = useState({});
    const [userType, setUserType] = useState('admin');

    return {
        user,
        userType,
        setUser,
    }
}

export default useAllState