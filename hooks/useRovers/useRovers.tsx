import { formatRovers, urls } from 'services'
import useSWR from 'swr'

const useRovers = () => {
    const url = `${urls.photos}?${urls.api_key}`
    const { data } = useSWR(url)
    const rovers = formatRovers(data?.rovers)
    return rovers
}

export default useRovers