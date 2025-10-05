import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPrivate from "../../hooks/useAxiousPrivate";
import { errorMessageRender } from "../../components/htmlrenders/Alerts";
import { formValidationError } from "../login/LoginConsts";

interface DomainInputDTO {
  name: string;
  description: string;
}

const DOMAIN_CREATE_LINK = "/v1/domain/";

export const CreateDomain = () => {
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const axiosPrivate = useAxiosPrivate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DomainInputDTO>({ mode: "onBlur" });

  const onSubmit = async (data: DomainInputDTO) => {
    setErrMsg(null);

    axiosPrivate
      .post<DomainInputDTO>(DOMAIN_CREATE_LINK, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        setErrMsg(err.response.data.message);
        console.log(err);
      });
  };

  const nameError = errors.name?.message;
  const descriptionError = errors.description?.message;

  return (
    <div>
      <main role="main">
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[1000px] bg-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Название
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Поле обязательно к заполнению",
                    },
                  })}
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {nameError
                  ? formValidationError(nameError.toString(), "name-error")
                  : null}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="description"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Описание
                </label>
                <input
                  type="text"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Поле обязательно к заполнению",
                    },
                  })}
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {descriptionError
                  ? formValidationError(
                      descriptionError.toString(),
                      "description-error",
                    )
                  : null}
              </div>
              <input
                type="submit"
                value="Сохранить"
                className="py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700 hover:cursor-pointer"
              />
            </form>
          </div>
        </div>
        {errMsg != null ? errorMessageRender(errMsg) : null}
      </main>
    </div>
  );
};
