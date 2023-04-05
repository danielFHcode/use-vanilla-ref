const [ref, selector] = useRef();
const [ref2, selector2] = useRef();

document.body.innerHTML = `
    <p ${ref}>Hello!</p>
    <p ${ref2}>Hello!</p>
`;

setTimeout(() => (selector().innerText += '!!'), 1000);
setTimeout(() => (selector2().innerText += '!!!!'), 2000);
