import { useRouter } from 'next/router'

const DetailPage = () => {
  const router = useRouter()

  // For 'http://localhost:3000/news/something' then,
  console.log(router.query.newsId) // something

  // send a request to the backend API
  // to fetch the news item with newsId

  return <h1>DetailPage</h1>
}

export default DetailPage
