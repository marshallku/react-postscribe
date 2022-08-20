import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import pkg from "./package.json";

const makeExternalPredicate = (externalArr) => {
    if (externalArr.length === 0) {
        return () => false;
    }
    const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
    return (id) => pattern.test(id);
};

const basePlugins = [
    babel({
        babelHelpers: "bundled",
        plugins: ["transform-object-rest-spread"],
    }),
    typescript(),
];

export default [
    {
        input: "src/index.ts",
        output: [{ file: pkg.module, format: "es" }],
        external: makeExternalPredicate([
            ...Object.keys(pkg.dependencies || {}),
        ]),
        plugins: [...basePlugins],
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
