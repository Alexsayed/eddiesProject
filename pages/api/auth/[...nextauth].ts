import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
// In a real app, you should connect to a database or authentication service
// const users = [
//   // { username: 'admin', password: 'admin123', role: 'admin' },
//   { username: 'alex', password: 'alex', role: 'admin', },
//   // { username: 'user', password: 'user123', role: 'user' }, 
// ];
const users = [{ username: process.env.ADMIN_USERNAME, password: process.env.ADMIN_PASSWORD }]
const users1 = { username: process.env.ADMIN_USERNAME, password: process.env.ADMIN_PASSWORD }

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log('========================credentials===============================:', credentials);
        // Check if credentials is undefined or doesn't contain the expected fields
        if (!credentials || !credentials.username || !credentials.password) {
          return null; // Return null if credentials are not valid
        }
        const { username, password } = credentials;
        // bcrypt.hash(credentials.password, 10, (err, hash) => {
        //   if (err) {
        //     console.error('Error hashing password:', err);
        //   } else {
        //     console.log('Hashed Password:', hash);
        //     // Store this hashed password in your .env file
        //     // Example: ADMIN_PASSWORD=<hashed_password>
        //   }
        // });    
        continue here
        if (users1.username === username) {
          console.log('========================users1.username===============================:', users1.username);


        }
        // const user = users.find((u) => u.username === username && u.password === password);
        const user = users.find((u) => u.username === username);
        console.log('========================user.passwords===============================:', user?.password);
        console.log('======================== if user password===============================:', password);


        if (!user) {
          console.error('User not found:', credentials.username);
          return null; // Alternatively, you can return an error object
        }
        // continue1 here, find out how to comapre password to hashPassword
        if (user && user.password && await bcrypt.compare(password, user.password)) {
          console.log('======================== if user.password ===============================:', user.password);
          console.log('======================== if user password===============================:', password);
          console.log('======================== isMatch ===============================:', await bcrypt.compare(password, user.password));

          return { username: user.username, role: user.role };
          // }
          // if (await bcrypt.compare(password, 'alex1')) {
          //   console.log('======================== isMatch ===============================:', bcrypt.compare(password, user.password));

        }

        // if (user.password) {
        //   bcrypt.compare(password, user.password, (err, isMatch) => {
        //     if (err) throw err;
        //     if (isMatch) {
        //       // return done(null, user)
        //       console.log('======================== isMatch ===============================:', isMatch);

        //     } else {
        //       console.log('======================== not isMatch ===============================:', isMatch);

        //       // return done(null, false, { message: "Password incorrect" })
        //     }
        //   })
        // } else {
        //   console.log("User password is not defined");
        // }

        // if (user && await bcrypt.compare(password, user.passwordHash)) {
        //   return { id: user.username, role: user.role };
        // }
        // if (user) {
        //   console.log('========================if User :==============', user); // Debugging line

        //   // return { id: username, role: user.role };
        //   return { username: username, role: user.role };
        // }
        console.log('========================User not found:==============', credentials); // Debugging line
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Custom sign-in page     
    error: '/auth/error', // Custom error page      
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,  // 30 days session duration
    updateAge: 24 * 60 * 60,    // JWT token will be updated every 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log('========user callbacks', user)
      console.log('========token callbacks', token)
      console.log('========token.id callbacks', token.id)

      if (user) {
        console.log('======== if user ', user)
        token.role = user.role; // Add role to the token
      }
      return token;
    },
    async session({ session, token }) {
      console.log('========token[..]', token)
      // console.log('========session [..]', session)
      session.user.role = token.role; // Add role to session object
      // session.user.name = to
      console.log('========session [..]', session)
      console.log('========process.env.NODE_ENV', process.env.NODE_ENV);
      return session;
    },


  },
});
