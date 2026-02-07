import React from "react";

type Image = {
    id: string;
    src: string;
    alt?: string;
};

interface Props {
    images: Image[];
}

export function ImageGrid({ images }: Props) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img) => (
                <img
                    key={img.id}
                    src={img.src}
                    alt={img.alt ?? ""}
                    className="rounded-lg object-cover"
                    loading="lazy"
                />
            ))}
        </div>
    );
}
