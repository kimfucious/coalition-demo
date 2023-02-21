import { useMemo } from "react";
import climbText from "../../../assets/images/climb_text.jpg";
import { useWindowSize } from "../../../hooks/useWindowSize";
export default function ClimbText() {
    const [,width] = useWindowSize()
    const height = useMemo(()=>{
        if(width < 576) {
            return 50
        } else if (width < 1200){
        return 100
        } 
        return 150
    },[width]) 
    return (
        <div
            className="container d-flex align-items-center justify-content-center w-100 py-4"
            style={{height}}
        >
            <div className="d-flex" style={{ width: "60%" }}>
                <img className="img-fluid" src={climbText} alt="Climb Text" />
            </div>
        </div>
    );
}
