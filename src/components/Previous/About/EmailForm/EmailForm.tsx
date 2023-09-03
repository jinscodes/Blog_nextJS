"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import Banner from "@/components/Previous/About/Banner/Banner";
import st from "./EmailForm.module.scss";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const EmailForm = () => {
  const [form, setForm] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });
  const [airplane, setAirplane] = useState<boolean>(false);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAirplane(true);
  };

  return (
    <form onSubmit={onSubmit} className={st.form}>
      <label htmlFor="from">Your Email</label>
      <input
        type="email"
        id="from"
        name="from"
        required
        autoFocus
        value={form.from}
        onChange={onChange}
      />
      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        id="subject"
        name="subject"
        required
        value={form.subject}
        onChange={onChange}
      />
      <label htmlFor="message">Message</label>
      <textarea
        rows={10}
        id="message"
        name="message"
        required
        value={form.message}
        onChange={onChange}
      />
      <Banner state={airplane} />
      <button>Submit</button>
    </form>
  );
};

export default EmailForm;
