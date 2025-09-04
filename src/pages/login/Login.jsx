import { useForm } from "react-hook-form";
import api from "../../api/Axios";
import { useContext, useState } from "react";
import {
  NO_SERVER_ERR,
  INPUT_TEXT_CLASS,
  BUTTON_FORM,
  FORM_BOX,
  formValidationError,
} from "./LoginConsts";
import { errorMessageRender } from "../../components/htmlrenders/Alerts";
import { useLocation, useNavigate } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import AuthContext from "../../context/AuthContext";

const LOGIN_URL = "/v1/users/login";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const { auth, setAuth } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const emailErrorValidation = errors.email?.message;
  const passwordErrorValidation = errors.name?.message;

  const [errMsg, setErrMsg] = useState(null);

  // Sends register request to server
  const onSubmit = async (data) => {
    setErrMsg(null);

    api
      .post(LOGIN_URL, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        const accessToken = response?.data?.access_token;
        // console.log(accessToken);
        const roles = response?.data?.roles;
        const user = response?.data?.user;
        const email = response?.data?.email;
        // console.log(typeof auth);
        // console.log(auth);
        // console.log(typeof setAuth);

        // console.log(roles, user, accessToken, email);
        console.log("setAuth", typeof setAuth);
        setAuth({
          user: user,
          roles: roles,
          accessToken: accessToken,
          email: email,
        });
        console.log("Auth", auth);
        // Will be redirected either to previous page or to home
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        // if site is not available
        if (err.code == "ERR_NETWORK") {
          setErrMsg(NO_SERVER_ERR);
        }
        setErrMsg(err.response.data.message);
      });
  };

  return (
    <main role="main" className="w-full  max-w-md mx-auto p-6">
      <div className={FORM_BOX}>
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Login
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
                <input type="submit" value="Войти" className={BUTTON_FORM} />
              </div>
            </form>
          </div>
        </div>
      </div>
      {errMsg != null ? errorMessageRender(errMsg) : null}
    </main>
  );
};

export default Login;
