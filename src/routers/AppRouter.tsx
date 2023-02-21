import { AppRoute } from "../types/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ElHeight, ElName } from "../types";
import { useAppSelector } from "../hooks/reduxHooks";
import { useMemo, useState } from "react";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import PageTwo from "../pages/page/components/PageTwo";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
    const [heights, setHeights] = useState<ElHeight[]>([]);
    const { totalOffset, navbarOffset } = useMemo(() => {
        let hOffset = 0;
        let nOffset = 56;
        if (heights.length) {
            hOffset = heights.reduce((acc, curr) => acc + curr.height, 0);
            nOffset =
                heights.find((item) => item.name === ElName.NAVBAR)?.height ??
                56;
        }
        return { totalOffset: hOffset, navbarOffset: nOffset };
    }, [heights]);
    return (
        <BrowserRouter>
            {/* <NavBar heights={heights} setHeights={setHeights} /> */}
            <Routes>
                <Route
                    path={AppRoute.ROOT}
                    element={
                        <Home
                            heights={heights}
                            setHeights={setHeights}
                            navbarOffset={navbarOffset}
                        />
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
