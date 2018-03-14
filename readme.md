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

- [CanvasPage.newPage( courseId, pageData )](#canvaspage-newpage-courseid-data-)
- [CanvasPage.fetchPage( courseId, pageUrl )](#canvaspage-fetchpage-courseid-pageurl-)
- [CanvasPage.fetchPages( courseId, listOptions )](#canvaspage-fetchpages-courseid-listoptions-)
- [class: Page( courseId )](#canvaspage-courseid-data-)
  - [prop: page.url](#page-properties)
  - [prop: page.title](#page-properties)
  - [prop: page.body](#page-properties)
  - [prop: page.published](#page-properties)
  - [prop: page.frontPage](#page-properties)
  - [page.del()](#page-del-)
  - [page.fetch( pageUrl )](#page-fetch-pageurl-)
  - [page.get()](#page-get-)
  - [page.save()](#page-save-)

---

### CanvasPage.newPage( courseId, data )

- `courseId` <[number]> Course ID
- `data` <[PageData]> Optional
- `return` <[Page]>

Creates a new Page.

### CanvasPage.fetchPage( courseId, pageUrl )

- `courseId` <[number]> Course ID
- `pageUrl` <[string]> URL fragement for the page to retrieve.
- `return` <[Promise] <[Page]> >

Fetches a page from Canvas LMS.

### CanvasPage.fetchPages( courseId, listOptions )

- `courseId` <[number]> Course ID
- `listOptions` <[ListOptions]> Optional
- `return` <[Promise] <[Array] <[Page]> > >

Fetches a list of pages from Canvas LMS.

---

### Page( courseId )

- `courseId` <[number]>
- `data` <[PageData]> Optional

Creates a CanvasPage object for the specified course.

### Page Properties

- `url` <[string]> Read Only
- `title` <[string]>
- `body` <[string]>
- `published` <[boolean]>
- `frontPage` <[boolean]>

### page.del()

- `return` <[Promise] <[Page]> > The object is returned for chaining.

Deletes the page on Canvas LMS.

### page.fetch( pageUrl )

- `pageUrl` <[string]> The url fragment for the page
- `return` <[Promise] <[Page]> > The object is returned for chaining.

Internal page data is updated with the page from Canvas LMS.

### page.get()

- `return` <[PageData]> The Canvas Page Data.

### page.update( pageData )

- `pageData` <[PageData]>
- `return` <[Page]> The object is returned for chaining.

### page.save()

- `return` <[Promise] <[Page]> > The object is returned for chaining.

Updates the page in Canvas LMS with the internal page data.

# Types

### Canvas Page Data

- `url` <[string]> Page URL fragment
- `title` <[string]> Title of the page
- `body` <[string]> HTML body of the page
- `published` <[boolean]>
- `front_page` <[boolean]>

### List Options

- `sort` title | created_at | updated_at
- `order` asc | dec
- `search_term` <[string]>
- `published` <[boolean]>

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean"
[Page]: #api "Page"
[PageData]: #canvas-page-data "Page Data"
[ListOptions]: #list-options "List Options"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String"