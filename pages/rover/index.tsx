import { Spinner } from "components"
import { useUser } from "context"
import { useRovers } from "hooks"
import { IContext, IRover, IRoverSrc, rovers_src } from "models"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Rover() {
    const { setRover, setEarthDate, setSol, setLimits, reset } = useUser() as IContext
    const [loading, setLoading] = useState(true)
    const { push } = useRouter()
    const rovers = useRovers()

    const handleClick = (rover: IRover) => {
        reset()
        setLimits(rover)
        setRover(rover.name)
        setEarthDate(rover.maxEarth)
        setSol(rover.maxSol)
        push('gallery')
    }

    return (
        <div className="flex justify-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-4 w-fit">
                {!!rovers
                    ? rovers?.map((rover, i) =>
                        <button
                            className="flex flex-col justify-center w-full hover:scale-95 duration-300 ease-in-out dark:hover:text-white dark:text-white text-gray-500 border-gray-200"
                            onClick={() => handleClick(rover)}
                            key={i}
                        >
                            <Image
                                width={316}
                                height={316}
                                priority
                                src={rovers_src[rover.name as keyof IRoverSrc]}
                                unoptimized
                                className={`${loading ? "blur-sm" : "blur-0"} duration-700 ease-in-out object-cover aspect-square`}
                                loader={() => rovers_src[rover.name as keyof IRoverSrc]}
                                alt={rover.name}
                                onLoadingComplete={() => setLoading(false)}
                            />
                            <div className="w-full px-6 md:px-8 py-2.5 md:py-3 dark:text-white text-gray-500 border-gray-200 block text-center border-x border-b">{rover.name}</div>
                        </button>
                    ) : <Spinner />}
            </div >
        </div >
    )
}