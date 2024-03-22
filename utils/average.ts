export function calculateAverage(numbers: number[]) {
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((acc, current) => acc + current, 0);
    const average = sum / numbers.length;

    return average;
}
