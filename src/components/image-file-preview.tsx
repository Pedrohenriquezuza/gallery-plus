import type React from "react";
import { tv } from "tailwind-variants";

export const ImageFilePreviewVariants = tv({
  base: `
    rounded-lg overflow-hidden`,
});

export const imageFilePreviewImageVariants = tv({
  base: `w-full h-full object-cover`,
});

interface ImageFilePreviewProps extends React.ComponentProps<"img"> {
  ImageClassName?: string;
}

export default function ImageFilePreview({
  className,
  ImageClassName,
  ...props
}: ImageFilePreviewProps) {
  return (
    <div className={ImageFilePreviewVariants({ className })}>
      <img
        className={imageFilePreviewImageVariants({ className: ImageClassName })}
        {...props}
      />
    </div>
  );
}
