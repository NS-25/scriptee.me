const SignUp = () => {
  return (
    <>
      <div>
        <h2>Sign Up</h2>
        <form>
          <input type="email" placeholder="Email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?
        </p>
      </div>
    </>
  );
};

export default SignUp;
