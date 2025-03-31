"use client";

import { InputImage } from "@/registry/new-york/input-image/input-image";
import { useState } from "react";
export default function Demo() {
  const [value, setValue] = useState("");

  return (
    <InputImage
      resultWidth={256}
      width={128}
      value={value}
      onChange={setValue}
    />
  );
}
