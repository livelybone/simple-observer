import license from 'rollup-plugin-license'
import { uglify } from 'rollup-plugin-uglify'

const conf = entry => ({
  input: entry.filename,
  output: entry.formats.map(format => ({
    file: `./lib/${format}/${entry.name}.js`,
    format,
    name: 'SimpleObserver',
  })),
  plugins: [
    (entry.needUglify !== false && uglify()),
    license({
      banner: `Bundle of <%= pkg.name %>
               Generated: <%= moment().format('YYYY-MM-DD') %>
               Version: <%= pkg.version %>
               License: <%= pkg.license %>
               Author: <%= pkg.author %>`,
    }),
  ]
})

export default [
  { name: 'index', filename: './src/index.js', formats: ['es'], needUglify: false },
  { name: 'index', filename: './src/index.js', formats: ['umd'] },
].map(conf)
