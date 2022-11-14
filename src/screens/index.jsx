import React from "react";
import { useLoaderData } from "react-router-dom";
import { Head, Link } from "../Router";

export const loader = async () => {
  return "";
};

export default function Index() {
  const data = useLoaderData();
  return <></>;
}
