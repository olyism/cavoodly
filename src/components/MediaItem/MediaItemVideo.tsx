const MediaItemVideo = ({ src }: { src: string }) => (
  <figure className="relative pb-[100%]">
    <video className="absolute inset-0 h-full w-full object-cover" controls src={`/videos/${src}`}>
      Sorry your browser doesn't support videos
    </video>
  </figure>
);

export default MediaItemVideo;
