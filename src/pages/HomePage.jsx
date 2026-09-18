import { IoIosArrowBack } from "react-icons/io";

import heroImage from "../assets/image.webp";

function HomePage() {
  return (
    <section className="overflow-hidden bg-[var(--hero-bg)] transition-colors duration-300">
      <div className="flex min-h-[360px] flex-col md:flex-row">
        {/* Text */}
        <div className="order-1 flex w-full flex-col text-center md:text-start items-center md:items-start justify-center px-6 py-10 md:w-1/2 md:px-12">
          <h1 className="text-3xl font-bold leading-[1.7] text-[var(--hero-text)] transition-colors duration-300 md:text-4xl">
            دانش خود را به <br />
            سطح بعدی ببرید
          </h1>

          <p className="mt-4 max-w-md text-sm leading-8 text-[var(--hero-description)] transition-colors duration-300 md:text-base">
            مقالات کاربردی و جذاب در زمینه برنامه‌نویسی، تکنولوژی و توسعه فردی
            را اینجا بخوانید.
          </p>

          <button
            type="button"
            className="mt-6 flex items-center gap-x-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-[var(--text-white)] transition-colors duration-300 hover:bg-[var(--primary-hover)]"
          >
            <span>مشاهده مقالات</span>

            <IoIosArrowBack className="text-lg" />
          </button>
        </div>

        {/* Image */}
        <div className="order-2 h-[250px] w-full hidden md:block md:w-1/2">
          <img
            src={heroImage}
            alt="محیط مطالعه و یادگیری"
            className="mt-4 ml-4 object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
