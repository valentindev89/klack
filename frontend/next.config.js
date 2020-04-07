const path = require('path');
const dotenv = require('dotenv');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withOffline = require('next-offline');
const webpack = require('webpack');
const withSourceMaps = require('@zeit/next-source-maps');

dotenv.config({ path: `../.env.${process.env.NODE_ENV}` });

module.exports = withSourceMaps(
  withOffline(
    withFonts(
      withImages(
        withCSS({
          target: 'serverless',
          webpack(config, options) {
            /**
             * Returns environment variables as an object
             */
            const env = Object.keys(process.env).reduce((acc, curr) => {
              acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
              return acc;
            }, {});
            /** Allows you to create global constants which can be configured
             * at compile time, which in our case is our environment variables
             */
            config.plugins.push(new webpack.DefinePlugin(env));

            config.module.rules.push({
              test: /\.(ogg|mp3|wav|mpe?g)$/i,
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            });
            config.module.rules.push({
              test: /\.(ogg|mp3|wav|mpe?g)$/i,
              loader: 'url-loader',
              options: {
                limit: false,
              },
            });
            config.resolve.modules.push(path.resolve('./'));

            if (!options.isServer) {
              // https://github.com/zeit/next.js/blob/canary/examples/with-sentry-simple/next.config.js
              // eslint-disable-next-line
              config.resolve.alias['@sentry/node'] = '@sentry/browser';
            }
            return config;
          },
        })
      )
    )
  )
);
