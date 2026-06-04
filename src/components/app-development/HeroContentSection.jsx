import MobileApp from "../../assets/mobile-app.png";

export default function HeroContentSection() {
  return (
    <section className="relative px-6 py-16 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={MobileApp}
              alt="web development"
              className="w-full h-[30rem] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="precision-gradient">Optimize</span> Your Digital
              Presence with CoreHives{" "}
              <span className="precision-gradient">
                Mobile App Development Services
              </span>
            </h2>
          </div>

          <p className="text-gray-300">
            At CoreHives, our goal to become a renowned mobile app development
            company is to give your brand an online recognition with a
            platform that stays relevant among your targeted audience for a
            long time. We believe in offering exceptional services with the
            help of an expert team that are familiar with the methodology and
            functionality of creating a mobile app. With CoreHives, you can be
            assured that your mobile app will not only meet your business
            needs but also exceed your expectations, providing a seamless and
            engaging experience for your users. Our commitment to quality,
            innovation, and customer satisfaction sets us apart as a leading
            mobile app development company.
            <br />
            <br />
            CoreHives understands the uniqueness of every business and prefers
            using innovative solutions that benefit you. Our team also follows
            a well-thought approach to making your online presence as distinct
            and impactful as your brand.
          </p>
        </div>
      </div>
    </section>
  );
}
