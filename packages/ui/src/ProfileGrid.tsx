type ImageItem = {
    id: string;
    src: string;
    alt?: string;
};

interface Props {
    images: ImageItem[];
    renderImage?: (img: ImageItem) => React.ReactNode;
}

export function ProfileGrid({ images, renderImage }: Props) {
    return (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {images.map((img) => (
                <div key={img.id} className="mb-4 break-inside-avoid app-card">
                    {renderImage ? (
                        renderImage(img)
                    ) : (
                        <img
                            src={img.src}
                            alt={img.alt ?? ""}
                            className="rounded-lg object-cover w-full"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
