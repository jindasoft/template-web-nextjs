export const port = process.env.PORT || 3000;
export const host = process.env.NEXT_PUBLIC_HOST_URL
  ? `https://${process.env.NEXT_PUBLIC_HOST_URL}`
  : `http://localhost:${port}`;

export const robotsIndex: boolean = JSON.parse(
  process.env.NEXT_PUBLIC_ROBOTS_INDEX ?? "false",
);
export const robotsFollow: boolean = JSON.parse(
  process.env.NEXT_PUBLIC_ROBOTS_FOLLOW ?? "false",
);
export const gaID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const apiUrl = process.env.NEXT_PUBLIC_API_URL
  ? `https://${process.env.NEXT_PUBLIC_API_URL}`
  : `http://localhost:${port}`;

export const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL
  ? `https://${process.env.NEXT_PUBLIC_IMAGE_URL}`
  : `http://localhost:${port}`;
