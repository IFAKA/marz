import { PhotosContainer, SearchEarthTime, SearchSolTime, SelectCamera } from "components";

export default function Gallery() {
    return (
        <>
            <div className="p-2 flex flex-wrap md:justify-center justify-between sticky">
                <SearchSolTime/>
                <SearchEarthTime />
                <SelectCamera />
            </div>
            <PhotosContainer />
        </>
    )
}