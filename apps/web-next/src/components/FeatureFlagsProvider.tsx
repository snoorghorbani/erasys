"use client";

import { LDProvider } from "launchdarkly-react-client-sdk";
import { flags } from "../lib/flags";

interface FeatureFlagsProviderProps {
	children: React.ReactNode;
}

export function FeatureFlagsProvider({ children }: FeatureFlagsProviderProps) {
	return <LDProvider clientSideID={flags.ldClientSideId}>{children}</LDProvider>;
}
