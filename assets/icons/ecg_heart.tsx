import { G, Mask, Path, Rect, Svg } from 'react-native-svg';

import { COLOR } from '../../src/tokens/color';
import { IconProps } from '../../types/icon';

export default function EcgHeartIcon({ width = 27, height = 27, fill = COLOR.DARK_GREY[500] }: IconProps) {
    return (
        <Svg width={width} height={height} viewBox="0 0 27 27" fill="none">
            <Mask id="mask0_2003_14" maskUnits="userSpaceOnUse" x="0" y="0" width="27" height="27">
                <Rect x="0.166748" y="0.5" width="26" height="26" fill="#D9D9D9" />
            </Mask>
            <G mask="url(#mask0_2003_14)">
                <Path
                    d="M13.1666 23.25C12.8416 23.25 12.5301 23.1913 12.2322 23.074C11.9343 22.9566 11.668 22.7806 11.4333 22.5458L4.17492 15.2604C3.54297 14.6285 3.07804 13.9062 2.78013 13.0938C2.48221 12.2812 2.33325 11.4326 2.33325 10.5479C2.33325 8.68819 2.93811 7.09028 4.14784 5.75417C5.35756 4.41806 6.8652 3.75 8.67075 3.75C9.53742 3.75 10.3544 3.92153 11.1218 4.26458C11.8892 4.60764 12.5708 5.08611 13.1666 5.7C13.7444 5.08611 14.4169 4.60764 15.1843 4.26458C15.9517 3.92153 16.7687 3.75 17.6353 3.75C19.4409 3.75 20.953 4.41806 22.1718 5.75417C23.3905 7.09028 23.9999 8.67917 23.9999 10.5208C23.9999 11.4056 23.8464 12.2542 23.5395 13.0667C23.2326 13.8792 22.7721 14.6014 22.1583 15.2333L14.8728 22.5458C14.6381 22.7806 14.3763 22.9566 14.0874 23.074C13.7985 23.1913 13.4916 23.25 13.1666 23.25ZM14.2499 9.16667C14.4305 9.16667 14.602 9.21181 14.7645 9.30208C14.927 9.39236 15.0534 9.50972 15.1437 9.65417L16.9853 12.4167H21.4812C21.6076 12.1097 21.7024 11.7983 21.7655 11.4823C21.8287 11.1663 21.8603 10.8458 21.8603 10.5208C21.8242 9.275 21.4089 8.20521 20.6145 7.31146C19.8201 6.41771 18.827 5.97083 17.6353 5.97083C17.0756 5.97083 16.5385 6.07917 16.0239 6.29583C15.5093 6.5125 15.0624 6.82847 14.6833 7.24375L13.952 8.02917C13.8617 8.1375 13.7444 8.22326 13.5999 8.28646C13.4555 8.34965 13.311 8.38125 13.1666 8.38125C13.0221 8.38125 12.8777 8.34965 12.7333 8.28646C12.5888 8.22326 12.4624 8.1375 12.3541 8.02917L11.6228 7.24375C11.2437 6.82847 10.8013 6.50347 10.2958 6.26875C9.7902 6.03403 9.24853 5.91667 8.67075 5.91667C7.47909 5.91667 6.48603 6.37257 5.69159 7.28438C4.89714 8.19618 4.49992 9.275 4.49992 10.5208C4.49992 10.8458 4.527 11.1663 4.58117 11.4823C4.63534 11.7983 4.72561 12.1097 4.852 12.4167H9.91659C10.0971 12.4167 10.2687 12.4618 10.4312 12.5521C10.5937 12.6424 10.7201 12.7597 10.8103 12.9042L11.7583 14.3125L13.2208 9.925C13.293 9.70833 13.4239 9.52778 13.6135 9.38333C13.803 9.23889 14.0152 9.16667 14.2499 9.16667ZM14.5749 12.6875L13.1124 17.075C13.0402 17.2917 12.9048 17.4722 12.7062 17.6167C12.5076 17.7611 12.2909 17.8333 12.0562 17.8333C11.8756 17.8333 11.7041 17.7882 11.5416 17.6979C11.3791 17.6076 11.2527 17.4903 11.1624 17.3458L9.32075 14.5833H6.55825L12.977 21.0021C13.0131 21.0382 13.0447 21.0608 13.0718 21.0698C13.0989 21.0788 13.1305 21.0833 13.1666 21.0833C13.2027 21.0833 13.2343 21.0788 13.2614 21.0698C13.2885 21.0608 13.3201 21.0382 13.3562 21.0021L19.7478 14.5833H16.4166C16.236 14.5833 16.0645 14.5382 15.902 14.4479C15.7395 14.3576 15.6041 14.2403 15.4958 14.0958L14.5749 12.6875Z"
                    fill={fill}
                />
            </G>
        </Svg>
    );
}
