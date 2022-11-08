import tailwindcss from 'tailwindcss'
import postcssCustomMedia from 'postcss-custom-media'

export default function(config, env, helpers) {
  const results = helpers.getLoadersByName(config, 'postcss-loader')
  for (const result of results) {
    // console.log('plugins', result.loader.options.postcssOptions.plugins)
    result.loader.options.postcssOptions.plugins = [
      postcssCustomMedia,
      tailwindcss('./tailwind.config.js'),
      // other postcss plugins can be added here
      ...result.loader.options.postcssOptions.plugins
    ]
  }
  return config
}
