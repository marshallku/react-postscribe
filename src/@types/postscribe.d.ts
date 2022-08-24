declare module "postscribe" {
    interface Token<
        T extends keyof HTMLElementTagNameMap,
        E = HTMLElementTagNameMap[T],
    > {
        type: T;
        length: number;
        text: string;
        tagName: string;
        attrs: Record<keyof E, any>;
        booleanAttrs: Record<keyof E, any>;
        content: string;
        html5Unary: boolean;
        unary: boolean;
    }

    export interface PostScribeProps {
        /** An html string or a function that takes a DOM Document and writes to it. */
        html: string;
        /** A callback called when an async script has loaded */
        afterAsync?: () => void;
        /** A callback called immediately before removing from the write queue */
        afterDequeue?: () => void;
        /** A callback called sync after a stream's first thread release */
        afterStreamStart?: () => void;
        /** A callback called after writing buffered document.write calls */
        afterWrite?: () => void;
        /** A callback that will be called when writing is finished */
        done?: () => void;
        /** A boolean that allows disabling the autoFix feature of prescribe */
        autoFix?: boolean;
        /** A callback called immediately before adding to the write queue */
        beforeEnqueue?: (
            tagName: string,
            content: string,
            options: Partial<Omit<PostScribeProps, "html">>,
        ) => void;
        /** A callback called before writing buffered document.write calls */
        beforeWrite?: () => void;
        /** A callback called before writing a token */
        beforeWriteToken?: <T extends keyof HTMLElementTagNameMap>(
            token: Token<T>,
        ) => Token<T>;
        /** A function that throws the error by default, but could be overwritten */
        error?: (error: { msg: string }) => void;
        /** A boolean whether to let scripts w/ async attribute set fall out of the queue */
        releaseAsync?: boolean;
    }

    function postscribe(
        element: Element,
        html: string,
        option: PostScribeOption,
    ): void;

    export default postscribe;
}
