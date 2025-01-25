import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import images from "../assets/images";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  const password = watch("password");

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
    navigate("/login");
  });

  return (
    <div className="backLogin bg-[#FF6767] w-screen h-screen bg-login1 cover">
      <div className="h-[calc(100vh-100px)] flex items-center justify-center">
        <div className="items-center bg-white opacity-100 px-10  pb-8 rounded-md  w-[1236px] h-[767px] grid grid-cols-2">
          <img src={images.register} className="w-[443px] h-[652px]" />

          <div className="max-w-md w-full p-10 rounded-md">
            {registerErrors.map((error, i) => (
              <div className="bg-red-500 p-2 text-white" key={i}>
                {error}
              </div>
            ))}
            <h1 className="mb-5 text-4xl font-bold">Sign Up</h1>
            <form onSubmit={onSubmit}>
              <div className="lastname flex flex-col justify-center">
                <img src={images.uLastName} className="absolute p-3 min-w-10" />
                <input
                  type="text"
                  name="firstname"
                  {...register("firstname", { required: true })}
                  placeholder="Enter Fist Name"
                  className=" pl-16 font-medium border rounded-lg px-4 py-3 my-3 border-[#565454] placeholder:text-base h-[55px] w-[559px]"
                />
              </div>
              <div className="lastname flex flex-col justify-center">
                <img src={images.uName} className="absolute p-3 min-w-10" />
                <input
                  type="text"
                  name="lastname"
                  {...register("lastname", { required: true })}
                  placeholder="Enter Last Name"
                  className="pl-16 font-medium border rounded-lg px-4 py-3 my-3 border-[#565454] placeholder:text-base h-[55px] w-[559px]"
                />
              </div>
              {/* a */}
              <div className="lastname flex flex-col justify-center">
                <img src={images.user} className="absolute p-3 min-w-10" />
                <input
                  type="text"
                  name="username"
                  placeholder="Usuario"
                  {...register("username", { required: true })}
                  className="pl-16 font-medium border rounded-lg px-4 py-3 my-3 border-[#565454] placeholder:text-base h-[55px] w-[559px]"
                />
                {errors.username && (
                  <p className="text-red-500">El usuario es requerido</p>
                )}
              </div>
              <div className="lastname flex flex-col justify-center">
                <img src={images.mail} className="absolute p-3 min-w-10" />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  {...register("email", { required: true })}
                  className="pl-16 font-medium border rounded-lg px-4 py-3 my-3 border-[#565454] placeholder:text-base h-[55px] w-[559px]"
                />
                {errors.email && (
                  <p className="text-red-500">El correo es requerido</p>
                )}
              </div>
              <div className="lastname flex flex-col justify-center">
                <img src={images.lock} className="absolute p-3 min-w-10" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                  {...register("password", { required: true })}
                  className="pl-16 font-medium border rounded-lg px-4 py-3 my-3 border-[#565454] placeholder:text-base h-[55px] w-[559px]"
                />
                {errors.password && (
                  <p className="text-red-500">La contraseña es requerida</p>
                )}
              </div>
              <div className="lastname flex flex-col justify-center">
                <img src={images.lockLine} className="absolute p-3 min-w-10" />
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirmar contraseña"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password || "Las contraseñas no coinciden",
                  })}
                  className="pl-16 font-medium border rounded-lg px-4 py-3 my-3 border-[#565454] placeholder:text-base h-[55px] w-[559px]"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div className=" mt-1 remember items-center flex flex-row">
                <input type="checkbox" required className="w-4 h-4" />
                <p className="ml-6 items-center align-middle font-medium">
                  I agree all terms
                </p>
              </div>
              <button
                type="submit"
                className="mt-4 bg-[#FF9090] text-white rounded-md w-[129px] h-[60px]"
              >
                Registrar
              </button>
            </form>
            <p className="mt-4 flex gap-x-2 font-medium">
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
