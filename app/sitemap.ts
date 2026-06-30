import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://rufathuseynli.dev", lastModified: new Date(), priority: 1 }];
}
