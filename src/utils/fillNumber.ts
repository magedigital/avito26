export const fillNumber = (s: string | number, l: number, char = '0'): string => {
    if (Number.isNaN(+s)) {
        return s.toString();
    }

    const chars = l - (+s).toString().length;

    if (chars <= 0) {
        return s.toString();
    }

    return [new Array(chars).fill(char), s].join('');
};
