module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/pwa01/' // github repo name when using github pages
        : '/',
    pwa: {
        // we want to get our custom worker - default is GenerateSw
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'src/service-worker.js',
        },
        name: 'VUE-PWA',
        themeColor: '#42b983',
        msTileColor: '#42b983',
        appleMobileWebAppCache: 'yes',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        manifestOptions: {
            // eslint-disable-next-line @typescript-eslint/camelcase
            background_color: '#42b983'
        }
    }
};
