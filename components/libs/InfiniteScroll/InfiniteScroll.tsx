import { Spinner } from "components/Spinner";
import { usePhotos } from "hooks";
import { IChild } from "models";
import InfiniteScrollLib from "react-infinite-scroll-component";

export const InfiniteScroll = ({ children }: IChild) => {
    const { length, hasMore, next } = usePhotos()
    return (
        <InfiniteScrollLib
            dataLength={length}
            hasMore={hasMore}
            loader={<Spinner />}
            className={"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl::grid-cols-4 gap-4 p-4"}
            next={next}
        >
            {children}
        </InfiniteScrollLib>
    )
}

export default InfiniteScroll