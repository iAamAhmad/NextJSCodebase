"use client";

import { useRouter } from "next/navigation";
import React from "react";

const InsideContactUs = () => {
  const router = useRouter();
  const navigate = (name: string) => {
    router.push(name);
  };
  return (
    <div>
      <div>InsideContactUs</div>
      <div>InsideContactUs</div>
      <button onClick={() => navigate("/about-us")}>Click me </button>
      <button onClick={() => navigate("/contact")}>Click me </button>
    </div>
  );
};
export default InsideContactUs;
