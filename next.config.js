// const aliasPathsToResolve = [
//     { name: 'components', path: path.resolve(__dirname, './components') },
//     { name: 'Common', path: path.resolve(__dirname, '../../common/react/') },
// ]
const {apiURLs} = require('./src/config');
// const env = process.env.ENVIRONMENT || 'local';
const { BASE_URL: apiUrl } = apiURLs;

module.exports = {
    publicRuntimeConfig: {
        API_URL: apiUrl,
        ENV: process.env.DOCKER_ENV
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    }
};

