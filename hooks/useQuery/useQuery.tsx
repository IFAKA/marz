import useSWRInfinite from "swr/infinite";

const useQuery = (url: string, validate: (data: any) => boolean) => {
    const getKey = (pageIndex: number, previousPageData: any) =>
        validate(previousPageData) ? null : `${url}${pageIndex + 1}`

    const { data, error, size, setSize } = useSWRInfinite(getKey)

    const lastPage = data && data[data?.length - 1]
    const next = () => setSize(size + 1)
    return { data, lastPage, error, next }
}

export default useQuery