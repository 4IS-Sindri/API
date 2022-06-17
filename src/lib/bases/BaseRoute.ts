/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			— Sindri
 * Project Version	— 1.0.0
 * Project Desc.		— An API for easily generating a new project or individual components.
 * Author						— Devin W. Leaman (4lch4)
 * Company					— 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				— /src/lib/bases/BaseRoute.ts
 * File Created			— 2022-06-17 @ 00:53:08-05:00
 * Last Modified		— 2022-06-17 @ 00:59:19-05:00
 * Modified By			— Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License ⸺ http://www.opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */
import Router from '@koa/router'
import { DefaultRouter } from '../constants/index.js'
import { Logger, logger } from '@4lch4/logger'

/**
 * The base route class to be extended by all other routes.
 *
 * @class BaseRoute
 */
export class BaseRoute {
  logger: Logger = logger
  router: Router = DefaultRouter

  build(): Router {
    return this.router
  }
}
