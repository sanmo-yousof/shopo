import banner from "@/asset/homeImages/features-banner.jpg";
import { FeatureList } from "@/utils/utils";
import { BaggageClaim, RotateCcw, ShieldCheck, Trophy } from "lucide-react";

const Features = () => {
  return (
    <section
      className="bg-cover mt-8 lg:mt-16 w-full h-[300px] bg-no-repeat bg-center  flex items-center"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col items-start justify-center gap-6 md:flex-col lg:flex-row">
        {FeatureList.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} className="flex items-center gap-4">
              <Icon
                className="text-[#1867d6] w-6 h-6 lg:w-10 lg:h-10"
                strokeWidth={1.5}
              />
              <div>
                <h4 className="text-base font-semibold lg:text-lg">
                  {feature.title}
                </h4>
                <p className="text-gray-600 font-light text-sm">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
