import { logoUrl } from "@repo/assets";

interface LogoProps {
	className?: string;
	alt?: string;
	size?: number;
}

export function Logo({ className, alt = "HUNQZ", size = 32 }: LogoProps) {
	return <img src={logoUrl} alt={alt} width={size} height={size} className={className} />;
}
