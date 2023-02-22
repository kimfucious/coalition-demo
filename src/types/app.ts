export interface ElHeight {
    name: ElName;
    height: number;
}

export enum ElName {
    "NAVBAR" = "navbar",
    "FOOTER" = "footer",
}

export enum NavPage {
    HERO = "hero",
    HISTORY = "history",
    TEAM = "team",
}

export enum NavTab {
    MOUNTAIN_1 = "mountain_1",
    MOUNTAIN_2 = "mountain_2",
}

export enum NavType {
    COLLAPSE = "collapse",
    SCROLL = "slide",
    NAVIGATE = "navigate",
}

export enum CarouselSlideDirection {
    NEXT = "next",
    PREV = "prev",
}

export interface CarouselImage {
    id: number;
    imageSrc: string;
    altText: string;
}
