import type { Metadata } from "next";
import { CapsuleNav } from "@/components/CapsuleNav";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/components/HomePage";
import { en } from "@/lib/i18n";
import type { Dict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Grafismo Comunicaciones — Strategic design & regulatory compliance",
  description:
    "B2B studio from Bogotá delivering regulated design, INVIMA labeling, industrial signage and high-volume retail systems for pharmaceutical, retail and industrial clients.",
  alternates: {
    canonical: "/en",
    languages: {
      "es-CO": "/",
      "en-US": "/en",
    },
  },
};

export default function Page() {
  return (
    <>
      <CapsuleNav lang="en" dict={en as unknown as Dict} />
      <HomePage lang="en" dict={en as unknown as Dict} />
      <Footer lang="en" dict={en as unknown as Dict} />
    </>
  );
}
