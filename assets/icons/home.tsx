import { Path, Svg } from 'react-native-svg';

import { COLOR } from '../../tokens/color';
import { IconProps } from '../../types/icon';

export default function HomeIcon({
    width = 26,
    height = 27,
    fill = 'none',
    stroke = COLOR.DARK_GREY[500],
    strokeWidth = 2,
}: IconProps) {
    return (
        <Svg width={width} height={height} viewBox="0 0 26 27" fill={fill}>
            <Path
                d="M3.25 10.25L13 2.66667L22.75 10.25V22.1667C22.75 22.7413 22.5217 23.2924 22.1154 23.6987C21.7091 24.1051 21.158 24.3333 20.5833 24.3333H5.41667C4.84203 24.3333 4.29093 24.1051 3.8846 23.6987C3.47827 23.2924 3.25 22.7413 3.25 22.1667V10.25Z"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M9.75 24.3333V13.5H16.25V24.3333"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
