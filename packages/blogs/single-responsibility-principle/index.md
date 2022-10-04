---
title: Single Responsibility Principle
description: >
    A Class or Method should be responsible for a single
    part of a program's functionality.
tags:
    - SOLID
    - Best Practices
published: false
coverImage: 'https://alloutdoor.2dimg.com/1/1285064094_34.jpg'
---

## Analogy


## Diagram


## Examples

The following are basic examples of code that violates the Single Responsibility Principle in one way or another. Focus on understanding why they violate the principle.

1. You have Error handling in your class/module

```javascript
function getData (url) {
    return fetch(url)
        .then(data => data.json())
        .catch(error => {
            // Custom Error Handling
        })
}
```

2. You have both Presentation and Business Logic in your class/module

> What is a Presentation Layer ?
The Presentation Layer contains code responsible for handling the
user interface

> What is a Business Layer ?
The Business Layer contains code which works with data, manipulating
it according to the rules of your business.

```javascript
import React, { useState, useEffect } from 'react';

import getData from './getData'
import ChildComponent from './ChildComponent'

function PresentationComponent () {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
   async function fetchData () {
      const data = await getData('https://hn.algolia.com/api/v1/search?query=solid');
      setData(data);
   }
   fetchData()
  }, [])

  const content = data.hits.map(props => <ChildComponent {...props} />)

  return (
      <main>
          <h1>Presentation Title</h1>
          <p>Description ...</p>
          <section>
              {content}
          </section>
      </main>
  )
}

export default PresentationComponent
```

3. Persistence layers are not accessed/handled in isolation

> What is a Persistence Layer ?
The persistence layer contains code that deals with persisting data. eg: data store, databases, APIs ...
NOTE: Please do not access databases from the client! use [CRUDs](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) instead.

```javascript
import React, { useState, useEffect } from 'react';

import getData from './getData'
import ChildComponent from './ChildComponent'

function PresentationComponent () {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
   async function fetchData () {
      const data = await getData('https://hn.algolia.com/api/v1/search?query=solid');
      setData(data);

      data.hits.forEach(filteredData =>
        postData('https://...', filteredData)
    )
   }
   fetchData()
  }, [])

  const content = data.hits.map(props => <ChildComponent {...props} />)

  return (
      <main>
          <h1>Presentation Title</h1>
          <p>Description ...</p>
          <section>
              {content}
          </section>
      </main>
  )
}

export default PresentationComponent
```

There are of course many other examples, let me know if you would like to see more of them. Let's refactor the examples above, shall we?


1. You have Error handling in your class/module
```javascript
// getFilteredData.js
import errorHandler from './errorHandler'

function getFilteredData (url, filter) {
    return fetch(url)
        .then(data => filter(data))
        .catch(error => {
            errorHandler({
                type: 'API_ERROR',
                source: error
            })
        })
}

// errorHandler.js
import sentryLogger from './sentryLogger'

function errorHandler (error) {
    sentryLogger.captureException(error)
    dispatch('error', error)
}
```

We are delegating different responsibilities to both functions by abstracting the errorhandler, notice how `getFilteredData` doesn't know how to handle errors anymore, but also how `errorHandler` only works on `handling`, it's not concerned about Presentation or Business Logic. The error handler can now be expanded to incorporate appropriate percentile logging, manage correlation ids, etc..

2. You have both Presentation and Business Logic in your class/module

```javascript
// ./PresentationComponent.jsx
import {uniq} from 'ramda'
import ChildComponent from './ChildComponent'

const PresentationComponent = ({data}) => {
    const matrix = data.forEach(props => <ChildComponent {...props} />)

    return (
        <main>
            <h1>Presentation Title</h1>
            <p>Description ...</p>
            <section>
                {matrix}
            </section>
        </main>
    )
}

// ./SomeBusinessLayer.jsx
import PresentationComponent from './PresentationComponent'

const data = getFilteredData('https://...', uniq)

<PresentationComponent data={data} />
```

Notice how the Presentation Component doesn't know where the data is fetched from anymore, instead it expects it to be supplied.

3. Persistence layers are not accessed/handled in isolation

```javascript
// ./PresentationComponent.jsx
import {uniq} from 'ramda'
import ChildComponent from './ChildComponent'

const PresentationComponent = ({data}) => {
    const matrix = data.forEach(props => <ChildComponent {...props} />)

    return (
        <main>
            <h1>Presentation Title</h1>
            <p>Description ...</p>
            <section>
                {matrix}
            </section>
        </main>
    )
}

// ./SomeBusinessLayer.jsx
import PresentationComponent from './PresentationComponent'

const data = getFilteredData('https://...', uniq)

data.forEach(filteredData =>
    postFilteredData('https://...', filteredData)
)

<PresentationComponent data={data} />
```

Notice how the Presentation Component doesn't know where the data is fetched from anymore, instead it expects it to be supplied.


> FAQ
Where does the fetch gets abstracted to? Well, it depends on how your Application is structured and not in the scope of this post.

## Plain English
## Technical Definition
