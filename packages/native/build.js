const source = "src/api.ts";
const globalName = "native";
const { startService } = require("esbuild");
const gzipSize = require("gzip-size");
const prettyBytes = require("pretty-bytes");

const mode = process.argv.includes("--watch") ? "watch" : "build";
const outputs = [
    {
        outfile: "lib/api.es.js",
        format: "esm",
        target: ["es2020"],
    },
    {
        outfile: "lib/api.cjs.js",
        platform: "node",
        target: ["es2020"],
        format: "cjs",
    },
    {
        outfile: "lib/api.js",
        format: "iife",
        target: ["es2020"],
    },
];

// Start build service
let service,
    logs = "",
    promises;

let buildData = {
    entryPoints: [source],
    color: true,
    bundle: true,
    minify: true,
    sourcemap: true,
    globalName,
    tsconfig: "./tsconfig.json",
    logLevel: "info",
};

const fileSize = async (file = "lib/api.es.js") =>
    `=> Gzip size - ${prettyBytes(await gzipSize.file(file))}\n`;
const printProgress = (timerStart, logs, timerEnd = Date.now()) => {
    console.log(
        `-------------\n\n${logs}Built in ${timerEnd - timerStart}ms.\n`
    );
};

if (mode == "watch") {
    const { watch } = require("chokidar");
    const watcher = watch(["src/**/*"]);
    console.log("Watching files... \n");
    (async () => {
        service = await startService();
        try {
            // Get time before build starts
            let timerStart = Date.now();

            // Build code
            promises = await Promise.all(
                outputs.map((output) => {
                    logs += `Build ${output.outfile}\n`;
                    return service.build({
                        ...buildData,
                        incremental: true,
                        ...output,
                    });
                })
            );

            printProgress(timerStart, logs);
            console.log(await fileSize());
        } catch (e) {
            // OOPS! ERROR!
            console.error("Opps, something went wrong!", e);
        }
    })();

    watcher.on("change", () => {
        (async () => {
            try {
                let i = 0,
                    promise;

                logs = "";
                timerStart = Date.now();
                for (; i < promises.length; i++) {
                    logs += `Build ${outputs[i].outfile}\n`;
                    promise = promises[i];
                    promises[i] = await promise.rebuild();
                }

                printProgress(timerStart, logs);
                console.log(await fileSize());
            } catch (e) {
                console.error("Opps, something went wrong!", e);
            }
        })();
    });
} else {
    (async () => {
        service = await startService();
        try {
            // Get time before build starts
            const timerStart = Date.now();

            // Build code
            for (let output of outputs) {
                logs += `Build ${output.outfile}\n`;
                await service.build({
                    ...buildData,
                    ...output,
                });
            }

            // Get time after build ends
            printProgress(timerStart, logs);
            console.log(await fileSize());
        } catch (e) {
            // OOPS! ERROR!
            console.error("Opps, something went wrong!", e);
        } finally {
            // We command you to stop. Will start again if files change.
            service.stop();
        }
    })();
}
