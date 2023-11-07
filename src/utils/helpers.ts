const DIGITS: string = '0123456789ABCDEF';
export function getPageNumberFromUrl (url: string) {
    return (RegExp('page' + '=' + '(.+?)(&|$)').exec(url)||[,null])[1];
}

export function getIdFromObjectUrl (url: string) {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
}

export const getRandomColor = () : string => {
    let result = '';
    for (let i = 0; i < 6; ++i) {
        const index = Math.floor(16 * Math.random());
        result += DIGITS[index];
    }
    return '#' + result;
}

