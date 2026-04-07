import type React from "react";
import { tv } from "tailwind-variants";

export const ImagePreviewVariants = tv({
  base: `
    rounded-lg overflow-hidden`,
});

export const imagePreviewImageVariants = tv({
  base: `w-full h-full object-cover`,
});

interface ImagePreviewProps extends React.ComponentProps<"img"> {
  ImageClassName?: string;
}

export default function ImagePreview({
  className,
  ImageClassName,
  ...props
}: ImagePreviewProps) {
  return (
    <div className={ImagePreviewVariants({ className })}>
      <img
        className={imagePreviewImageVariants({ className: ImageClassName })}
        {...props}
      />
    </div>
  );
}
