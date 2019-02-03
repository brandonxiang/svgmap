import Snap from 'snapsvg';

const defaultOptions = {
  fill: '#7fc8ff',
  stroke: '#fff',
  strokeWidth: 1,
}

const svgmap = (opts) => {
  const options = {...defaultOptions, ...opts}
  const svg = Snap(options.width, options.height)
  const shapes = options.source
  Object.keys(shapes).forEach((key) => {
    const value = shapes[key]
    var el = svg.paper.path(value)
    el.attr({
        fill: options.fill,
        stroke: options.stroke,
        strokeWidth: options.strokeWidth,
    });
  })
  return svg
}

export default svgmap