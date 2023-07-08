import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session }) {
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
        };
      }
      return session;
    },
  },
  app: {
    signIn: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
