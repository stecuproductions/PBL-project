const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Główne wejście aplikacji
  entry: './src/index.js',

  // Wyjściowe ustawienia plików
  output: {
    path: path.resolve(__dirname, 'dist'), // Gdzie mają być umieszczone zbudowane pliki
    filename: 'bundle.js', // Nazwa wyjściowego pliku
    assetModuleFilename: 'images/[hash][ext][query]', // Ścieżka do plików obrazów w folderze dist
    clean: true, // Czyści folder dist przed każdym buildem
  },

  // Reguły przetwarzania plików
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Obsługa plików .js i .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Obsługa plików CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Obsługa plików obrazów
        type: 'asset/resource', // Automatyczne zarządzanie plikami obrazów
      },
    ],
  },

  // Rozszerzenia obsługiwane podczas importu
  resolve: {
    extensions: ['.js', '.jsx'], // Automatyczne rozpoznawanie tych rozszerzeń
  },

  // Pluginy
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Szablon HTML w folderze public
      filename: 'index.html', // Nazwa wyjściowego pliku HTML
    }),
  ],

  // Serwer deweloperski
  devServer: {
    static: path.join(__dirname, 'public'), // Serwowanie plików statycznych z public
    port: 3000, // Port serwera deweloperskiego
    hot: true, // Włącz Hot Module Replacement (HMR)
    open: true, // Automatycznie otwiera przeglądarkę
  },
};
