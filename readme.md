# Canvas LMS Objects: Pages

Object Oriented Class for Canvas LMS Page.

# Setup

```
$ npm install @redice44/canvas-lms-object-pages
```

### Node Environment Variables

```
CANVAS_DOMAIN=YOUR_CANVAS_DOMAIN
CANVAS_TOKEN=YOUR_CANVAS_API_TOKEN
```

# API
- [CanvasPage( courseId )](#canvaspage-courseid-data-)
- [page.del()](#page-del-)
- [page.fetch( pageUrl )](#page-fetch-pageurl-)
- [page.get()](#page-get-)
- [page.update( options )](#page-update-pagedata-)
- [page.save()](#page-save-)

---

### CanvasPage( courseId, data )

- `courseId` <[number]>
- `data` (Optional) <[CanvasPageData]>

Creates a CanvasPage object for the specified course.

### page.del()

- `return` <[Promise] <[CanvasPage]> > The object is returned for chaining.

Deletes the page on Canvas LMS.

### page.fetch( pageUrl )

- `pageUrl` <[string]> The url fragment for the page
- `return` <[Promise] <[CanvasPage]> > The object is returned for chaining.

Internal page data is updated with the page from Canvas LMS.

### page.get()

- `return` <[CanvasPageData]> The Canvas Page Data.

### page.update( pageData )

- `pageData` <[CanvasPageData]>
- `return` <[CanvasPage]> The object is returned for chaining.

### page.save()

- `return` <[Promise] <[CanvasPage]> > The object is returned for chaining.

Updates the page in Canvas LMS with the internal page data.

# Types

### Canvas Page Data

- `url` <[string]> Page URL fragment
- `title` <[string]> Title of the page
- `body` <[string]> HTML body of the page
- `published` <[boolean]>
- `front_page` <[boolean]>

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean"
[CanvasPage]: #api "Canvas Page"
[CanvasPageData]: #canvas-page-data "Canvas Page Data"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String"