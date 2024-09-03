import { handleGithubLogin } from "@/lib/actions"

 
export default function SignIn() {
  return (
    <form
      action={handleGithubLogin}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  )
} 