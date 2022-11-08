import { IPhoto, IRover } from "models";

export const formatPhoto = (photo: any): IPhoto => ({
    id: photo.id,
    img: photo.img_src,
})

export const formatRovers = (rovers: any[]): IRover[] =>
    rovers?.map((rover) => ({
        name: rover.name,
        minEarth: rover.landing_date,
        maxEarth: rover.max_date,
        maxSol: rover.max_sol,
    }))
