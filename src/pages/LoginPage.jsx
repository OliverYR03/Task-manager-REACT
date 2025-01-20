import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/AuthContext.";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import images from "../assets/images";

function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, isAuthenticated, errors: signinErrors } = useAuth();
  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  return (
    <div className="backLogin bg-[#FF6767] w-screen bg-login1 h-screen">
  
      <div className="h-[calc(100vh-100px)] flex items-center justify-center">
        <div className="items-center bg-white opacity-100 p-10 rounded-md  w-[1236px] h-[767px] grid grid-cols-2">
          <div className=" flex flex-col content-center">
            <h1 className="font-bold text-4xl">Sign in</h1>
            {signinErrors.map((error, i) => (
              <div className="bg-red-500 p-2 text-[#FFFFF] my-2" key={i}>
                {error}
              </div>
            ))}
            <form onSubmit={onSubmit} className="my-6">
              <div className="input-group  text-base">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Username"
                  {...register("email", { required: true })}
                  className="inputEmail w-full border rounded-lg px-4 py-3 my-3 border-[#565454] placeholder:text-base"
                />
                {errors.email && (
                  <p className="text-red-500">email is required</p>
                )}
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                {...register("password", { required: true })}
                className="w-full border rounded-lg px-4 py-3 my-4 border-[#565454] placeholder:text-base"
              />
              {errors.password && (
                <p className="text-red-500">password is required</p>
              )}
              <div className=" mt-1 remember items-center flex flex-row">
                <input type="checkbox" className="text-[90px]"/>
                <p className="items-center align-middle">Remember Me</p>
              </div>
              <button type="submit" className="mt-4 bg-[#FF9090] text-white rounded-md w-[129px] h-[60px]">Login</button>
            </form>


            <p className="mt-16 flex gap-x-2 items-center "> 
              Or. Login with 
              <i className="fa-brands fa-square-facebook text-[#0068f0] text-3xl"></i>
              <FcGoogle className="text-3xl" />
              <FaSquareXTwitter className="text-3xl" />
              </p>
            <p className="flex gap-x-2 ">
              No tienes una cuenta ?
              <Link to="/register" className="text-sky-500">
                Create One
              </Link>
            </p>
          </div>
          <div className="img flex justify-end align-bottom">
            <img src={images.login2} alt="" className="w-[613px] h-[613px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
