import dayjs from 'dayjs';

dayjs.locale('ko');

export function getTimeDifference(updateDateString: string) {
    const updateDate = dayjs(updateDateString);
    const now = dayjs();

    let totalSeconds = now.diff(updateDate, 'second');
    const days = Math.floor(totalSeconds / (3600 * 24));
    totalSeconds -= days * 3600 * 24;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds -= hours * 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초 전`;
}

export function getLastDays(date: string, length: number) {
    const days = [];

    for (let i = 0; i < length; i++) {
        const day = dayjs(date).subtract(i, 'day').format('DD');
        days.unshift(day);
    }

    return days;
}
