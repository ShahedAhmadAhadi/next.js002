import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GETHUB_ID,
            clientSecret: process.env.GETHUB_SECRET
        })
    ]
})