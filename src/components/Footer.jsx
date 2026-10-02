import { Link } from "react-router-dom";
import { FaBloggerB } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-5 bg-[var(--primary)] text-[var(--text-white)]">
      <div className="px-5 py-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-md bg-[var(--text-white)] p-1">
                <FaBloggerB className="text-[var(--primary-hover)]" />
              </span>

              <h2 className="text-lg font-bold">وبلاگ برنامه نویسی</h2>
            </div>

            <p className="text-sm leading-7 text-[var(--primary-light)]">
              جایی برای یادگیری، تجربه و اشتراک دانش در زمینه برنامه‌نویسی،
              تکنولوژی و توسعه فردی.
            </p>
          </div>

          {/* Links */}
          <div className="md:mr-12">
            <h3 className="mb-4 font-bold">دسترسی سریع</h3>

            <ul className="space-y-3 text-sm text-[var(--primary-light)]">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-[var(--text-white)]"
                >
                  صفحه اصلی
                </Link>
              </li>

              <li>
                <Link
                  to="/blogs"
                  className="transition-colors hover:text-[var(--text-white)]"
                >
                  مقالات
                </Link>
              </li>

              <li>
                <Link
                  to="/authors"
                  className="transition-colors hover:text-[var(--text-white)]"
                >
                  نویسندگان
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-[var(--text-white)]"
                >
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-bold">ما را دنبال کنید</h3>

            <p className="mb-4 text-sm leading-6 text-[var(--primary-light)]">
              برای اطلاع از مطالب جدید ما را در شبکه‌های اجتماعی دنبال کنید.
            </p>

            <div className="flex items-center gap-3">
              <Link
                to="https://github.com/dev-mohammad78"
                aria-label="Github"
                className="rounded-lg bg-[var(--primary-hover)] p-2.5 transition hover:bg-[var(--primary-light)]"
              >
                <FaGithub size={18} />
              </Link>

              <a
                href="#"
                aria-label="Instagram"
                className="rounded-lg bg-[var(--primary-hover)] p-2.5 transition hover:bg-[var(--primary-light)]"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Telegram"
                className="rounded-lg bg-[var(--primary-hover)] p-2.5 transition hover:bg-[var(--primary-light)]"
              >
                <FaTelegramPlane size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-5 border-t border-[var(--border-color)] pt-5 text-center text-sm text-[var(--primary-light)]">
          <p>
            © {new Date().getFullYear()} وبلاگ برنامه نویسی. تمامی حقوق محفوظ
            است.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
