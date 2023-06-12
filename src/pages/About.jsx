import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";

const About = () => {
  return (
    <>
      <Header />
      <main className="w-full h-screen bg-[#f9f8f9] overflow-y-auto pt-[100px] md:pt-[170px] pb-[100px] px-3 flex flex-col gap-7 md:gap-10 items-center">
        <div className="text-center">
          <h1 className="w-full text-center uppercase font-medium text-black/70 text-[1.25rem] md:text-[1.75rem]">
            Our Aim
          </h1>
        </div>

        <div className="w-full md:w-[700px] bg-[#fffefe] rounded-xl shadow-lg p-4 md:p-5 lg:p-6">
          <p className="tracking-wider">
            Welcome to our computerized student ID card project, where we aim to
            design and implement a computerized system for issuing and managing
            student ID cards in academic institutions. Our project has the
            following objectives:
          </p>
          <br />
          <ul className="flex flex-col gap-3">
            <li>
              <span className="font-medium">1. Automation</span>
              <br /> We strive to automate the process of issuing and managing
              student ID cards, eliminating manual paperwork and simplifying
              administrative tasks.
            </li>
            <li>
              <span className="font-medium">2. Efficiency</span>
              <br /> Our goal is to improve the efficiency of administrative
              processes by streamlining the issuance and management of student
              ID cards, saving valuable time and resources.
            </li>
            <li>
              <span className="font-medium">3. Security</span>
              <br /> We prioritize the security of both the institution and
              students personal information. Our system incorporates advanced
              security measures, such as encryption protocols and access
              controls, to protect sensitive data.
            </li>
            <li>
              <span className="font-medium">4. Convenience</span>
              <br /> We aim to provide students with a convenient means of
              accessing various resources using their ID cards. By integrating
              our system with campus services and databases, students can enjoy
              streamlined access to facilities, library services,
              transportation, and more.
            </li>
          </ul>
          <p className="tracking-wider mt-7">
            Join us as we embark on this project to enhance student ID card
            management in academic institutions. Contact us to learn more about
            our innovative solutions and how we can assist your institution.
          </p>
        </div>
      </main>
      <ScrollToTop />
    </>
  );
};

export default About;
