import { BackgroundColor, SizeMap } from './type';
import { COLOR } from '../../tokens/color';

export const sizeMap: SizeMap = {
    full: {
        width: '100%',
        paddingVertical: 10,
    },
    small: {
        width: 110,
        height: 40,
    },
};

export const bgColorMap: BackgroundColor = {
    'brand-color': COLOR.BLUE[500],
    white: '#FFFFFF',
    'orange-500': COLOR.ORANGE[500],
    'dark-grey-500': COLOR.DARK_GREY[500],
    'light-gray-500': COLOR.LIGHT_GREY[500],
    black: '#000000',
    'red-500': COLOR.RED[500],
};
