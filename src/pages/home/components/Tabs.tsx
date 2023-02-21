import { NavTab } from "../../../types";
import TabButton from "./TabButton";

export default function Tabs() {
    return (
        <div className={"d-flex bg-secondary w-100"}>
            <div className="container">
                <TabButton buttonText="Mountain 1" tab={NavTab.MOUNTAIN_1}/>
                <TabButton buttonText="Mountain 2" tab={NavTab.MOUNTAIN_2}/>
            </div>
        </div>
    );
}
