import { useUser } from "context"
import { useManifest } from "hooks"
import { IContext } from "models"
import React, { useEffect, useState } from "react"

const SearchSolTime = () => {
    const { setSol, user, setEarthDate } = useUser() as IContext
    const [value, setValue] = useState(user.sol)
    const { getEarthDate } = useManifest()
    const max = user.limits.maxSol

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(+e.target.value)

    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        setSol(value)
        setEarthDate(getEarthDate(value))
    }

    useEffect(() => { setValue(user.sol) }, [user])

    return (
        <form onSubmit={handleSubmit} className="p-2 flex-1 md:flex-initial">
            <label className="text-gray-500">Sol date: </label>
            <input
                className="w-full md:w-fit md:block dark:hover:bg-stone-800 dark:hover:text-white dark:text-white hover:bg-gray-100 px-2 py-2 text-gray-500 border-x border-y border-gray-200"
                type={"number"}
                value={value}
                onChange={handleChange}
                min={0}
                max={max}
            />
        </form>
    )
}

export default SearchSolTime