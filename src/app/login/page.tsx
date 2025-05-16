import { login, signup } from "@/lib/actions/auth-actions";

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <div className="flex items-center gap-16">
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </div>
    </form>
  );
}
