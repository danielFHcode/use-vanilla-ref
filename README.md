# Use (Vanilla) Ref

This library - obviously inspired by the react hook - allows you to create a distinct reference to an object easily.

## Table of Contents

-   ### [Installation](#installation)
-   ### [Usage](#usage)
-   ### [Docs](#docs)

## Installation

You can install this via NPM:

```console
npm install use-vanilla-ref
```

## Usage

You can use the library when creating an html element; For example, lets say you added a title to your body:

```js
document.body.innerHtml = '<h1>Hello World</h1>';
```

And now you want to add an exclamation mark to it every time the user clicked on it.

In that case, you'd first run the useRef function:

```js
const [ref, selector] = useRef();
```

Then you'd add the ref to the element:

```js
document.body.innerHtml = `<h1 ${ref}>Hello World</h1>`;
```

Finally, you can use the selector function to select the element and add the listener:

```js
const titleElement = selector();

titleElement.addEventListener('click', () => (titleElement.innerText += '!'));
```

## Docs

### useRef`: () => [ string, (() => HTMLElement) ]`

Parameters: none

Returns: An array made up of 2 elements:

-   ref`: string` - A string, which one can add as a part of an html tag.

    Example:

    ```js
    const [ref, _] = useRef();

    document.body.innerHtml += `<some-element ${ref} />`;
    ```

-   selector`: () => HTMLElement` - A function which takes in no parameters and returns the HTML Element which had the `ref` property.

    Example:

    ```js
    const [ref, selector] = useRef();

    document.body.innerHtml += `<p ${ref}>Hello</p>`;

    selector().innerText += '!';

    // result:
    // <body>
    //   <p>Hello!</p>
    // </body>
    ```
