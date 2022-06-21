import { NextApiRequest, NextApiResponse } from "next"

const idFunc = (req: NextApiRequest, res: NextApiResponse) => {

    const { method } = req
    const { id } = req.query

    switch (method) {
        case 'GET':
            return res.status(200).json(`gettin task ${id}`)

        case 'PUT':
            return res.status(200).json(`edit task ${id}`)

        case 'DELETE':
            return res.status(200).json(`delete  task ${id}`)

        default:
            return res.status(400).json('invalid method');
    }

}
export default idFunc