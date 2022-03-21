import { ElHeader, ElMain, ElInput, ElSelect, ElOption } from 'element-plus'

const component = [ElHeader, ElMain, ElInput, ElSelect, ElOption]

/** [element plus] plusin */
export default (app) => {
  component.forEach((e) => {
    app.use(e)
    return null
  })
}
