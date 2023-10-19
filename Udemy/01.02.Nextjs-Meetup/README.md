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

- Two ways of pre-rendering
  - A
  - B
- 