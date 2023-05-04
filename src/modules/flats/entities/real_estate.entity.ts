import {Type} from "class-transformer";
import type {Component} from "vue";

export const EstateTypes={
FLAT:"flat",
PARKING:"parking"
} as const
export const EstateStatus={
    FROM_LAWER:"from_lawer",
    FROM_PHYSIC:"from_physic",
    SOLD:"sold",
    BRONNED:"bronned"
} as const

 type ObjectValues<T> = T[keyof T]
export type EstateTypes=ObjectValues<typeof EstateTypes>

export type EstateStatus=ObjectValues<typeof EstateStatus>
export interface EstateParams{
    flatNumber?:string,
    flatRoom?:string,
    floor?:number,
    square:string,
    article?:string
}
export interface FilterTag{
    tag:EstateStatus,
    selected:boolean
}
export class RealEstate{

    @Type(()=>Date)
    placementDate:Date
    constructor(
        public price:string,
        public type:EstateTypes,
        public state:EstateStatus,
        public title:string,
        public location:string,
        public imgPath:string,
        public params:EstateParams,
        placementDate:Date,
        public commissioningInfo:string,
        public selected:boolean = false,
        public id:number

) {
        this.placementDate = placementDate
    }
}
