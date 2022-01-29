import { NextApiRequest, NextApiResponse } from 'next'

const handleMail = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}

export default handleMail