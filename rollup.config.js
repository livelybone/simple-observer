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
  ]
})

export default [
  { name: 'index', filename: './src/index.js', formats: ['es'], needUglify: false },
  { name: 'index', filename: './src/index.js', formats: ['umd'] },
].map(conf)
