import { createElement, useCallback } from "react";
import { PostScribeProps } from "./@types/PostScribe";

export default function PostScribe({
    html,
    afterAsync,
    afterDequeue,
    afterStreamStart,
    afterWrite,
    done,
    autoFix,
    beforeEnqueue,
    beforeWrite,
    beforeWriteToken,
    error,
    releaseAsync,
}: PostScribeProps) {
    const handleMount = useCallback((element: HTMLDivElement) => {
        if (typeof window === "undefined" || !element) {
            return;
        }

        import("postscribe").then((postscribe) => {
            postscribe.default(element, html, {
                afterAsync,
                afterDequeue,
                afterStreamStart,
                afterWrite,
                done,
                autoFix,
                beforeEnqueue,
                beforeWrite,
                beforeWriteToken,
                error,
                releaseAsync,
            });
        });
    }, []);

    return createElement("div", { ref: handleMount });
}
