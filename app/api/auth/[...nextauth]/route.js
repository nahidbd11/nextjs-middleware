const { authOptions } = require("@/app/_utilities/authOptions");
const { default: NextAuth } = require("next-auth/next");


const handler=NextAuth(authOptions);

export {handler as GET,handler as POST};