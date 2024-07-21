"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default async function Home() {
  const { register } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, hidePassword] = useState<boolean>(false);

  return (
    <main className="flex h-full w-full items-center justify-center space-y-2">
      <input type="text" {...register("email")} />
      <input
        type={showPassword ? "text" : "password"}
        {...register("password")}
      />
    </main>
  );
}
