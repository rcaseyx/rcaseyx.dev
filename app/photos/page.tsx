import type { Metadata } from "next";
import Gallery from "@/components/gallery";
import { getImagesFromFolder } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Photos — Ryan Casey",
};

export default async function Photos() {
  const images = await getImagesFromFolder("photos");

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="font-[family-name:var(--font-display)] text-5xl font-light text-[var(--color-text)] mb-16">
        Photos
      </h1>
      <Gallery images={images} />
    </div>
  );
}
