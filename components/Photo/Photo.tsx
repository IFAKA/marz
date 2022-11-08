import { IPhotoProp } from "models"
import Image from "next/image"
import { useState } from "react"
import { formatPhoto } from "services"

export const Photo = ({ data }: IPhotoProp) => {
    const { img, id } = formatPhoto(data)
    const [loading, setLoading] = useState(true)
    return (
        <div className="relative aspect-square w-full overflow-hidden">
            <Image
                fill
                priority
                src={img}
                unoptimized
                className={`${loading ? "blur-sm" : "blur-0"} duration-700 ease-in-out object-cover`}
                loader={() => img}
                alt={`Photo #${id}`}
                onLoadingComplete={() => setLoading(false)}
            />
        </div>
    )
}