import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase-config";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(false);

  const [validateErr, setValidateErr] = useState("");

  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("cardDetails")) || {
      first_name: "",
      middle_name: "",
      last_name: "",
      dob: "",
      nationality: "",
      school: "",
      level: "",
    }
  );
  //   console.log("formData", formData);

  const [cardExists, setCardExists] = useState(false);

  const handleChange = (e) => {
    setValidateErr("");
    setCardExists(false);
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  async function createCard() {
    setLoader(true);

    localStorage.removeItem("cardDetails");

    const user = `${formData?.first_name}-${formData?.middle_name}-${formData?.last_name}`;
    const docRef = doc(db, "cards", user);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCardExists(true);
      } else {
        await setDoc(docRef, {
          ...formData,
        });
        localStorage.setItem("cardDetails", JSON.stringify(formData));
        navigate("/card");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setLoader(false);
  }

  return (
    <AppContext.Provider
      value={{
        currentPage,
        loader,
        handleChange,
        formData,
        setValidateErr,
        validateErr,
        createCard,
        cardExists,
        setFormData,
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
