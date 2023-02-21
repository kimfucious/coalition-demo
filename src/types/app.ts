export interface ElHeight {
    name: ElName;
    height: number;
}

export enum ElName {
    "NAVBAR" = "navbar",
    "VIEWER_CONTROLS" = "viewer-controls",
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
    SLIDE = "slide",
    NAVIGATE = "navigate",
}
