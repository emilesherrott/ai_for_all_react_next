# JSX - JS

React uses JSX (Jasascript XML) to allow us to write HTML-like syntax directly in Javascript making it easier for us to define our UI.

Browsers don't understand JSX so it needs to be transpilled into vanilla Javascript.

**Example of JSX**
```jsx
<div>Hello World</div>
```

**Plain Javascript equivalent**
```js
React.createElement('div', null, 'Hello World')
```

- First argument: The type of element we want React to create
- Second argument: The attributes of the element
- Third argument: The content or children of the 'h1' element