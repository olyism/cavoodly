import MediaItemImage from "./MediaItemImage";
import MediaItemVideo from "./MediaItemVideo";

const MediaItem = (
  { media }: { media: {
    type: "image" | "video",
    src: string,
  }}
) => {
  const { type, src } = media;
  if (type === "image") {
    return <MediaItemImage src={src} />
  } else if (type === "video") {
    return <MediaItemVideo src={src} />
  }
  return null;
}

export default MediaItem;
