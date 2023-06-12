import { doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db, storage } from "../firebase/firebase-config";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(false);

  const [uploadErr, setUploadErr] = useState(false);
  function showImageErr() {
    setUploadErr(true);
  }

  const [validateErr, setValidateErr] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    dob: "",
    nationality: "",
    school: "",
    level: "",
    department: "",
    photo: "",
  });
  console.log("formData", formData);

  const [cardExists, setCardExists] = useState(false);

  const handleChange = (e) => {
    setValidateErr("");
    setCardExists(false);
    setUploadErr(false);
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  async function createCard() {
    setLoader(true);

    const user = `${formData?.first_name.replace(
      / /g,
      ""
    )}-${formData?.middle_name.replace(/ /g, "")}-${formData?.last_name.replace(
      / /g,
      ""
    )}`;
    const docRef = doc(db, "cards", user);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCardExists(true);
      } else {
        await setDoc(docRef, {
          ...formData,
        });
        navigate("/card");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setLoader(false);
  }

  const [cardData, setCardData] = useState({});

  const getData = async () => {
    setLoader(true);
    if (formData?.first_name && formData?.middle_name && formData?.last_name) {
      try {
        const user = `${formData?.first_name.replace(
          / /g,
          ""
        )}-${formData?.middle_name.replace(
          / /g,
          ""
        )}-${formData?.last_name.replace(/ /g, "")}`;
        const docSnap = await getDoc(doc(db, "cards", user));
        const data = docSnap?.data();
        setCardData(data);
        navigate("/card");
      } catch (error) {
        console.error("Error fetching receipt:", error);
      } finally {
        setLoader(false);
      }
    }
  };

  const [photo, setPhoto] = useState({});

  async function handleImageUpload(e) {
    e.preventDefault();
    const user = `${formData?.first_name.replace(
      / /g,
      ""
    )}-${formData?.middle_name.replace(/ /g, "")}-${formData?.last_name.replace(
      / /g,
      ""
    )}`;
    const storageRef = ref(storage, `photos/${user}`);
    setValidateErr("");

    const selectedFile = e.target.files[0];
    setPhoto(selectedFile);

    try {
      await uploadBytes(storageRef, selectedFile);
      const path = `photos/${user}`;

      const imageRef = ref(storage, path);
      const downloadURL = await getDownloadURL(imageRef);
      setFormData((prev) => {
        return {
          ...prev,
          photo: downloadURL,
        };
      });
      console.log("Uploaded photo!");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  useEffect(() => {
    localStorage.removeItem("cardDetails");
  }, []);

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
        cardData,
        getData,
        handleImageUpload,
        photo,
        uploadErr,
        showImageErr,
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
