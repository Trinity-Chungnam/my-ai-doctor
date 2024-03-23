import { Defs, G, LinearGradient, Mask, Path, Rect, Stop, Svg } from 'react-native-svg';

import { IconProps } from '../../types/icon';

export default function CheckCircle({ width = 80, height = 80 }: IconProps) {
    return (
        <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
            <Mask id="mask0_503_738" maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
                <Rect width={width} height={height} fill="#D9D9D9" />
            </Mask>
            <G mask="url(#mask0_503_738)">
                <Path
                    d="M34.8706 55.3781L35.0828 55.5915L35.2955 55.3788L58.8789 31.7954L59.0934 31.5809L58.8765 31.3688L55.0432 27.6188L54.8311 27.4113L54.6213 27.6212L35.0834 47.159L25.2955 37.3712L25.0834 37.159L24.8713 37.3712L21.1213 41.1212L20.9098 41.3327L21.1206 41.5448L34.8706 55.3781ZM26.9646 70.9837C31.0588 72.7505 35.405 73.6333 40.0001 73.6333C44.6502 73.6333 49.0242 72.7506 53.1189 70.9837C57.2084 69.2191 60.7685 66.8088 63.7965 63.7528C66.8238 60.6974 69.2196 57.1242 70.9839 53.0355C72.7506 48.9412 73.6334 44.5951 73.6334 40C73.6334 35.3498 72.7508 30.9758 70.9839 26.8811C69.2195 22.7922 66.8235 19.2324 63.7955 16.2045C60.7676 13.1766 57.2079 10.7806 53.1189 9.01618C49.0242 7.24927 44.6502 6.36663 40.0001 6.36663C35.405 6.36663 31.0588 7.24947 26.9646 9.01618C22.8759 10.7805 19.3026 13.1762 16.2473 16.2035C13.1912 19.2315 10.7809 22.7916 9.0163 26.8811C7.24939 30.9758 6.36675 35.3498 6.36675 40C6.36675 44.5951 7.24959 48.9412 9.0163 53.0355C10.7808 57.1247 13.1908 60.6983 16.2463 63.7538C19.3017 66.8092 22.8753 69.2192 26.9646 70.9837ZM59.8707 59.83C54.4278 65.3005 47.8102 68.0333 40.0001 68.0333C32.2461 68.0333 25.6419 65.3009 20.1705 59.8295C14.6992 54.3581 11.9667 47.7539 11.9667 40C11.9667 32.1898 14.6996 25.5723 20.17 20.1293C25.6413 14.6855 32.2456 11.9666 40.0001 11.9666C47.8107 11.9666 54.4284 14.6859 59.8713 20.1288C65.3141 25.5716 68.0334 32.1894 68.0334 40C68.0334 47.7544 65.3145 54.3588 59.8707 59.83Z"
                    fill="url(#paint0_linear_503_738)"
                    stroke="url(#paint1_linear_503_738)"
                    strokeWidth="0.6"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_503_738"
                    x1="40.0001"
                    y1="6.66663"
                    x2="40.0001"
                    y2="73.3333"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#2246FF" />
                    <Stop offset="0.5" stopColor="#2246FF" stopOpacity="0.8" />
                    <Stop offset="1" stopColor="#2246FF" stopOpacity="0.4" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_503_738"
                    x1="40.0001"
                    y1="6.66663"
                    x2="40.0001"
                    y2="73.3333"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#2246FF" />
                    <Stop offset="0.455" stopColor="#2246FF" stopOpacity="0.8" />
                    <Stop offset="1" stopColor="#2246FF" stopOpacity="0.3" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}
