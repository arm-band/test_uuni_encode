const unescapeUnicode = (str) => {
    return str.replace(/\\u([a-fA-F0-9]{4})/g, (matchedString, group1) => {
        return String.fromCharCode(parseInt(group1, 16));
    });
};

window.addEventListener('load', () => {
    const originTA = document.querySelector('#origin');
    const decodedTA = document.querySelector('#decoded');
    originTA.addEventListener('blur', (e) => {
        decodedTA.value = unescapeUnicode(originTA.value);
    });
});
