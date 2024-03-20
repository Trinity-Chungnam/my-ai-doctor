import { G, Mask, Path, Rect, Svg } from 'react-native-svg';

import { IconProps } from '../../types/icon';

export default function ArrowBackIcon({ width = 24, height = 24 }: IconProps) {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Mask id="mask0_503_1115" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <Rect width={width} height={height} fill="#D9D9D9" />
            </Mask>
            <G mask="url(#mask0_503_1115)">
                <Path d="M10 22L0 12L10 2L11.775 3.775L3.55 12L11.775 20.225L10 22Z" fill="black" />
            </G>
        </Svg>
    );
}
