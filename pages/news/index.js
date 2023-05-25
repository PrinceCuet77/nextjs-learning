import Link from 'next/link'

const NewPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-a-great-framework'>
            NextJS Is A Great FrameWork
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  )
}

export default NewPage
