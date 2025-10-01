import { useState } from "react";
import { Skeleton, Image } from "@mantine/core";

export default function ImageSkeleton({ src, alt, ...rest }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Skeleton visible={!loaded} {...rest}>
      <Image src={src} alt={alt} onLoad={() => setLoaded(true)} {...rest} />
    </Skeleton>
  );
}
