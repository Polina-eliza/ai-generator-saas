"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("fd71ccfa-4dca-41e8-9eba-e10ec881024a");
  }, []);

  return null;
};