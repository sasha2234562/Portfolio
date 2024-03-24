import {FC} from "react";
import icons from '../../../../images/icons-sprite.svg'

type IconProps = {
    IconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string
};

 const Icon: FC<IconProps> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            viewBox={props.viewBox}
            fill={props.fill}
        >
            <use xlinkHref={`${icons}#${props.IconId}`} />
        </svg>
    );
};


export default Icon;