import { useUser } from "context"
import { useManifest } from "hooks"
import { IContext } from "models"

const SearchEarthTime = () => {
    const { user, setEarthDate, setSol, setCamera } = useUser() as IContext
    const { minEarth, maxEarth } = user.limits
    const { getSol } = useManifest()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEarthDate(e.target.value)
        setSol(getSol(e.target.value))
        setCamera("")
    }

    return (
        <div className="p-2 flex-1 md:flex-initial">
            <label className="text-gray-500">Earth date:</label>
            <input
                className="w-full md:w-fit md:block dark:hover:bg-stone-800 dark:hover:text-white dark:text-white hover:bg-gray-100 px-2 py-2 text-gray-500 border-x border-y border-gray-200"
                type="date"
                value={user.earthDate}
                onChange={handleChange}
                min={minEarth}
                max={maxEarth}
            />
        </div>
    )
}

export default SearchEarthTime