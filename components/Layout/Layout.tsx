import { NavBar } from "components/NavBar";
import { UserProvider } from "context";
import { IChild } from "models";
import { fetcher } from "services";
import { SWRConfig } from "swr";

export default function Layout({ children }: IChild) {
    return (
        <SWRConfig value={{ fetcher }}>
            <UserProvider>
                <NavBar />
                <div className="pt-11 md:pt-12">{children}</div>
            </UserProvider>
        </SWRConfig >
    )
}
