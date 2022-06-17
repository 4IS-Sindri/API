/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			— Sindri
 * Project Version	— 1.0.0
 * Project Desc.		— An API for easily generating a new project or individual components.
 * Author						— Devin W. Leaman (4lch4)
 * Company					— 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				— /src/routes/index.ts
 * File Created			— 2022-06-17 @ 00:52:54-05:00
 * Last Modified		— 2022-06-17 @ 01:00:22-05:00
 * Modified By			— Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License ⸺ http://www.opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */

import Router from '@koa/router'
import { Health } from './Health.js'

const Endpoints = [Health]

export function getRoutes(): Router[] {
  const routes: Router[] = []

  for (const Endpoint of Endpoints) routes.push(new Endpoint().build())

  return routes
}
