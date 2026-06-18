import MobileApp from "../../assets/mobile-app-dev.png";

export default function HeroContentSection() {
  return (
    <section className="relative px-5 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-20 xl:px-32 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
        {/* Image */}
        <div className="relative w-full">
          <div className="relative group overflow-hidden rounded-lg max-w-xl mx-auto xl:mx-0">
            <img
              src={MobileApp}
              alt="mobile app development"
              className="w-full h-72 sm:h-72 md:h-96 lg:h-96 xl:h-[25rem] object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 sm:space-y-6">
          <div className="text-center xl:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
              <span className="precision-gradient">Optimize</span> Your Digital
              Presence with CoreHives{" "}
              <span className="precision-gradient">
                Mobile App Development Services
              </span>
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-center xl:text-left max-w-2xl xl:max-w-md mx-auto xl:mx-0">
            At CoreHives, our goal to become a renowned mobile app development
            company is to give your brand an online recognition with a platform
            that stays relevant among your targeted audience for a long time. We
            believe in offering exceptional services with the help of an expert
            team that are familiar with the methodology and functionality of
            creating a mobile app. With CoreHives, you can be assured that your
            mobile app will not only meet your business needs but also exceed
            your expectations, providing a seamless and engaging experience for
            your users. Our commitment to quality, innovation, and customer
            satisfaction sets us apart as a leading mobile app development
            company.
            <br />
            <br />
            CoreHives understands the uniqueness of every business and prefers
            using innovative solutions that benefit you. Our team also follows a
            well-thought approach to making your online presence as distinct and
            impactful as your brand.
          </p>
        </div>
      </div>
    </section>
  );
}
