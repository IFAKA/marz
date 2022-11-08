import { useUser } from "context"
import { useManifest } from "hooks"
import { IContext } from "models"

export default function SelectCamera() {
    const { setCamera, user } = useUser() as IContext
    const { cameras } = useManifest()

    const handleClick = (e: React.ChangeEvent<HTMLSelectElement>) =>
        setCamera(e.target.value)

    return (
        <>
            {!!cameras?.length &&
                <div className="p-2 flex-wrap flex flex-col w-fit">
                    <label className="text-gray-500">Camera type:</label>
                    <select
                        className="dark:hover:bg-stone-800 dark:hover:text-white dark:text-white hover:bg-gray-100 px-2 py-2 text-gray-500 border-x border-y border-gray-200"
                        onChange={handleClick}
                        value={user.camera}
                    >
                        <option value="">All</option>
                        {cameras?.map(
                            (camera: string, i: number) =>
                                <option value={camera} key={i}>
                                    {camera}
                                </option>
                        )}
                    </select>
                </div>}
        </>
    )
}