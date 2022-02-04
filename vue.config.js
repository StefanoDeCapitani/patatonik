module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/patatonik/" : "/",

  pwa: {
    manifestOptions: {
      name: "Patatonik",
      short_name: "Patatonik",
      start_url: "./",
      display: "fullscreen",
      orientation: "landscape",
      theme_color: "#2e5eaa",
      background_color: "#00a878",
      icons: [
        {
          src: "./img/icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./img/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "./img/icons/android-chrome-maskable-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./img/icons/android-chrome-maskable-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    theme_color: "#2e5eaa",
    background_color: "#00a878",
    themeColor: "#2e5eaa",
    msTileColor: "#00a878",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    // configure the workbox plugin
    workboxPluginMode: "GenerateSW",
  },
};
