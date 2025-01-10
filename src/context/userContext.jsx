import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { formattedDate } from "../helpers/FunctionInfo";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    


    const [usuario, setUsuario] = useState({})
    useEffect(()=>{
        axios.get('https://reqres.in/api/users/2')
        .then(
            data => {
                setUsuario({
                    name: `${data.data.data.first_name} ${data.data.data.last_name}`,
                    registered: formattedDate(Date())
                })
            }
        )
        .catch(e => console.error(e))
    }, [])

    return (
        <UserContext.Provider value={usuario}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}
