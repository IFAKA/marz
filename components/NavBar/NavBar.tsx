import { Back } from "components/Back"
import { useUser } from "context"
import { IContext } from "models"
import { useRouter } from "next/router"

export default function NavBar() {
    const { user } = useUser() as IContext
    const { pathname } = useRouter()
    return (
        <nav className="fixed w-full border-b dark:border-b-0 h-11 md:h-12 flex items-center justify-center z-10 bg-white dark:bg-black">
            {pathname !== "/" && <Back />}
            <div className="text-lg font-medium md:text-xl text-center">
                {pathname === "/" ? "Mars Rovers"
                    : pathname === "/rover" ? "Select Rover"
                        : pathname === "/gallery" && user.name
                }
            </div>
        </nav>
    )
}