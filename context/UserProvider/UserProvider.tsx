import { emptyUserState, IChild, IContext, IRover } from "models";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<IContext | null>(null)

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }: IChild) => {
    const [user, setUser] = useState(emptyUserState)
    const { push, pathname } = useRouter()

    const setLimits = (limits: IRover) =>
        setUser((prev) => ({ ...prev, limits }))

    const setRover = (name: string) =>
        setUser((prev) => ({ ...prev, name }))

    const setEarthDate = (earthDate: string) =>
        setUser((prev) => ({ ...prev, earthDate }))

    const setSol = (sol: number) =>
        setUser((prev) => ({ ...prev, sol }))

    const setCamera = (camera: string) =>
        setUser((prev) => ({ ...prev, camera }))

    const reset = () => setUser(emptyUserState)

    useEffect(() => {
        !user.name && pathname === "/gallery" && push("/")
    }, [])

    return (
        <UserContext.Provider value={{
            user,
            setLimits,
            setRover,
            setCamera,
            setEarthDate,
            setSol,
            reset,
        }}>
            {children}
        </UserContext.Provider>
    )
}