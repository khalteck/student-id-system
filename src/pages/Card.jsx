import Header from "../components/Header";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import QRCodeComponent from "../components/QRCode";
import html2pdf from "html2pdf.js";
import { useEffect } from "react";
import html2canvas from "html2canvas";

const Card = () => {
  const { formData, cardData, setFormData } = useAppContext();

  function capitalizeFirstLetter(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }

    if (str.length === 0) {
      return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const qrCodeText = JSON.stringify(formData);

  const convertToPdfAndDownload = () => {
    const element = document.getElementById("card");
    const opt = {
      margin: 1,
      filename: `card.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
    };

    html2pdf().set(opt).from(element).save();
  };

  const convertToImageAndDownload = () => {
    const element = document.getElementById("card");

    html2canvas(element, { useCORS: true }).then((canvas) => {
      // Convert canvas to image data URL
      const dataURL = canvas.toDataURL("image/png");

      // Create a link element
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "card.png"; // Set the download filename

      // Trigger the download
      link.click();
    });
  };

  // console.log(formData);

  useEffect(() => {
    if (cardData?.first_name) {
      setFormData(cardData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />
      <main className="w-full h-screen bg-[#f9f8f9] overflow-y-auto pt-[100px] md:pt-[170px] pb-[100px] px-3 flex flex-col gap-7 md:gap-10 items-center">
        <div className="text-center">
          {formData?.first_name &&
          formData?.middle_name &&
          formData?.last_name &&
          formData?.photo &&
          formData?.department &&
          formData?.matric &&
          formData?.level &&
          formData?.dob &&
          formData?.school ? (
            <h1 className="w-full text-center uppercase font-medium text-black/70 text-[1.25rem] md:text-[1.75rem]">
              Card registration success!
            </h1>
          ) : (
            <h1 className="w-full text-center uppercase font-medium text-black/70 text-[1.25rem] md:text-[1.75rem]">
              Apply for a card first!
            </h1>
          )}
        </div>

        <div className="w-full md:w-[700px] bg-[#fffefe] rounded-xl shadow-lg p-4 md:p-5 lg:p-6">
          {formData?.first_name &&
          formData?.middle_name &&
          formData?.last_name &&
          formData?.photo &&
          formData?.department &&
          formData?.matric &&
          formData?.level &&
          formData?.dob &&
          formData?.school ? (
            <>
              <p className="tracking-wider">
                {capitalizeFirstLetter(formData?.first_name)}{" "}
                {formData?.last_name}, you have successfully registered for your
                student ID!
                <br />
                <br /> Find below:
              </p>
              <div className="w-full overflow-x-auto pb-4 mt-5">
                <div
                  id="card"
                  className="w-[450px] min-h-[300px] border-4 border-[#e27631] rounded-lg relative bg-[#f9f8f9] p-3"
                >
                  <div className="absolute w-[250px] h-[250px] bg-[#e27631]/20 rounded-br-full top-[-100px] left-0"></div>
                  <div className="w-full flex justify-between gap-3">
                    <div className="flex flex-col gap-2">
                      <p>
                        Name:{" "}
                        <span className="font-bold">
                          {capitalizeFirstLetter(formData?.first_name)}{" "}
                          {formData?.middle_name} {formData?.last_name}
                        </span>
                      </p>
                      <p>
                        Matric No:{" "}
                        <span className="font-bold">{formData?.matric}</span>
                      </p>
                      <p>
                        Date of Birth:{" "}
                        <span className="font-bold">{formData?.dob}</span>
                      </p>
                      <p>
                        School:{" "}
                        <span className="font-bold">
                          {capitalizeFirstLetter(formData?.school)}
                        </span>
                      </p>
                      <p>
                        Level:{" "}
                        <span className="font-bold">
                          {capitalizeFirstLetter(formData?.level)}
                        </span>
                      </p>
                      <p>
                        Department:{" "}
                        <span className="font-bold">
                          {capitalizeFirstLetter(formData?.department)}
                        </span>
                      </p>
                    </div>
                    <div className="w-[80px] h-fit border-2 rounded-md border-[#e27631] p-1">
                      <img
                        alt=""
                        src={formData?.photo}
                        className="w-full h-auto"
                        crossOrigin="true"
                      />
                    </div>
                  </div>
                  <div className="w-fit absolute bottom-3 right-3">
                    <QRCodeComponent text={qrCodeText} />
                  </div>
                </div>
              </div>
              <button
                onClick={convertToPdfAndDownload}
                className="w-[200px] px-5 py-2 bg-[#e27631] uppercase text-[.85rem] text-white font-medium hover:bg-[#e27631]/70"
              >
                Download File
              </button>
              <button
                onClick={convertToImageAndDownload}
                className="w-[200px] px-5 py-2 bg-[#e27631] uppercase text-[.85rem] text-white font-medium hover:bg-[#e27631]/70 mt-4 md:mx-4"
              >
                Download Image
              </button>
            </>
          ) : (
            <p className="text-center">Nothing yet...</p>
          )}
        </div>
      </main>
      <ScrollToTop />
    </>
  );
};

export default Card;
