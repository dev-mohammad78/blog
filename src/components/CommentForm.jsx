import { useState } from "react";

function CommentForm({ slug }) {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    text: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setUser({
      userName: "",
      email: "",
      text: "",
    });
  };

  return (
    <section className="mt-3">
      <div className="px-4 space-y-5">
        <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-6">
          ارسال نظر
        </h2>

        {/* username + email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {/* username */}
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-[var(--text-primary)]"
            >
              نام کاربری
            </label>

            <input
              type="text"
              id="username"
              name="userName"
              value={user.userName}
              onChange={changeHandler}
              placeholder="نام کاربری خود را وارد کنید"
              className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)]"
            />
          </div>

          {/* email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[var(--text-primary)]"
            >
              ایمیل
            </label>

            <input
              type="text"
              id="email"
              name="email"
              value={user.email}
              onChange={changeHandler}
              placeholder="ایمیل خود را وارد کنید"
              className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)]"
            />
          </div>
        </div>

        {/* comment */}
        <div>
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-[var(--text-primary)]"
          >
            متن کامنت
          </label>

          <textarea
            id="text"
            name="text"
            value={user.text}
            onChange={changeHandler}
            rows="6"
            placeholder="نظر خود را بنویسید..."
            className="w-full resize-none rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)]"
          ></textarea>
        </div>

        {/* submit */}
        <button
          type="submit"
          onClick={submitHandler}
          className="w-full md:w-auto mt-5 px-7 py-3 rounded-lg bg-[var(--primary)] text-white text-sm font-medium transition hover:bg-[var(--primary-hover)]"
        >
          ارسال کامنت
        </button>
      </div>
    </section>
  );
}

export default CommentForm;
