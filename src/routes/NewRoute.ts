/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			— Sindri
 * Project Version	— 1.0.0
 * Project Desc.		— An API for easily generating a new project or individual components.
 * Author						— Devin W. Leaman (4lch4)
 * Company					— 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				— /src/routes/New.ts
 * File Created			— 2022-06-17 @ 01:42:48-05:00
 * Last Modified		— 2022-06-17 @ 07:12:49-05:00
 * Modified By			— Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License ⸺ http://www.opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */
import { Successful } from '@4lch4/koa-oto'
import { RouterContext } from '@koa/router'
import { BaseRoute, InputUtil } from '../lib/index.js'

/** The Route class for the `/new` route. */
export class NewRoute extends BaseRoute {
  async handleRequest(ctx: RouterContext) {
    const input = InputUtil.getInputParameters(ctx)

    // this.logger.info(ctx)
    // this.logger.info(ctx.params)
    // this.logger.info(ctx.querystring)
    // this.logger.info(ctx.query)

    // this.logger.info('iUtil.getInputParameters(ctx)...')
    // this.logger.info(input)
    // this.logger.info(JSON.stringify(ctx, null, 2))

    this.logger.info(input)

    Successful.ok(ctx)
    this.logger.info(`${ctx.method} ⇥ ${ctx.path} ⇥ (${ctx.status})`)
  }

  build() {
    this.router.post('/new/:projectType', async ctx => this.handleRequest(ctx))
    this.router.get('/new/:projectType', async ctx => this.handleRequest(ctx))

    return this.router
  }
}
