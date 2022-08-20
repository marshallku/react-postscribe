import { useCallback } from "react";
import { PostScribeOption } from "postscribe";

interface PostScribeProps extends PostScribeOption {
    /** An html string or a function that takes a DOM Document and writes to it. */
    html: string;
}

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
        if (typeof window === "undefined") {
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

    return <div ref={handleMount} />;
}
