import { NextApiResponse, NextApiRequest } from 'next'

type ResponseData = {
    status: string
}
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>,
) {
    res.status(200).json({ status: 'pass' })
}
