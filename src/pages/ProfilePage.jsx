import { useForm } from "react-hook-form";
import images from "../assets/images";
import { useAuth } from "../context/AuthContext.";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const { user, getUser, updateUser } = useAuth();
  const [isHovered, setIsHovered] = useState(false); // Estado para saber si el mouse está sobre la imagen
  const params = useParams();
  const [imageSrc, setImageSrc] = useState(params.img); // Imagen por defecto

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result); // Guardar la imagen en base64
      };
      reader.readAsDataURL(file);
    }
  };
  
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const [modal, setModal] = useState(false);
  const password = watch("newPassword");
  const changeModal = () => {
    setModal(!modal);
    reset();
  };
  
  useEffect(() => {
    async function loadProfile() {
      if (params.id) {
        const profile = await getUser(params.id);
        setValue("firstname", profile.firstname);
        setValue("lastname", profile.lastname);
        setValue("email", profile.email);
    
        if (profile.img) {
          setImageSrc(profile.img); // Cargar la imagen desde la BD
        }
      }
    }
    loadProfile();
  }, [user, getUser, setValue]);

  const changePassword = handleSubmit(async (data) => {
    if (!data.password || !data.newPassword || !data.confirmPassword) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (data.newPassword !== data.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    await updateUser(user.id, { password: data.newPassword });
    alert("Contraseña actualizada correctamente");
    changeModal();
  });

  const onSubmit = handleSubmit(async (data) => {
    const updatedData = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      img: imageSrc, // Guardamos la imagen como base64 en JSON
    };
  
    if (params.id) {
      await updateUser(params.id, updatedData); // Enviar como JSON
      const updatedProfile = await getUser(params.id); // Recargar datos del usuario
      setImageSrc(updatedProfile.img); // Actualizar la imagen con la nueva del backend
    }
  });
  

  return (
    <div className=" h-[85vh]  max-w-[1200px] p-9 w-full flex flex-col rounded-2xl border border-[#A1A3AB] shadow-md m-7 ">
      <nav className="flex justify-between p-4 font-['Inter'] font-medium text-2xl">
        <h2>
          <span
            className="border-[#F24E1E] border-solid  
        border-b-4 font-semibold"
          >
            Account Inform
          </span>
          ation
        </h2>
        <p className="font-['Montserrat'] text-base underline underline-offset-4 font-semibold">
          Go back
        </p>
      </nav>
      <div className="accountInfo flex p-4 items-center gap-4">
        <div
          className="relative inline-block w-40 h-40"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Imagen de perfil */}
          <img
            src={imageSrc}
            alt={user?.firstname || "Profile"}
            className="w-40 h-40 rounded-full object-cover border-2 border-gray-300"
          />

          {/* Capa semi-transparente con texto */}
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-full">
              <span className="text-white font-semibold">Cambiar</span>
            </div>
          )}

          {/* Input invisible pero funcional */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        <div className="font-['Inter'] ">
          <h2 className="text-xl font-semibold">
            {user.firstname} {user.lastname}
          </h2>
          <span className="font-normal text-base">{user.email}</span>
        </div>
      </div>
      {!modal ? (
        <>
          <div className="accountForm rounded-2xl border border-[#A1A3AB] shadow-md ">
            <form
              onSubmit={onSubmit}
              className="flex flex-col p-7 w-full max-w-[1200px]"
            >
              <label
                htmlFor="firstname font-['Montserrat'] "
                className="text-sm font-semibold mt-4"
              >
                First Name
              </label>
              <input
                type="text"
                className="p-2 w-1/2 border rounded-lg  border-[#565454] mt-2"
                autoFocus
                {...register("firstname", {
                  required: "El firstname es obligatorio",
                })}
              />
              {errors.firstname && (
                <p className="text-red-500">{errors.firstname.message}</p>
              )}

              <label
                htmlFor="lastname font-['Montserrat'] "
                className="text-sm font-semibold mt-4"
              >
                Last Name
              </label>
              <input
                className="p-2 w-1/2 border rounded-lg  border-[#565454]"
                id="lastname"
                {...register("lastname", {
                  required: "El lastname es obligatorio",
                })}
              />
              <label
                htmlFor="email font-['Montserrat'] "
                className="text-sm font-semibold mt-4"
              >
                Email Address
              </label>
              <input
                className="p-2 w-1/2 border rounded-lg  border-[#565454]"
                type="email"
                {...register("email", { required: "El email es obligatorio" })}
              />
              <label
                htmlFor="number font-['Montserrat'] "
                className="text-sm font-semibold mt-4"
              >
                Contact Number
              </label>
              <input
                className="p-2 w-1/2 border rounded-lg  border-[#565454]"
                type="text"
              />
              <label
                htmlFor="position font-['Montserrat'] "
                className="text-sm font-semibold mt-4"
              >
                Position
              </label>
              <input
                className="p-2 w-1/2 border rounded-lg  border-[#565454]"
                type="text"
              />
              <div className="options flex gap-5 mt-5">
                <button
                  type="submit"
                  className="bg-[#F24E1E] w-auto text-white p-2 rounded-md"
                >
                  Update Info
                </button>
                <button
                  className="bg-[#F24E1E] w-auto text-white p-2 rounded-md"
                  onClick={changeModal}
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="accountForm rounded-2xl border border-[#A1A3AB] shadow-md ">
            <form
              onSubmit={changePassword}
              className="flex flex-col p-7 w-full max-w-[1200px]"
            >
              <h3 className="text-sm font-semibold mt-4 font-['Montserrat']">
                CURRENT PASSWORD
              </h3>
              <input
                type="password"
                className="p-2 w-1/2 border rounded-lg  border-[#565454] mt-2"
                autoFocus
                {...register("password")}
              />
              <label
                htmlFor="lastname font-['Montserrat'] "
                className="text-sm font-semibold mt-4"
              >
                New Password
              </label>
              <input
                type="password"
                className="p-2 w-1/2 border rounded-lg  border-[#565454]"
                id="lastname"
                {...register("newPassword")}
              />
              <label
                htmlFor="email font-['Montserrat'] "
                className="text-sm font-semibold mt-4"
              >
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === password || "Las contraseñas no coinciden",
                })}
                className="p-2 w-1/2 border rounded-lg  border-[#565454]"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}

              <div className="options flex gap-5 mt-5">
                <button
                  className="bg-[#F24E1E] w-auto text-white p-2 rounded-md"
                  onClick={changePassword}
                >
                  Update Password
                </button>
                <button
                  type="button" // Evita que el formulario se envíe al hacer clic en "Cancel"
                  className="bg-[#F24E1E] w-auto text-white p-2 rounded-md"
                  onClick={changeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
