"use client";

import { useRouter } from "next/navigation";
import RegisterLayout from "../layout";

import { useEffect } from "react";
function Register() {
  const router = useRouter();

  useEffect(() => {
    router.push("/register/login");
  }, [router]);

  return <RegisterLayout></RegisterLayout>;
}

export default Register;
