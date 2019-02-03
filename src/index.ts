
import chinaConfig from './data/china';
import worldConfig from './data/world';
import lite from './lite';

export default (opts) => {
  const {type, ...rest} = opts
  const source = type === 'china'? chinaConfig.shapes : worldConfig.shapes
  return lite({ source, ...rest})
}