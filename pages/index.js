import React, { useEffect } from "react";
import MainContainer from "../src/components/MainContainer/MainContainer";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();

  useEffect(() => {
    router.push("/search");
  }, []);

  return <MainContainer></MainContainer>;
}
