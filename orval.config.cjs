module.exports = {
    openapi: {
        output: {
            target: 'src/apis/openapi.ts',
            schemas: 'src/apis/model',
            mock: false,
        },
        input: {
            target: './sample.yaml',
        }
    }
}
