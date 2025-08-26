import Discount from "@/components/shopParts/discount";
import { TermsDAta } from "@/utils/utils";

const Terms = () => {
  return (
    <>
      <div className="bg-blue-100 w-full h-[180px] flex items-center justify-center">
        <h2 className="sectionHeading">Terms and Conditions</h2>
      </div>
      <div className="max-w-7xl mt-8 lg:mt-12 space-y-8 mx-auto px-2">
        {TermsDAta.map((ter, indx) => (
          <div key={ter.id}>
            <h4 className="sm:text-lg text-sm mb-2 font-semibold">
              {indx + 1}. {ter.title}
            </h4>

            {ter.content && (
              <p className="text-xs sm:text-sm text-gray-500 whitespace-pre-line">
                {ter.content}
              </p>
            )}

            {ter.option && (
              <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-500 space-y-1 mt-2">
                {ter.option.map((item, idx) => (
                  <li  key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <Discount />
    </>
  );
};

export default Terms;
