"use client";

import { useAsync } from "../async/useAsync";
import { getProfiles } from "@repo/api";

export function useProfiles() {
	return useAsync((signal) => getProfiles({ signal }));
}
