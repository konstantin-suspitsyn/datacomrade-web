import { useForm } from "react-hook-form";
import api from "../../api/Axios";
import { useState } from "react";
import { NO_SERVER_ERR } from "./LoginConsts";
import { errorMessageRender } from "../../components/htmlrenders/Alerts";

const REGISTER_URL = "/v1/users";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const [errMsg, setErrMsg] = useState(null);
  const [successMsg, setSuccess] = useState(null);

  // Sends register request to server
  const onSubmit = async (data) => {
    setErrMsg(null);
    setSuccess(null);

    api
      .post(REGISTER_URL, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.data?.message) {
          setSuccess(response.data.message);
        }
      })
      .catch((err) => {
        // if site is not available
        if (err.code == "ERR_NETWORK") {
          setErrMsg(NO_SERVER_ERR);
        }
        setErrMsg(err.response.data.message);
        console.log(errMsg);
      });
  };

  return (
    <main role="main" class="w-full  max-w-md mx-auto p-6">
      <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
              Register
            </h1>
          </div>
          <div class="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="grid gap-y-4">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-bold ml-1 mb-2 dark:text-white"
                  >
                    Электронная почта:
                  </label>
                  <div class="relative">
                    <input
                      // TODO: change to email
                      type="text"
                      class="bg-white py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm mb-2"
                      required
                      aria-describedby="email-error"
                      {...register("email", { required: true, maxLength: 52 })}
                    />
                    <p
                      class="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  <label
                    for="name"
                    class="block text-sm font-bold ml-1 mb-2 dark:text-white"
                  >
                    Имя пользователя:
                  </label>
                  <div class="relative">
                    <input
                      class="bg-white py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm mb-2"
                      type="text"
                      {...register("name", { required: true, maxLength: 25 })}
                    />
                  </div>
                  <label
                    for="password"
                    class="block text-sm font-bold ml-1 mb-2 dark:text-white"
                  >
                    Пароль:
                  </label>
                  <div class="relative">
                    <input
                      type="password"
                      class="bg-white py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm mb-2"
                      {...register("password", {
                        required: true,
                        maxLength: 30,
                        minLength: 8,
                      })}
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  value="Регистрация"
                  class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {successMsg != null ? <div>{successMsg}</div> : null}
      {errMsg != null ? errorMessageRender(errMsg) : null}
    </main>
  );
};

export default Register;
