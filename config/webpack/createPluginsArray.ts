import * as CopyWebpackPlugin from "copy-webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import { Plugin, EnvironmentPlugin } from "webpack";
import EnvironmentArgs from "./EnvironmentArgs";

const PATH_ROOT = path.resolve(__dirname, "..", "..");

const createWebpackPluginsArray = (envArgs: EnvironmentArgs): Plugin[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: path.join(PATH_ROOT, "assets", "index.html")
    }),
    // new CopyWebpackPlugin([{
    //     from: path.join(PATH_ROOT, 'assets', 'fonts'),
    //     to: path.join(PATH_ROOT, 'dist')
    // }]),
    new EnvironmentPlugin({
      NODE_ENV: envArgs.NODE_ENV
    })
  ];

  if (envArgs.analyze) {
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: true
      })
    );
  }

  return plugins;
};

export default createWebpackPluginsArray;
