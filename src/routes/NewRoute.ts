import { Successful } from '@4lch4/koa-oto'
import { RouterContext } from '@koa/router'
import { BaseRoute, InputUtil } from '../lib/index.js'

/**
 * The Route class for the `/new` route which is used when bootstrapping a new
 * project.
 *
 * @class
 */
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
