import Image from "next/image";

const MediaItemImage = ({src}: {src: string}) => (
  <figure className="relative pb-[100%]">
    <Image
      alt={`Image of a Cavoodle: file name ${src}`}
      className="object-cover"
      fill
      src={`/images/${src}`}
    />
  </figure>
);

export default MediaItemImage;
