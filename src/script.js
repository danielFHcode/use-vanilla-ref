const { create: genRandom } = require('random-seed');

let seed = 0;
function randomId(
    length = 10,
    characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()'
) {
    let result = '';
    const random = genRandom(seed);
    for (let i = 0; i < length; i++) {
        result += characters[random(characters.length)];
    }
    seed++;
    return result;
}

module.exports = function useRef() {
    const id = randomId();
    return [
        `data-ref-id="${id}"`,
        () => document.querySelector(`[data-ref-id="${id}"]`),
    ];
};
