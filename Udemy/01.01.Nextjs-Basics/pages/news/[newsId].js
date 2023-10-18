import { useRouter } from 'next/router'

const DetailPage = () => {
  const router = useRouter()

  const newsId = router.query.newsId
  console.log(newsId)

  return <p>{`The Detail Page - ${newsId}`}</p>
}

export default DetailPage
