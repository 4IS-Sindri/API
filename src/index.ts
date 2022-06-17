/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			— Sindri
 * Project Version	— 1.0.0
 * Project Desc.		— An API for easily generating a new project or individual components.
 * Author						— Devin W. Leaman (4lch4)
 * Company					— 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				— /src/index.ts
 * File Created			— 2022-06-17 @ 00:50:32-05:00
 * Last Modified		— 2022-06-17 @ 01:03:23-05:00
 * Modified By			— Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License ⸺ http://www.opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */

import { getAppConfig, Server } from './lib/index.js'

try {
  const AppConfig = getAppConfig()

  if (AppConfig) {
    const server = new Server(AppConfig)

    server.addRoutes().addMiddleware().start()
  } else console.error('AppConfig is empty')
} catch (err) {
  console.error(err)
  process.exit(1)
}
