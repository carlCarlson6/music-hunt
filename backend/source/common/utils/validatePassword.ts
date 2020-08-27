import { compare } from "bcryptjs";

export const validatePassword = async (password: string, hashedPassword: string) => {
    const validPassword = await compare(password, hashedPassword);
    if(!validPassword) { throw new Error('invalid password') }
}