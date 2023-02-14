# iframe-penetrate-demo

Introduce a technology when an iframe overlapped main content and two pages can still interactive simultaneously, just like they are in the same page.

See online [demo](https://troy351.github.io/iframe-penetrate-demo/)

## How

The key was `document.elementFromPoint` to check whether user hovered iframe contents and toggle `pointer-events` of `<iframe>` element.

## Shortage

- May cause performance issues due to page complexity
- When iframe contents contains native scrollbar and user hovers on the scrollbar itself, `document.elementFromPoint` won't return the expected result.
