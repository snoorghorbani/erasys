import { Logo } from "./logo";

interface HeaderProps {
	title?: string;
	showHomeButton?: boolean;
	homeHref?: string;
}

export function Header({ title = "HUNQZ", showHomeButton = false, homeHref = "/" }: HeaderProps) {
	return (
		<header className="w-full border-b border-gray-800 bg-background">
			<div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
				<Logo className="h-8 w-8" />
				<span className="text-lg font-semibold text-foreground">{title}</span>
				{showHomeButton ? (
					<a
						href={homeHref}
						className="ml-auto rounded-md border border-white/10 px-3 py-1.5 text-sm font-medium text-foreground app-ring"
					>
						Home
					</a>
				) : null}
			</div>
		</header>
	);
}
