"use client";

import { useFlags } from "launchdarkly-react-client-sdk";
import { Header } from "@repo/ui";
import { flags as appFlags } from "../lib/flags";

export function HeaderWithFlags() {
	const flags = useFlags();
	const showHomeButton = Boolean((flags as Record<string, unknown>)[appFlags.homeButtonFlagKey]);
	return <Header showHomeButton={showHomeButton} />;
}
