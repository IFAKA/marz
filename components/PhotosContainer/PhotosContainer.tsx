import { InfiniteScroll, Photo, Spinner } from "components";
import { usePhotos } from "hooks";

const PhotosContainer = () => {
    const { isLoading, hasPhotos, photos } = usePhotos()
    return (
        isLoading
            ? <Spinner />
            : hasPhotos
                ? (
                    <InfiniteScroll>
                        {photos?.map((photo: any) =>
                            <Photo data={photo} key={photo.id} />
                        )}
                    </InfiniteScroll>
                )
                : (
                    <div className="flex justify-center py-7 px-4 w-full h-full">
                        There are no photos on this date.
                    </div>
                )

    )
}

export default PhotosContainer