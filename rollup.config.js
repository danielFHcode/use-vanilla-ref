module.exports = {
    input: 'src/script.js',
    output: [
        {
            file: 'dist/use-vanilla-ref.js',
            format: 'umd',
            name: 'useRef',
        },
        {
            file: 'dist/use-vanilla-ref.esm.js',
            format: 'esm',
            name: 'useRef',
        },
    ],
    plugins: [
        require('@rollup/plugin-node-resolve')(),
        require('@rollup/plugin-commonjs')(),
        require('@rollup/plugin-babel').getBabelOutputPlugin({
            presets: [
                [
                    '@babel/env',
                    {
                        targets: '<0.25%, not dead',
                    },
                ],
            ],
            filename: 'hoverer.js',
            allowAllFormats: true,
        }),
    ],
};
