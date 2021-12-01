import { getSession } from 'next-auth/client'

const handler = async (req, res) => {
    const session = await getSession({req})
    if (!session) {
        res.status(401).json({'error': 'not_authenticated'})
    } else {
        res.status(200).json({'Message': 'Success', session})
    }
}

export default handler