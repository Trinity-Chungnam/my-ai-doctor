import { G, Mask, Path, Rect, Svg } from 'react-native-svg';

import { COLOR } from '../../src/tokens/color';
import { IconProps } from '../../types/icon';

export function AddToQueueIcon({ width = 28, height = 27, fill = COLOR.DARK_GREY[500] }: IconProps) {
    return (
        <Svg width={width} height={height} viewBox="0 0 28 27" fill="none">
            <Mask id="mask0_2003_9" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="27">
                <Rect x="0.333252" width="27" height="27" fill="#D9D9D9" />
            </Mask>
            <G mask="url(#mask0_2003_9)">
                <Path
                    d="M12.708 16.875H14.958V13.5H18.333V11.25H14.958V7.875H12.708V11.25H9.33301V13.5H12.708V16.875ZM9.33301 23.625V21.375H4.83301C4.21426 21.375 3.68457 21.1547 3.24395 20.7141C2.80332 20.2734 2.58301 19.7437 2.58301 19.125V5.625C2.58301 5.00625 2.80332 4.47656 3.24395 4.03594C3.68457 3.59531 4.21426 3.375 4.83301 3.375H22.833C23.4518 3.375 23.9814 3.59531 24.4221 4.03594C24.8627 4.47656 25.083 5.00625 25.083 5.625V19.125C25.083 19.7437 24.8627 20.2734 24.4221 20.7141C23.9814 21.1547 23.4518 21.375 22.833 21.375H18.333V23.625H9.33301ZM4.83301 19.125H22.833V5.625H4.83301V19.125Z"
                    fill={fill}
                />
            </G>
        </Svg>
    );
}
