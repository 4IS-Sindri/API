/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			— Sindri
 * Project Version	— 1.0.0
 * Project Desc.		— An API for easily generating a new project or individual components.
 * Author						— Devin W. Leaman (4lch4)
 * Company					— 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				— /src/interfaces/IAppConfig.ts
 * File Created			— 2022-06-17 @ 01:01:15-05:00
 * Last Modified		— 2022-06-17 @ 01:01:18-05:00
 * Modified By			— Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License ⸺ http://www.opensource.org/licenses/MIT
 * 
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */

export interface IAppConfig {
  name: string
  version: string
  port: number
  apiPrefix: string
}
