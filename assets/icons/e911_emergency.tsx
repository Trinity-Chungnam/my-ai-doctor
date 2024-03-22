import { Defs, G, LinearGradient, Mask, Path, Rect, Stop, Svg } from 'react-native-svg';

import { IconProps } from '../../types/icon';

export default function E911Emergency({ width = 60, height = 60 }: IconProps) {
    return (
        <Svg width={width} height={height} viewBox="0 0 60 60" fill="none">
            <Mask id="mask0_535_802" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
                <Rect width="60" height="60" fill="#D9D9D9" />
            </Mask>
            <G mask="url(#mask0_535_802)">
                <Path
                    d="M13.125 50V50.5H13.625H47.375H47.875V50V46.25V45.75H47.375H43.9334L38.791 28.7924L38.791 28.7924L38.7893 28.7869C38.5092 27.8999 38.0026 27.168 37.2748 26.6046C36.5395 26.0353 35.6917 25.75 34.75 25.75H26.25C25.3083 25.75 24.4605 26.0353 23.7252 26.6046C22.9974 27.168 22.4908 27.8999 22.2107 28.7869L22.2107 28.7869L22.209 28.7924L17.0666 45.75H13.625H13.125V46.25V50ZM28.125 18.75V19.25H28.625H32.375H32.875V18.75V7.5V7H32.375H28.625H28.125V7.5V18.75ZM42.9589 25.2286L43.3139 25.5835L43.6674 25.2272L51.6049 17.2272L51.9557 16.8736L51.6036 16.5214L48.9786 13.8964L48.6264 13.5443L48.2728 13.8951L40.2728 21.8326L39.9165 22.1861L40.2714 22.5411L42.9589 25.2286ZM46.25 36.875V37.375H46.75H58H58.5V36.875V33.125V32.625H58H46.75H46.25V33.125V36.875ZM17.3326 25.2272L17.6861 25.5835L18.0411 25.2286L20.7286 22.5411L21.0835 22.1861L20.7272 21.8326L12.7272 13.8951L12.3736 13.5443L12.0214 13.8964L9.39645 16.5214L9.04428 16.8736L9.39506 17.2272L17.3326 25.2272ZM2.5 36.875V37.375H3H14.25H14.75V36.875V33.125V32.625H14.25H3H2.5V33.125V36.875ZM22.1095 45.75L26.6845 30.5H34.3155L38.8905 45.75H22.1095Z"
                    fill="url(#paint0_linear_535_802)"
                    stroke="url(#paint1_linear_535_802)"
                />
            </G>
            <Defs>
                <LinearGradient id="paint0_linear_535_802" x1="30.5" y1="7.5" x2="30.5" y2="50" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#FF0000" />
                    <Stop offset="0.515" stopColor="#FF0000" stopOpacity="0.8" />
                    <Stop offset="1" stopColor="#FF0000" stopOpacity="0.3" />
                </LinearGradient>
                <LinearGradient id="paint1_linear_535_802" x1="30.5" y1="7.5" x2="30.5" y2="50" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#FF0000" />
                    <Stop offset="0.49" stopColor="#FF0000" stopOpacity="0.8" />
                    <Stop offset="1" stopColor="#FF0000" stopOpacity="0.3" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}
