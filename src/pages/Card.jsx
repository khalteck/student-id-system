import Header from "../components/Header";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import QRCodeComponent from "../components/QRCode";
import html2pdf from "html2pdf.js";
// import { useEffect, useState } from "react";
// import { db } from "../firebase/firebase-config";
// import { doc, getDoc } from "firebase/firestore";

const Card = () => {
  const { formData } = useAppContext();
  // const [cardData, setCardData] = useState({});

  const qrCodeText = JSON.stringify(formData);

  const convertToPdfAndDownload = () => {
    const element = document.getElementById("card");
    const opt = {
      margin: 1,
      filename: `card.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
    };

    html2pdf().set(opt).from(element).save();
  };

  // useEffect(() => {
  //   const fetchCardData = async () => {
  //     try {
  //       const { first_name, last_name, middle_name } = JSON.parse(qrCodeText);
  //       console.log(middle_name);
  //       const docId = `${first_name} ${middle_name} ${last_name}`;
  //       const cardRef = doc(db, "cards", docId);
  //       const cardDoc = await getDoc(cardRef);
  //       if (cardDoc.exists) {
  //         setCardData(cardDoc.data());
  //       } else {
  //         console.log("Card not found!");
  //       }
  //     } catch (error) {
  //       console.log("Error fetching card details:", error);
  //     }
  //   };

  //   fetchCardData();
  // }, [qrCodeText]);

  // useEffect(() => {
  //   if (cardData) {
  //     setFormData(cardData);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [cardData]);

  return (
    <>
      <Header />
      <main className="w-full h-screen bg-[#f9f8f9] overflow-y-auto pt-[100px] md:pt-[170px] pb-[100px] px-3 flex flex-col gap-7 md:gap-10 items-center">
        <div className="text-center">
          <h1 className="w-full text-center uppercase font-medium text-black/70 text-[1.25rem] md:text-[1.75rem]">
            Card registration success!
          </h1>
        </div>

        <div className="w-full md:w-[700px] bg-[#fffefe] rounded-xl shadow-lg p-4 md:p-5 lg:p-6">
          <p className="tracking-wider">
            {formData?.first_name} {formData?.last_name}, you have successfully
            registered for your student ID!
            <br />
            <br /> Find below:
          </p>

          <div className="w-full overflow-x-auto pb-4 mt-5">
            <div
              id="card"
              className="w-[450px] min-h-[220px] border-4 border-[#e27631] rounded-lg relative bg-[#f9f8f9] p-3"
            >
              <div className="absolute w-[250px] h-[250px] bg-[#e27631]/20 rounded-br-full top-[-100px] left-0"></div>
              <div className="w-full flex justify-between gap-3">
                <div className="flex flex-col gap-2">
                  <p>
                    Name:{" "}
                    <span className="font-bold">
                      {formData?.first_name} {formData?.middle_name}{" "}
                      {formData?.last_name}
                    </span>
                  </p>
                  <p>
                    Nationality:{" "}
                    <span className="font-bold">{formData?.nationality}</span>
                  </p>
                  <p>
                    Date of Birth:{" "}
                    <span className="font-bold">{formData?.dob}</span>
                  </p>
                  <p>
                    School:{" "}
                    <span className="font-bold">{formData?.school}</span>
                  </p>
                  <p>
                    Level: <span className="font-bold">{formData?.level}</span>
                  </p>
                </div>
                <div className="w-[80px] h-[100px] border-2 rounded-md border-[#e27631] p-3">
                  <img
                    alt=""
                    src="/images/icons8-user-50.png"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="w-fit ml-auto">
                <QRCodeComponent text={qrCodeText} />
              </div>
            </div>
          </div>
          <button
            onClick={convertToPdfAndDownload}
            className="w-[200px] px-5 py-2 bg-[#e27631] uppercase text-[.85rem] text-white font-medium hover:bg-[#e27631]/70"
          >
            Download PDF
          </button>
        </div>
      </main>
      <ScrollToTop />
    </>
  );
};

export default Card;
