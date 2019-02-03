
import chinaConfig from './data/china';
import worldConfig from './data/world';
import lite from './lite';

export default (opts) => {
  const {type, ...rest} = opts
  const shapes = type === 'china'? chinaConfig.shapes : worldConfig.shapes
  return lite({ shapes, ...rest})
}