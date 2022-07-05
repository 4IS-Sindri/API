/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			— Sindri
 * Project Version	— 1.0.0
 * Project Desc.		— An API for easily generating a new project or individual components.
 * Author						— Devin W. Leaman (4lch4)
 * Company					— 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				— /src/routes/Health.ts
 * File Created			— 2022-06-17 @ 00:56:45-05:00
 * Last Modified		— 2022-06-17 @ 01:54:23-05:00
 * Modified By			— Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License ⸺ http://www.opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */

import { Successful } from '@4lch4/koa-oto'
import { RouterContext } from '@koa/router'
import { BaseRoute } from '../lib/index.js'

export class HealthRoute extends BaseRoute {
  async getMethod(ctx: RouterContext) {
    Successful.ok(ctx)

    this.logger.success(`${ctx.method} ⇥ ${ctx.path} ⇥ (${ctx.status})`)
  }

  build() {
    this.router.get('/health/liveness', async ctx => this.getMethod(ctx))
    this.router.get('/health/readiness', async ctx => this.getMethod(ctx))

    return this.router
  }
}
