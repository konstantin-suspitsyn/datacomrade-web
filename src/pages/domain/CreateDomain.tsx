import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPrivate from "../../hooks/useAxiousPrivate";

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
        console.log(err);
      });
  };

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
              </div>
              <input
                type="submit"
                value="Сохранить"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
