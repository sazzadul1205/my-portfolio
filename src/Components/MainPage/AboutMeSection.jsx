import Image from "next/image";

const AboutMeSection = ({ aboutMeData }) => {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-slate-200 py-16 sm:py-32">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-16 text-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
          About Me
        </h2>
        <div className="h-1 bg-white w-24 mx-auto mb-8"></div>

        {/* About Me Content */}
        <div className="mt-10 text-left">
          {/* Biography */}
          <div className="pt-5">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-center md:text-left">
              {aboutMeData?.bio?.title}
            </h3>
            <p className="leading-relaxed text-base sm:text-lg text-center md:text-left">
              {aboutMeData?.bio?.content}
            </p>
          </div>

          {/* Skills Summary */}
          <div className="mt-10">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center md:text-left">
              My Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
              {aboutMeData?.skills?.map((skill, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl transform hover:scale-110 transition-all duration-300 relative group"
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm font-medium text-white bg-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    {skill.title}
                  </div>
                  {/* Skill Icon */}
                  <Image
                    src={skill.src}
                    alt={skill.title}
                    width={50}
                    height={50}
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
