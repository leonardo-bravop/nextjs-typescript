import { NextApiRequest, NextApiResponse } from "next"
import { conn } from "../../../utils/database"

const task = (req: NextApiRequest, res: NextApiResponse) => {

    const { method, body } = req

    switch (method) {
        case 'GET':
            return res.status(200).json('gettin tasks')

        case 'POST':
            const { title, description } = body

            return res.status(201).json('post a task')

        default:
            return res.status(400).json('invalid method');
    }

}

export default task