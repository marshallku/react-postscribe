import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import pkg from "./package.json" assert { type: "json" };

const makeExternalPredicate = (externalArr) => {
    if (externalArr.length === 0) {
        return () => false;
    }
    const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
    return (id) => pattern.test(id);
};

export default [
    {
        input: "src/index.ts",
        output: [{ file: pkg.module, format: "es" }],
        external: makeExternalPredicate([
            ...Object.keys(pkg.dependencies),
            ...Object.keys(pkg.peerDependencies),
        ]),
        plugins: [
            babel({
                babelHelpers: "bundled",
            }),
            peerDepsExternal(),
            typescript(),
        ],
    },
    {
        input: "src/index.ts",
        output: {
            file: pkg.types,
            name: "PostScribe",
        },
        plugins: [dts()],
    },
];
