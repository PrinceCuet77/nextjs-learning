// /api/new-meetup
// POST - /api/new-meetup

// req - incoming request
// res - sending back response
export default handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body

    const { title, image, address, description } = data
  }
}
