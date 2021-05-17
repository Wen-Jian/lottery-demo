export const numberStringFormater = (val: string, digit: number) => {
    const originLength = val.length;
    if (originLength < digit) {
        return `${'0'.repeat(digit - originLength)}${val}`;
    }
    return val;
};
