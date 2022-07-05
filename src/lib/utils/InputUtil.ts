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
