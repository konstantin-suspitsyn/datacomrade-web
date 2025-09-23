import useAxiosPrivate from "../../hooks/useAxiousPrivate";

const ME = "/v1/users/me";

export const Me = () => {
  const axiosPrivate = useAxiosPrivate();
  const getInfoAboutMe = () => {
    axiosPrivate
      .get(ME)
      .then((response) => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!rd", response.data);
      })
      .catch((err) => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!err", err);
      });
  };
  return (
    <div>
      <div>
        <button onClick={getInfoAboutMe}>Me?</button>
      </div>
    </div>
  );
};
