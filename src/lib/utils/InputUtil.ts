/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			— Sindri
 * Project Version	— 1.0.0
 * Project Desc.		— An API for easily generating a new project or individual components.
 * Author						— Devin W. Leaman (4lch4)
 * Company					— 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				— /src/lib/utils/InputUtil.ts
 * File Created			— 2022-06-17 @ 06:42:37-05:00
 * Last Modified		— 2022-06-17 @ 07:14:41-05:00
 * Modified By			— Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License ⸺ http://www.opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */
import { RouterContext } from '@koa/router'
import { IUserInputParams } from '../../interfaces/index.js'

/** A utility class for handling user input to the API. */
export class InputUtil {
  /**
   * A utility function for getting the features from the query parameters
   * provided by the user using the `with` parameter. If there are no features
   * provided, an empty array is returned.
   *
   * @param ctx The Koa context object.
   * @returns A string array containing the features requested by the user.
   */
  private static getFeatures(ctx: RouterContext): string[] {
    if (ctx.query.with && typeof ctx.query.with === 'string') return ctx.query.with.split(',')
    return []
  }

  public static getInputParameters(ctx: RouterContext): IUserInputParams {
    return {
      projectType: ctx.params.projectType,
      with: this.getFeatures(ctx)
    }
  }
}
