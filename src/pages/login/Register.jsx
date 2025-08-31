import { useForm } from "react-hook-form";
import api from "../../api/Axios";
import { useState } from "react";
import {
  NO_SERVER_ERR,
  INPUT_TEXT_CLASS,
  BUTTON_FORM,
  FORM_BOX,
  formValidationError,
} from "./LoginConsts";
import {
  errorMessageRender,
  successMsgRender,
} from "../../components/htmlrenders/Alerts";

const REGISTER_URL = "/v1/users";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const emailErrorValidation = errors.email?.message;
  const nameErrorValidation = errors.name?.message;
  const passwordErrorValidation = errors.name?.message;

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
          document.getElementById("formwrapper").classList.add("hidden");
        }
      })
      .catch((err) => {
        console.log(errors);
        // if site is not available
        if (err.code == "ERR_NETWORK") {
          setErrMsg(NO_SERVER_ERR);
        }
        setErrMsg(err.response.data.message);
        console.log(errMsg);
      });
  };

  return (
    <main role="main" className="w-full  max-w-md mx-auto p-6">
      <div className={FORM_BOX}>
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Register
            </h1>
          </div>
          <div className="mt-5" id="formwrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                  >
                    Электронная почта:
                  </label>
                  <div className="relative">
                    <input
                      // TODO: change to email
                      type="text"
                      className={INPUT_TEXT_CLASS}
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Поле обязательно к заполнению",
                        },
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Некорректный email",
                        },
                        maxLength: {
                          value: 100,
                          message: "Максимальная длина email 100 символов",
                        },
                      })}
                    />
                    {emailErrorValidation
                      ? formValidationError(emailErrorValidation, "email-error")
                      : null}
                  </div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                  >
                    Имя пользователя:
                  </label>
                  <div className="relative">
                    <input
                      className={INPUT_TEXT_CLASS}
                      type="text"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Поле обязательно к заполнению",
                        },
                        minLength: {
                          value: 3,
                          message: "Минимальная длина имени - 3",
                        },
                        maxLength: {
                          value: 100,
                          message: "Максимальная длина имени 100 символов",
                        },
                      })}
                    />
                    {nameErrorValidation
                      ? formValidationError(nameErrorValidation, "name-error")
                      : null}
                  </div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                  >
                    Пароль:
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className={INPUT_TEXT_CLASS}
                      {...register("password", {
                        required: true,
                        maxLength: 30,
                        minLength: 8,
                      })}
                    />
                    {passwordErrorValidation
                      ? formValidationError(
                          passwordErrorValidation,
                          "name-error",
                        )
                      : null}
                  </div>
                </div>
                <input
                  type="submit"
                  value="Регистрация"
                  className={BUTTON_FORM}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {successMsg != null ? <div>{successMsgRender(successMsg)}</div> : null}
      {errMsg != null ? errorMessageRender(errMsg) : null}
    </main>
  );
};

export default Register;
