import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import { SEND_COMMENT } from "../graphql/mutations";
import { toast } from "react-toastify";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });
  console.log(data);

  const submitHandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      toast.warn("تمام فیلد ها را پر کنید");
    }
  };

  if (data) {
    toast.success("کامنت شما در انتظار تایید می‌باشد");
  }

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
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="6"
            placeholder="نظر خود را بنویسید..."
            className="w-full resize-none rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)]"
          ></textarea>
        </div>

        {/* submit */}
        {loading ? (
          <button
            disabled
            className="w-full md:w-auto px-7 py-3 rounded-lg bg-[var(--primary-light)] text-white text-sm font-medium"
          >
            در حال ارسال
          </button>
        ) : (
          <button
            onClick={submitHandler}
            className="w-full md:w-auto px-7 py-3 rounded-lg bg-[var(--primary)] text-white text-sm font-medium transition hover:bg-[var(--primary-hover)]"
          >
            ارسال کامنت
          </button>
        )}
      </div>
    </section>
  );
}

export default CommentForm;
