import { useUser } from "context";
import { useQuery } from "hooks";
import { IContext } from "models";
import { urls } from "services";

const usePhotos = () => {
    const { user } = useUser() as IContext
    const { name, earthDate, camera } = user
    const url = `${urls.photos}/${name}/photos?earth_date=${earthDate}&${urls.api_key}${camera ? `&camera=${camera}` : ""}&page=`

    const validatePhotos = (prevPageData: any) =>
        prevPageData && prevPageData[prevPageData.length - 1] &&
        !prevPageData[prevPageData.length - 1]?.photos?.length

    const { data, lastPage, next } = useQuery(url, validatePhotos)

    const photos = data?.reduce((prev, crr) =>
        crr && [...prev, ...crr?.photos], [])

    const isLoading = !data
    const length = photos?.length || 0
    const hasPhotos = !!photos?.length
    const hasMore = lastPage && !!lastPage?.photos?.length

    return {
        photos,
        isLoading,
        length,
        hasPhotos,
        hasMore,
        next
    }
}

export default usePhotos