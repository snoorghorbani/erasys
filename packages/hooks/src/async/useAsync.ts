"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type AsyncState<T> = {
	data: T | null;
	loading: boolean;
	error: Error | null;
};

type AsyncFn<T> = (signal: AbortSignal) => Promise<T>;

export function useAsync<T>(asyncFn: AsyncFn<T>) {
	const abortRef = useRef<AbortController | null>(null);

	const [state, setState] = useState<AsyncState<T>>({
		data: null,
		loading: false,
		error: null,
	});

	const run = useCallback(async () => {
		abortRef.current?.abort();
		const controller = new AbortController();
		abortRef.current = controller;

		setState((s) => ({ ...s, loading: true, error: null }));

		try {
			const data = await asyncFn(controller.signal);
			if (!controller.signal.aborted) {
				setState({ data, loading: false, error: null });
			}
		} catch (err) {
			if (!controller.signal.aborted) {
				setState({
					data: null,
					loading: false,
					error: err as Error,
				});
			}
		}
	}, [asyncFn]);

	useEffect(() => {
		run();
		return () => abortRef.current?.abort();
	}, [run]);

	return {
		...state,
		refetch: run,
	};
}
