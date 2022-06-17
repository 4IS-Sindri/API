/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			— Sindri
 * Project Version	— 1.0.0
 * Project Desc.		— An API for easily generating a new project or individual components.
 * Author						— Devin W. Leaman (4lch4)
 * Company					— 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				— /src/lib/utils/Server.ts
 * File Created			— 2022-06-17 @ 01:02:31-05:00
 * Last Modified		— 2022-06-17 @ 01:39:41-05:00
 * Modified By			— Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License ⸺ http://www.opensource.org/licenses/MIT
 * 
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */

import { printRoutes } from '@4lch4/koa-router-printer'
import Koa from 'koa'
import KBody from 'koa-body'
import Helmet from 'koa-helmet'
import { IAppConfig } from '../../interfaces/index.js'
import { getRoutes } from '../../routes/index.js'

export class Server {
  private config: IAppConfig
  private app: Koa

  constructor(config: IAppConfig) {
    this.app = new Koa()

    this.config = config
  }

  start() {
    this.app.listen(this.config.port, () => {
      console.log(
        `${this.config.name}-v${this.config.version} has come online!`
      )
    })

    return this // For method chaining
  }

  addMiddleware() {
    this.app.use(KBody())
    this.app.use(Helmet())

    return this // For method chaining
  }

  addRoutes() {
    const routes = getRoutes()

    for (const route of routes) {
      this.app.use(route.routes())
      this.app.use(route.allowedMethods())
    }

    printRoutes(this.app, {
      displayHead: false,
      displayPrefix: true
    })

    return this // For method chaining
  }
}
