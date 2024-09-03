import { register } from "@/lib/actions"

const RegisterPage = () => {
    return (
        <div>
            <form action={register}>
                <input type="text" placeholder="Username" name="username"/>
                <input type="email" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <input type="password" placeholder="Confirm Password" name="passwordRepeat"/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterPage