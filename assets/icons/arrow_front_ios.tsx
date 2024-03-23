import { G, Mask, Path, Rect, Svg } from 'react-native-svg';

import { IconProps } from '../../types/icon';

export default function ArrowFrontIcon({ width = 24, height = 24 }: IconProps) {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Mask id="mask0_535_1568" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <Rect x="24" y="24" width="24" height="24" transform="rotate(-180 24 24)" fill="#D9D9D9" />
            </Mask>
            <G mask="url(#mask0_535_1568)">
                <Path d="M14 2L24 12L14 22L12.225 20.225L20.45 12L12.225 3.775L14 2Z" fill="#73727E" />
            </G>
        </Svg>
    );
}
