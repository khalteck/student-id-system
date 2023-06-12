import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(false);

  const [validateErr, setValidateErr] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    dob: "",
    nationality: "",
    school: "",
    level: 0,
  });
  //   console.log("formData", formData);

  const handleChange = (e) => {
    setValidateErr("");
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // async function createCard() {
  //   setLoader(true);

  //   const user = `${formData?.first_name}-${formData?.middle_name}-${formData?.last_name}`
  //   await setDoc(doc(db, "cards", `${user}`), {
  //     ...formData,
  //   });

  //   setLoader(false);
  // }

  return (
    <AppContext.Provider
      value={{
        currentPage,
        loader,
        handleChange,
        formData,
        setValidateErr,
        validateErr,
        // createCard
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
