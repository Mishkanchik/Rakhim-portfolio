import { HomeClient } from "@/components/HomeClient";
import { about, baseURL } from "@/resources";
import { Meta } from "@once-ui-system/core";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: "/",
  });
}

export default function Home() {
  return <HomeClient />;
}
