import { IAPIBuilderOpts } from '../../interfaces/index.js'

/**
 * The base Builder class to be extended by all the other Builder classes. Each
 * class is for building a specific type of project. For example, APIBuilder
 * class will build out the beginning of a new API project.
 *
 * @abstract
 */
export abstract class BaseBuilder {
  constructor(protected builderOpts: IAPIBuilderOpts) {}

  /**
   * The function that must be implemented by all extending classes that is
   * called when the project needs to be built.
   *
   * @abstract
   */
  abstract build(): Promise<void>
}
