const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";

// Выбираем лоадер в зависимости от режима сборки
const styleLoader = isProduction ? MiniCssExtractPlugin.loader : "style-loader";

// Общий массив лоадеров для обработки CSS
const cssLoaders = [
  styleLoader,
  {
    loader: "css-loader",
    options: {
      sourceMap: !isProduction, // Включаем sourcemaps для отладки
    },
  },
];
module.exports = {
  mode: "development",
  // Входной файл
  entry: ["./src/js/index.js"],
  devServer: {
    static: "./dist", // Tells the server where to serve content from
    compress: true, // Enable gzip compression
    port: 9000, // Specify a port number
    open: true, // Open the default browser
    // ...more options
  },
  // Выходной файл
  output: {
    filename: "./js/bundle.js",
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: "**/node_modules",
  },
  // Source maps для удобства отладки
  devtool: "source-map",

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src/js"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      // Компилируем SCSS в CSS
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          "css-loader", // translates CSS into CommonJS
          "postcss-loader", // parse CSS and add vendor prefixes to CSS rules
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /.s[ac]ss$/i,
        use: [
          ...cssLoaders, // Используем базовые лоадеры для CSS
          "sass-loader", // Добавляем компилятор Sass
        ],
      },
      // Подключаем шрифты из css
      {
        test: /.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "TTLAKES/[name].[contenthash][ext]",
        },
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: "file-loader?name=./static/[name].[ext]",
          },
        ],
      },
    ],
  },
  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: "Webpack 4 Starter",
      template: "./src/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),

    // Копируем картинки
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/img", // Source directory
          to: "img", // Destination directory relative to output.path
        },
      ],
    }),
  ],
};
