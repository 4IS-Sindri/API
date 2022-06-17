/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			— Sindri
 * Project Version	— 1.0.0
 * Project Desc.		— An API for easily generating a new project or individual components.
 * Author						— Devin W. Leaman (4lch4)
 * Company					— 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				— /src/lib/bases/BaseBuilder.ts
 * File Created			— 2022-06-17 @ 07:16:53-05:00
 * Last Modified		— 2022-06-17 @ 07:26:21-05:00
 * Modified By			— Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License ⸺ http://www.opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */

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
