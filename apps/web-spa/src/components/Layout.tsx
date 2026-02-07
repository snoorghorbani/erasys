import { Header } from "@repo/ui";
import type { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="mx-auto w-full max-w-5xl px-6 py-6">{children}</main>
        </div>
    );
}
