export default function handler(req, res) {
  console.log(req.method)
  console.log(req.query)
    res.status(200).json({ message: 'Hello from Next.js!' })
  }