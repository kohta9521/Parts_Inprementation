'use client'

import Image from "next/image";
import styles from "./styles/page.module.css";
import InputText from "./components/inputText";

export default function Home() {
  return (
    <div>
      <h1>React Hooks Lesson</h1>
      <InputText />
      <Home />
    </div>
  );
}
