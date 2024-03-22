import { Circle, Path, Svg } from 'react-native-svg';

import { IconProps } from '../../types/icon';

export default function UpdateIcon({ width = 19, height = 19 }: IconProps) {
    return (
        <Svg width={width} height={height} viewBox="0 0 19 19" fill="none">
            <Circle cx="9.5" cy="9.5" r="9.5" fill="#D9D9D9" />
            <Path
                d="M9.53864 16C7.81288 16 6.3447 15.3703 5.13409 14.1109C3.92348 12.8516 3.31818 11.3146 3.31818 9.5V9.35781L2.08182 10.6578L1 9.52031L4.09091 6.27031L7.18182 9.52031L6.1 10.6578L4.86364 9.35781V9.5C4.86364 10.8542 5.31761 12.0052 6.22557 12.9531C7.13352 13.901 8.23788 14.375 9.53864 14.375C9.87348 14.375 10.2019 14.3344 10.5239 14.2531C10.8458 14.1719 11.1614 14.05 11.4705 13.8875L12.6295 15.1063C12.1402 15.4042 11.6379 15.6276 11.1227 15.7766C10.6076 15.9255 10.0795 16 9.53864 16ZM14.9091 12.7297L11.8182 9.47969L12.9 8.34219L14.1364 9.64219V9.5C14.1364 8.14583 13.6824 6.99479 12.7744 6.04688C11.8665 5.09896 10.7621 4.625 9.46136 4.625C9.12651 4.625 8.79811 4.66563 8.47614 4.74688C8.15417 4.82812 7.83864 4.95 7.52955 5.1125L6.37045 3.89375C6.85985 3.59583 7.36212 3.3724 7.87727 3.22344C8.39242 3.07448 8.92045 3 9.46136 3C11.1871 3 12.6553 3.62969 13.8659 4.88906C15.0765 6.14844 15.6818 7.68542 15.6818 9.5V9.64219L16.9182 8.34219L18 9.47969L14.9091 12.7297Z"
                fill="#2246FF"
            />
        </Svg>
    );
}