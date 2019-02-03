import SVG from '@svgdotjs/svg.js/src/svg';

const defaultOptions = {
  shapes: {},
  names: {},
  properties: {},
  fill: '#7fc8ff',
  highlight: '#fc0',
  highlightSpeed: 200,
  stroke: {
    color: '#eee',
    width: 1,
  },
  showTip: false,
  hoverCallback: () => {

  },
  clickCallback: () => {

  }
}

const svgmap = (opts) => {
  const options = {...defaultOptions, ...opts}
  const svg = SVG().size(options.width, options.height)
  const shapes = options.shapes

  Object.keys(shapes).forEach((key) => {
    const value = shapes[key]
    svg.path(value)
      .fill(options.fill)
      .stroke(options.stroke)
      .on('mouseover', function (e) {
        this.animate(options.highlightSpeed, '<>').fill(options.highlight)
      })
      .on('mousemove', function(e) {
        
        options.hoverCallback(e, { 
          name: options.names[key] || '',
          property: options.properties[key] || ''
        })

      })
      .on('click', (e) => {

        options.clickCallback(e, { 
          name: options.names[key] || '',
          property: options.properties[key] || ''
        })

      })
      .on('mouseout', function(e){
        this.animate(options.highlightSpeed, '<>').fill(options.fill)
      })
  })
  return svg
}

export default svgmap