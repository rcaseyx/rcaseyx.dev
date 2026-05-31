import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
}

export async function getImagesFromFolder(folder: string): Promise<CloudinaryImage[]> {
  try {
    const result = await cloudinary.api.resources_by_asset_folder(folder, {
      resource_type: "image",
      max_results: 100,
    });

    return result.resources.map((r: CloudinaryImage) => ({
      public_id: r.public_id,
      secure_url: r.secure_url,
      width: r.width,
      height: r.height,
    }));
  } catch {
    return [];
  }
}

export function buildUrl(publicId: string, width: number): string {
  return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${publicId}`;
}
