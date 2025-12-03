"use client";

import { useState, useEffect } from "react";
import ConnectUsModal from "@/common-component/ConnectUsModal/ConnectUsModal";

export default function ClientWrapper({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const modalShown = localStorage.getItem("modalShown");
        if (!modalShown) {
          const timer = setTimeout(() => {
            setOpen(true);
            localStorage.setItem("modalShown", "true");
          }, 7000);
          return () => clearTimeout(timer);
        }
      } catch (err) {
        console.error("localStorage error:", err);
      }
    }
  }, []);

  return (
    <>
      <ConnectUsModal open={open} setOpen={setOpen} />
      {children}
    </>
  );
}
