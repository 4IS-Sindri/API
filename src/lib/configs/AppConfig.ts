/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			— Sindri
 * Project Version	— 1.0.0
 * Project Desc.		— An API for easily generating a new project or individual components.
 * Author						— Devin W. Leaman (4lch4)
 * Company					— 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				— /src/lib/configs/AppConfig.ts
 * File Created			— 2022-06-17 @ 01:00:57-05:00
 * Last Modified		— 2022-06-17 @ 01:01:42-05:00
 * Modified By			— Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License ⸺ http://www.opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */

import { IAppConfig } from '../../interfaces/index.js'

const ConfigDefaults: IAppConfig = {
  apiPrefix: '/api/v1',
  name: 'Koa API Template',
  port: 8080,
  version: '1.0.0'
}

export function getAppConfig(): IAppConfig {
  return {
    apiPrefix: process.env.API_PREFIX || ConfigDefaults.apiPrefix,
    name: process.env.APP_NAME || ConfigDefaults.name,
    version: process.env.APP_VERSION || ConfigDefaults.version,
    port: parseInt(process.env.APP_PORT || ConfigDefaults.port.toString())
  }
}
