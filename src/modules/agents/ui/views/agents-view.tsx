"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";

export const AgentView = () => {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

    return (
        <div>
            {JSON.stringify(data, null, 2)}
        </div>
    );
};

export const AgentViewLoading = () => {
    return (
        <LoadingState
            title="Loading agents"
            description="This may take a few seconds"
        />
    );
};

export const AgentViewError = () => {
    return (
        <ErrorState
            title="Failed to load agents"
            description="Something went wrong"
        />
    );
};