import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";

const Card = () => {
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
            Khalid Oyeneye, you have successfully registered for your student
            ID!
            <br />
            <br /> Find below:
          </p>
        </div>
      </main>
      <ScrollToTop />
    </>
  );
};

export default Card;
