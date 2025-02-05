import { useForm } from "react-hook-form";
import images from "../assets/images";
import { useAuth } from "../context/AuthContext.";
import { useEffect, useState } from "react";

function ProfilePage() {
  const { user, getUser, updateUser } = useAuth();
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
    watch
  } = useForm();
  const [modal, setModal] = useState(false);
  const password = watch("newPassword");
  const changeModal = () => {
    setModal(!modal);
    reset();
  };

  useEffect(() => {
    async function loadProfile() {
      const profile = await getUser();
      console.log(profile);
      setValue("firstname", user.firstname);
      setValue("lastname", user.lastname);
      setValue("email", user.email);
    }
    loadProfile();
  }, []);

  const changePassword = handleSubmit((data) => {});

  const onSubmit = handleSubmit((data) => {
    const dataV = {
      ...data,
    };
    updateUser(user.id, dataV);
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
        <img
          className="h-[100px] w-[100px] rounded-full object-cover "
          src={images.yo}
          alt={user.firstname}
        />
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
                {...register("firstname")}
              />
              <label
                htmlFor="lastname font-['Montserrat'] "
                className="text-sm font-semibold mt-4"
              >
                Last Name
              </label>
              <input
                className="p-2 w-1/2 border rounded-lg  border-[#565454]"
                id="lastname"
                {...register("lastname")}
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
                {...register("email")}
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
                  type="submit"
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
