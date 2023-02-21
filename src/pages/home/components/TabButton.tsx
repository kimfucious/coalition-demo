import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { ActionType, NavTab } from "../../../types";

interface Props {
    buttonText: string;
    tab: NavTab;
}
export default function TabButton({ buttonText, tab }: Props) {
    const dispatch = useAppDispatch();
    const { tabName } = useAppSelector((state) => state.app);
    return (
        <button
            className="btn btn-link text-gray text-uppercase"
            style={{
                borderRadius: 0,
                backgroundColor: tab === tabName ? "#afb4bf" : "transparent",
                textDecoration: tab === tabName ? "underline" : "none",
                textDecorationThickness: tab === tabName ? "2px" : "0px", 
                textDecorationColor: tab === tabName ? "#404f6c" : "afb4bf",
                textUnderlineOffset: tab === tabName ? 5 : 10,
            }}
            onClick={() => {
                alert("I'm not sure what you want to do here");
                dispatch({ type: ActionType.UPDATE_TAB, payload: tab });
            }}
        >
            {/* <span
                className={`${
                    tab === tabName ? "tab-button" : "tab-button-active"
                }`}
            >
                {buttonText}
            </span> */}
            <span
                style={{
                    color: tab === tabName ? "#404f6c" : "#afb4bf",
                    fontFamily: "Oswald",
                    fontWeight: 900,
                    // textDecoration: tab === tabName ? "underline" : "none",
                    // textUnderlineOffset: tab === tabName ? 5 : 10
                }}
            >
                {buttonText}
            </span>
        </button>
    );
}
