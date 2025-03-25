import Layout from "./Layout";
import useAuth from "../hooks/useAuth";

const DashBoard = () => {
  const { authed } = useAuth();

  // console.log("authed ::::", authed);
  return (
    <Layout>
      <div className="w-full min-h-100 border-2-green bg-green-300">
        {authed ? <h1>Welcome to our DashBoard</h1> : <h1>Please Sign in!</h1>}
      </div>
    </Layout>
  );
};

export default DashBoard;
