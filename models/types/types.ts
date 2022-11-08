import { ReactNode } from "react";

export interface IChild {
    children: ReactNode
}

export interface IPhoto {
    id: string,
    img: string,
}

export interface IRover {
    name: string
    minEarth: string
    maxEarth: string
    maxSol: number
}


export interface IPhotoProp {
    data: any
}

export interface IUser {
    name: string,
    earthDate: string
    sol: number
    camera: string,
    limits: IRover
}

export interface IContext {
    user: IUser
    setLimits: (rover: IRover) => void
    setRover: (rover: string) => void
    setCamera: (camera: string) => void
    setEarthDate: (date: string) => void
    setSol: (date: number) => void
    reset: () => void
}

export interface IRoverSrc {
    Curiosity: string,
    Spirit: string,
    Opportunity: string,
    Perseverance: string
}