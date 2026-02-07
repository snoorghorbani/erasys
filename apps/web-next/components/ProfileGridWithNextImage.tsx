import Image from "next/image";
import { ProfileGrid } from "@repo/ui";

type ImageItem = {
    id: string;
    src: string;
    alt?: string;
};

interface Props {
    images: ImageItem[];
}

export function ProfileGridWithNextImage({ images }: Props) {
    return (
        <ProfileGrid
            images={images}
            renderImage={(img) => (
                <Image
                    src={img.src}
                    alt={img.alt ?? ""}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover"
                />
            )}
        />
    );
}
