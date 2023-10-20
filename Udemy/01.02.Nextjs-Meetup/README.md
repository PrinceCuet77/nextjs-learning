# Table Of Content

# Next JS Meetup

## The `_app.js` File & Layout Wrapper

- Can wrap all the page components with `Layout` wrapper component

```js
import Layout from '../components/layout/Layout'
import MeetupList from '../components/meetups/MeetupList'

const HomePage = () => {
  return (
    <>
      <Layout>
        <MeetupList meetups={DUMMY_MEETUPS} />
      </Layout>
    </>
  )
}

export default HomePage
```

- But, it's not feasible
- In `_app.js` file, `MyApp` is a special component acts as the root component, Next JS will render
- `Component` is a props Component
- It holds the actual page contents which should be rendered
- It will be different whenever switching a page
- `pageProps` is special props my pages might be getting
- `Component` & `pageProps` are passed by Next JS
- In `_app.js` file, it is the actual page content of our different pages
- And it will change whenever navigating from PageA to PageB
- Instead of wrapping different page file, utilize `_app.js` file
- Simply wrap `Component` props with `Layout` component

```js
import Layout from '../components/layout/Layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
```

## Using programmatic (Imperative) Navigation

- Use `useRouter` hook to push a new page onto the stack of pages
- It's the equivalent of using the `Link` component

```js
import { useRouter } from 'next/router' // Importing package

function MeetupItem(props) {
  const router = useRouter() // Use 'useRouter' hook

  const showDetailsHandler = () => {
    router.push('/' + props.id) // Programmatically navigate to dynamic link
  }

  return <button onClick={showDetailsHandler}>Show Details</button>
}

export default MeetupItem
```

## Data Fetching for Static Pages

- While fetching data from an API, database or file system, use like -

```js
import { useState, useEffect } from 'react'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Title',
    image: 'Image',
    address: 'Address',
    description: 'Description',
  },
]

const HomePage = () => {
  const [meetups, setMeetups] = useState([])

  useEffect(() => {
    setMeetups(DUMMY_MEETUPS) // Data fetching
  }, [])

  return <MeetupList meetups={meetups} />
}

export default HomePage
```

- _Problem:_
  - View an empty `[]` in the page source code
  - Can't find the page content while SEO

![pre-rendering Problem](photo/pre-rendering-problem.png)

- _Reason:_
- When component rendered initially, takes empty array for the first time
- An empty array data rendered on the server and sent it to the client
- Client will see the received content
- After that component re-render as using `useEffect`
- React will hand over it and load once again with updated data

![Pre-rendering Forms](photo/two-pre-rendering-form.png)

- To control how the pages should be rendered use two pre-rendering method
- Two ways of pre-rendering
  - Static Generation
  - Server-side Rendering
- _Static Generation:_
  - Used while building it for production
  - A page component is pre-rendered after building the application
- Use `getStaticProps` regarding that
- _MUST REMEMBER:_ Only works in the page component files
- Next JS looks `getStaticProps` in the page component file while rendering that page
- If find it then execute it during pre-rendering process
- So, Next JS first call that function then execute that pages component function
- _JOB:_ Prepared `props` for this page component
- In `getStaticProps`, execute any codes what only run on the server
- That code execute during the `build` process
- Inside `getStaticProps`, should fetch data from on API, database or file system
- Must return an object

## AA

- Use `revalidate` property
- Which works incremental Static Generation
- Takes number
- Number of seconds Next JS will wait until it regenerates this page for an incoming request
- So, this page not just generate in build process & also be generated at least every 10 seconds if there are requests coming in for this page
- Then these regenerated pages would replace the old pre-generated pages
- Ensures that the data is never older than 10 seconds
- The number of seconds depends on the data update frequency