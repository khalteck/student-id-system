import Header from "../components/Header";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import Loader from "../components/Loader";

const Homepage = () => {
  const {
    formData,
    handleChange,
    setValidateErr,
    validateErr,
    createCard,
    loader,
    cardExists,
  } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData?.first_name &&
      formData?.last_name &&
      formData?.middle_name &&
      formData?.dob &&
      formData?.nationality &&
      formData?.school &&
      formData?.level
    ) {
      await createCard();
    } else {
      setValidateErr("Please fill all fields!");
    }
  };
  return (
    <>
      <Header />
      {loader && <Loader />}

      <main className="w-full h-screen bg-[#f9f8f9] overflow-y-auto pt-[100px] md:pt-[170px] pb-[100px] px-3 flex flex-col gap-7 md:gap-10 items-center">
        <div className="text-center">
          <p className="text-[.8rem] text-black/70 tracking-wide mb-3">
            A convenient and secure means of issuing and managing student ID
            cards
          </p>
          <h1 className="w-full text-center uppercase font-medium text-black/70 text-[1.25rem] md:text-[1.75rem]">
            Student ID Card Registration Form
          </h1>
        </div>
        <div className="w-full md:w-[700px] bg-[#fffefe] rounded-xl shadow-lg p-4 md:p-5 lg:p-6">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center md:items-start"
          >
            <div className="w-full">
              <label htmlFor="first_name">First name</label>
              <input
                type="text"
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className={`w-full p-2 border outline-[#e27631]/50 ${
                  validateErr && !formData?.first_name ? "border-red-500" : null
                }`}
              />
            </div>
            <div className="w-full">
              <label htmlFor="middle_name">Middle name</label>
              <input
                type="text"
                id="middle_name"
                value={formData.middle_name}
                onChange={handleChange}
                className={`w-full p-2 border outline-[#e27631]/50 ${
                  validateErr && !formData?.middle_name
                    ? "border-red-500"
                    : null
                }`}
              />
            </div>
            <div className="w-full">
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className={`w-full p-2 border outline-[#e27631]/50 ${
                  validateErr && !formData?.last_name ? "border-red-500" : null
                }`}
              />
            </div>
            <div className="w-full">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                className={`w-full p-2 border outline-[#e27631]/50 ${
                  validateErr && !formData?.dob ? "border-red-500" : null
                }`}
              />
            </div>
            <div className="w-full">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                id="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className={`w-full p-2 border outline-[#e27631]/50 ${
                  validateErr && !formData?.nationality
                    ? "border-red-500"
                    : null
                }`}
              />
            </div>
            <div className="w-full">
              <label htmlFor="school">School</label>
              <input
                type="text"
                id="school"
                value={formData.school}
                onChange={handleChange}
                className={`w-full p-2 border outline-[#e27631]/50 ${
                  validateErr && !formData?.school ? "border-red-500" : null
                }`}
              />
            </div>
            <div className="w-full">
              <label htmlFor="level">Level</label>
              <input
                type="number"
                id="level"
                value={formData.level}
                onChange={handleChange}
                className={`w-full p-2 border outline-[#e27631]/50 ${
                  validateErr && !formData?.level ? "border-red-500" : null
                }`}
              />
            </div>
            {validateErr && <p className="text-red-500">{validateErr}</p>}
            {cardExists && (
              <p className="text-red-500">
                You have registered for a card already
              </p>
            )}
            <button
              onClick={(e) => handleSubmit(e)}
              className="w-[200px] px-5 py-2 bg-[#e27631] uppercase text-[.85rem] text-white font-medium hover:bg-[#e27631]/70"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <ScrollToTop />
    </>
  );
};

export default Homepage;
