declare module 'next-auth' {
  interface Session {
    accessToken?: string
  }
  
  interface JWT {
    accessToken?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string
  }
}
