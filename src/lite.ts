import SVG from '@svgdotjs/svg.js/src/svg';

const defaultOptions = {
  fill: '#7fc8ff',
  stroke: {
    color: '#fff',
    width: 1,
  },
}

const svgmap = (opts) => {
  const options = {...defaultOptions, ...opts}
  const svg = SVG().size(options.width, options.height)
  const shapes = options.source
  Object.keys(shapes).forEach((key) => {
    const value = shapes[key]
    svg.path(value)
      .fill(options.fill)
      .stroke(options.stroke)
  })
  return svg
}

export default svgmap