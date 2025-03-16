const SignIn = () => {
  return (
    <>
      <div>
        <h2>Sign In</h2>
        <form>
          <input type="email" placeholder="Email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don't have an account? <link>Sign In</link>
        </p>
      </div>
    </>
  );
};
export default SignIn;
