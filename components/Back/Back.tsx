import { useRouter } from "next/router"
import { IoChevronBack } from "react-icons/io5"

const Back = () => {
    const { back } = useRouter()
    return (
        <button className="absolute left-0 top-0 px-4 py-3 md:py-3.5 text-xl dark:text-white text-gray-500 border-gray-200 block text-center" onClick={() => back()}>
            <IoChevronBack/>
        </button>
    )
}

export default Back