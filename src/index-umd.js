import { hueman, mix, correction} from './index.js'

let total = hueman.bind({});
Object.assign(total, { correction, mix })
export default total;