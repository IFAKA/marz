import { useUser } from 'context'
import { IContext } from 'models'
import { urls } from 'services'
import useSWR from 'swr'

const useManifest = () => {
    const { user } = useUser() as IContext
    const url = `${urls.manifest}${user.name}?${urls.api_key}`
    const { data } = useSWR(url)

    const cameras = data?.photo_manifest?.photos?.find(
        (photoInfo: any) =>
            photoInfo?.earth_date === user.earthDate
            && photoInfo?.sol === user.sol
    )?.cameras

    const getEarthDate = (sol: number) =>
        data?.photo_manifest?.photos?.find(
            (photoInfo: any) => photoInfo?.sol === sol
        )?.earth_date ?? ""

    const getSol = (earthDate: string) =>
        data?.photo_manifest?.photos?.find(
            (photoInfo: any) => photoInfo?.earth_date === earthDate
        )?.sol ?? 0

    return {
        cameras,
        getEarthDate,
        getSol
    }

}

export default useManifest