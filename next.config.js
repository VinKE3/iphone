// next.config.js

module.exports = {
  webpack: (config, { isServer }) => {
    // Agregar configuración de loader solo para archivos de vídeo
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          name: "static/media/[name].[hash].[ext]",
        },
      },
    });

    // // Necesario para evitar errores al compilar el servidor
    // if (!isServer) {
    //   config.node = {
    //     fs: "empty",
    //   };
    // }

    return config;
  },
};
