export const NO_SERVER_ERR = "Сервер недоступен";
export const INPUT_TEXT_CLASS =
  "bg-white py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm mb-2";
export const BUTTON_FORM =
  "py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800";
export const FORM_BOX =
  "mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300";

export const formValidationError = (message: string, id: string) => {
  return (
    <p className="text-xs text-red-600 mt-2, mb-4" id={id}>
      {message}
    </p>
  );
};
