

const Login = () => {
  return (
    <div className="login-container">
        <form>
            <h1>Go Business</h1>
            <p>Sign in to open your referral dashboard.</p>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" aria-label="Email address" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="********" aria-label="Password" />
            <button type="submit">Sign in</button>
        </form>

    </div>
  )
}

export default Login
