import { FaCode, FaBookOpen, FaUsers } from "react-icons/fa";

function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      {/* Hero */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold text-[var(--text-color)]">
          درباره ما
        </h1>

        <p className="mx-auto max-w-2xl leading-8 text-[var(--text-secondary)]">
          این وبلاگ با هدف اشتراک دانش و تجربه در زمینه برنامه‌نویسی، تکنولوژی و
          توسعه فردی ساخته شده است.
        </p>
      </section>

      {/* About */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-[var(--border-color)] p-6 text-center shadow-[var(--shadow-color)]">
          <FaCode size={28} className="mx-auto mb-4 text-[var(--primary)]" />

          <h2 className="mb-3 text-lg font-bold text-[var(--text-color)]">
            یادگیری
          </h2>

          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            مطالب کاربردی برای یادگیری بهتر برنامه‌نویسی و توسعه مهارت‌های فنی.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border-color)] p-6 text-center shadow-[var(--shadow-color)]">
          <FaBookOpen
            size={28}
            className="mx-auto mb-4 text-[var(--primary)]"
          />

          <h2 className="mb-3 text-lg font-bold text-[var(--text-color)]">
            تجربه
          </h2>

          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            تجربه‌ها، نکات و مطالبی که می‌توانند مسیر یادگیری را ساده‌تر کنند.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border-color)] p-6 text-center shadow-[var(--shadow-color)]">
          <FaUsers size={28} className="mx-auto mb-4 text-[var(--primary)]" />

          <h2 className="mb-3 text-lg font-bold text-[var(--text-color)]">
            جامعه
          </h2>

          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            ایجاد فضایی برای ارتباط، تبادل نظر و رشد در کنار دیگر علاقه‌مندان به
            برنامه‌نویسی.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mt-12 rounded-xl bg-[var(--secondary)] p-6 text-center md:p-10">
        <h2 className="mb-4 text-2xl font-bold text-[var(--text-color)]">
          هدف ما چیست؟
        </h2>

        <p className="mx-auto max-w-3xl leading-8 text-[var(--text-secondary)]">
          هدف ما ارائه مطالب ساده، کاربردی و قابل فهم است تا بتوانیم به
          برنامه‌نویسان کمک کنیم مفاهیم جدید را بهتر یاد بگیرند و در مسیر رشد
          خود قدم‌های مؤثرتری بردارند.
        </p>
      </section>
    </main>
  );
}

export default AboutPage;
