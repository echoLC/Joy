const LogWebTask = require('../model/LogWebTask')

class Log {
  static log (data) {
    const webLog = new LogWebTask()
    const {
      webSource,
      customInfo,
      deviceId,
      environment
    } = data
    webLog.web_source = webSource
    webLog.customInfo = customInfo
    webLog.device_id = deviceId
    webLog.environment = environment
    webLog.save()
  }
}

module.exports = Log
