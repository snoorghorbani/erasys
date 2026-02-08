import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FeatureFlagsProvider } from "../components/FeatureFlagsProvider";
import { HeaderWithFlags } from "../components/HeaderWithFlags";
import { APP_DESCRIPTION, APP_NAME, THEME_COLOR } from "@repo/tokens";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: APP_NAME,
	description: APP_DESCRIPTION,
	manifest: "/manifest.webmanifest",
	themeColor: THEME_COLOR,
	openGraph: {
		title: APP_NAME,
		description: APP_DESCRIPTION,
		type: "website",
	},
	twitter: {
		card: "summary",
		title: APP_NAME,
		description: APP_DESCRIPTION,
	},
	icons: {
		icon: [
			{
				url: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				url: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
			>
				<FeatureFlagsProvider>
					<HeaderWithFlags />
					<main className="mx-auto w-full max-w-5xl px-6 py-6">{children}</main>
				</FeatureFlagsProvider>
			</body>
		</html>
	);
}
