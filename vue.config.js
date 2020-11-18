const { gitDescribeSync } = require("git-describe");
// git-describe by default match tags by regex 'v[0-9]*'
process.env.VUE_APP_GIT_HASH = gitDescribeSync().hash;
process.env.VUE_APP_GIT_TAG = gitDescribeSync().tag;

module.exports = {
    outputDir: "dist",
    assetsDir: "static",
    runtimeCompiler: true,
    devServer: {
        proxy: {
            "/api*": {
                // Forward frontend dev server request for /api to django dev server
                target: "http://django:8000/",
            },
        },
    },
};
