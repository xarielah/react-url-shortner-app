import { ShortenedURL } from "../types/storeLink";

export function addNewURL({ original, shortened }: ShortenedURL): void {
    const newURL = {
        original,
        shortened
    }

    const previousData = localStorage.getItem("data")

    if (previousData == null) {
        localStorage.setItem("data", JSON.stringify([newURL]))
    } else if (previousData) {
        const parsed = JSON.parse(previousData)
        localStorage.setItem("data", JSON.stringify([...parsed, newURL]))
    }
}

export function readUrls(): ShortenedURL[] | null {
    const pastURLs = localStorage.getItem("data")
    if (pastURLs == null) return null
    return JSON.parse(pastURLs)
}