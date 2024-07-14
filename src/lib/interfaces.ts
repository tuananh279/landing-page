import React from "react"

export interface IFeatureItem {
    index: number,
    title: string,
    content: string
}

export interface IDeployItem {
    index: number,
    title: string,
    content: string,
    image: JSX.Element
}

export interface IGuideQuestion {
    index: number,
    title: string, 
    content: string
}

export interface IOverallItem {
    index: number,
    title: string,
    content: string[]
}