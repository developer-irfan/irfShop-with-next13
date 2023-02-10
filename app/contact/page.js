import ContactForm from "@/components/ContactPageComp/ContactForm";
import TecnicalSupport from "@/components/ContactPageComp/TecnicalSupport";
import SalesQuestion from "@/components/ContactPageComp/SalesQuestion";
import Press from "@/components/ContactPageComp/Press";
import BugReport from "@/components/ContactPageComp/BugReport";

const page = () => {
  return (
    <div>
      <div className="container mb-2 px-6 mx-auto">
        <section className="mb-10 text-gray-800">
          <div className="relative overflow-hidden bg-no-repeat bg-cover h-[300px] contact-container"></div>
          <div className="container text-gray-800 px-4 md:px-12">
            <div className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6 mt-[-100px] contact-wrapper">
              <div className="flex flex-wrap">
                <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                  <ContactForm />
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                  <div className="flex flex-wrap">
                    <TecnicalSupport />
                    <SalesQuestion />
                    <Press />
                    <BugReport />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr />
    </div>
  );
};

export default page;
