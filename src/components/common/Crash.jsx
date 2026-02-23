import React from "react";

export default function Crash() {
  throw new Error("Test global crash");
}
