import type { MetadataRoute } from "next";
import { publicEnv } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: publicEnv.appUrl, changeFrequency: "weekly", priority: 1 },
		{
			url: `${publicEnv.appUrl}/host`,
			changeFrequency: "weekly",
			priority: 0.8,
		},
	];
}
