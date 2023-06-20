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
    getData,
    handleImageUpload,
    showImageErr,
    uploadErr,
  } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData?.first_name &&
      formData?.last_name &&
      formData?.middle_name &&
      formData?.dob &&
      formData?.matric &&
      formData?.school &&
      formData?.level
    ) {
      await createCard();
    } else {
      setValidateErr("Please fill all fields!");
    }
  };

  const departmentOptions = [
    { id: 1, name: "Computer Science" },
    { id: 2, name: "Hospitality Management & Technology" },
    { id: 3, name: "Accounting" },
    { id: 4, name: "Office Technology Management" },
    { id: 5, name: "Mass Communication" },
    { id: 6, name: "Marketing" },
    { id: 7, name: "Civil Engineering" },
    { id: 8, name: "Mechanical Engineering" },
    { id: 9, name: "Electrical Engineering" },
    { id: 10, name: "Mathematics" },
    { id: 11, name: "Statistics" },
    { id: 12, name: "Computer Engineering" },
  ];

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
                value={formData?.first_name}
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
                value={formData?.middle_name}
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
                value={formData?.last_name}
                onChange={handleChange}
                className={`w-full p-2 border outline-[#e27631]/50 ${
                  validateErr && !formData?.last_name ? "border-red-500" : null
                }`}
              />
            </div>
            <div className="w-full relative">
              {(!formData?.first_name ||
                !formData?.middle_name ||
                !formData?.last_name) && (
                <div
                  onClick={showImageErr}
                  className="w-full h-full absolute top-0 left-0 cursor-pointer"
                ></div>
              )}
              <label htmlFor="photo">Upload Image</label>
              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={(e) => handleImageUpload(e)}
                className="w-full p-2 border outline-[#e27631]/50"
              />
              {uploadErr && (
                <p className="text-red-500">
                  Please fill in the fields above first.
                </p>
              )}
            </div>
            <div className="w-full">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                value={formData?.dob}
                onChange={handleChange}
                className={`w-full p-2 border outline-[#e27631]/50 ${
                  validateErr && !formData?.dob ? "border-red-500" : null
                }`}
              />
            </div>
            <div className="w-full">
              <label htmlFor="matric">Matric No</label>
              <input
                type="text"
                id="matric"
                value={formData?.matric}
                onChange={handleChange}
                className={`w-full p-2 border outline-[#e27631]/50 ${
                  validateErr && !formData?.matric ? "border-red-500" : null
                }`}
              />
            </div>

            <div className="w-full">
              <label htmlFor="school">School</label>
              <select
                id="school"
                value={formData?.school}
                onChange={handleChange}
                className={`w-full p-2 border outline-[#e27631]/50 ${
                  validateErr && !formData?.school ? "border-red-500" : null
                }`}
              >
                <option value="" hidden>
                  Select
                </option>
                <option value="Yaba College of Technology">
                  Yaba College of Technology
                </option>
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="level">Level</label>
              <input
                type="text"
                id="level"
                value={formData?.level}
                onChange={handleChange}
                className={`w-full p-2 border outline-[#e27631]/50 ${
                  validateErr && !formData?.level ? "border-red-500" : null
                }`}
              />
            </div>
            <div className="w-full">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                value={formData?.department}
                onChange={handleChange}
                className={`w-full p-2 border outline-[#e27631]/50 ${
                  validateErr && !formData?.department ? "border-red-500" : null
                }`}
              >
                <option value="" hidden>
                  Select
                </option>
                {departmentOptions.map((option) => (
                  <option key={option.name} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            {validateErr && <p className="text-red-500">{validateErr}</p>}
            {cardExists && (
              <p className="text-red-500">
                You have registered for a card already{" "}
                <span className="underline cursor-pointer" onClick={getData}>
                  View details?
                </span>
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
