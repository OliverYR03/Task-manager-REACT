import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import images from "../assets/images";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();


  const onSubmit = handleSubmit(async (values) => {
    signup(values);
    navigate("/login");
  });

  return (
    <div className="backLogin bg-[#FF6767] w-screen h-screen">
      <div className="h-[calc(100vh-100px)] flex items-center justify-center">
        <div className="items-center bg-white opacity-100 p-10 rounded-md  w-[1236px] h-[767px] grid grid-cols-2">
          <img src={images.register} alt="" srcset="" />

          <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            {registerErrors.map((error, i) => (
              <div className="bg-red-500 p-2 text-white" key={i}>
                {error}
              </div>
            ))}
            <h1 className="text-2xl font-bold">Registrar</h1>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Usuario"
                {...register("username", { required: true })}
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
              />
              {errors.username && (
                <p className="text-red-500">username is required</p>
              )}
              <input
                type="email"
                name="email"
                placeholder="Correo"
                {...register("email", { required: true })}
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
              />
              {errors.email && (
                <p className="text-red-500">email is required</p>
              )}
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                {...register("password", { required: true })}
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
              />
              {errors.password && (
                <p className="text-red-500">password is required</p>
              )}
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirmar contraseña"
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
              />
              <button type="submit">Registrar</button>
            </form>
            <p className="flex gap-x-2 justify-between">
              Ya tienes una cuenta ?
              <Link to="/login" className="text-sky-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
