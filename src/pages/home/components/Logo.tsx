import logoFill from "../../../assets/images/logo_icon_fill.png";
import logoLight from "../../../assets/images/logo_icon_white.png";
import logoTextVar1 from "../../../assets/images/logo_text_var_1.png";
import logoTextVar2 from "../../../assets/images/logo_text_var_2.png";
export enum LogoType {
    FILL = "fill",
    LIGHT = "light",
}
interface Props {
    logoHeight: string;
    logoType: LogoType;
}
export default function Logo({ logoHeight, logoType }: Props) {
    return (
        <>
        <div className="d-flex d-sm-none nowrap" style={{ width: "50%" }}>
            <img
                className=""
                src={logoType === LogoType.LIGHT ? logoLight : logoFill}
                alt="Logo"
                height={25}
                width="auto"
            />
            <img
                className="ms-2"
                src={logoType === LogoType.LIGHT ? logoTextVar1 : logoTextVar2}
                alt="Los Angeles Mountains"
                height={25}
                width="auto"
            />
        </div>
        <div className="d-none d-sm-flex nowrap" style={{ width: "50%" }}>
            <img
                className=""
                src={logoType === LogoType.LIGHT ? logoLight : logoFill}
                alt="Logo"
                height={logoHeight}
                width="auto"
            />
            <img
                className="ms-2"
                src={logoType === LogoType.LIGHT ? logoTextVar1 : logoTextVar2}
                alt="Los Angeles Mountains"
                height={logoHeight}
                width="auto"
            />
        </div>
        </>
    );
}
