import { Logo } from "./logo";

interface HeaderProps {
    title?: string;
}

export function Header({ title = "HUNQZ" }: HeaderProps) {
    return (
        <header className="w-full border-b border-zinc-200 bg-white">
            <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
                <Logo className="h-8 w-8" />
                <span className="text-lg font-semibold text-zinc-900">{title}</span>
            </div>
        </header>
    );
}
