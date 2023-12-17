import { useRouter } from "next/router";

export default function LayoutDecision() {
  const router = useRouter();
  const isLoginPage = router.pathname === "/register/login";
  return { isLoginPage };
}
