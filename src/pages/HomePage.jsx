import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import heroImage from "../assets/image.webp";
import LatestArticles from "../components/LatestArticles";

function HomePage() {
  return (
    <section className="overflow-hidden transition-colors duration-300 mt-2 rounded-lg">
      <div className="flex min-h-[250px] flex-col md:flex-row bg-[var(--hero-bg)]">
        {/* Text */}
        <div className="order-1 flex w-full flex-col text-center md:text-start items-center md:items-start justify-center px-6 py-10 md:w-1/2 md:px-12">
          <h1 className="text-xl md:text-2xl font-bold leading-[1.7] text-[var(--hero-text)] transition-colors duration-300">
            دانش خود را به <br />
            سطح بعدی ببرید
          </h1>

          <p className="mt-4 max-w-md text-sm md:text-base leading-8 text-[var(--hero-description)] transition-colors duration-300 ">
            مقالات کاربردی و جذاب در زمینه برنامه‌نویسی، تکنولوژی و توسعه فردی
            را اینجا بخوانید.
          </p>

          <button
            type="button"
            className="mt-6 flex items-center gap-x-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-[var(--text-white)] transition-colors duration-300 hover:bg-[var(--primary-hover)]"
          >
            <Link to="/blogs">مشاهده مقالات</Link>

            <IoIosArrowBack className="text-lg" />
          </button>
        </div>

        {/* Image */}
        <div className="order-2 h-[150px] w-full hidden md:block md:w-1/2">
          <img
            src={heroImage}
            alt="محیط مطالعه و یادگیری"
            className=" ml-4 object-cover object-center"
          />
        </div>
      </div>

      <LatestArticles />
    </section>
  );
}

export default HomePage;
