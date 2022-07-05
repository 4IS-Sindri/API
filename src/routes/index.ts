import Router from '@koa/router'
import { HealthRoute } from './HealthRoute.js'
import { NewRoute } from './NewRoute.js'

const Endpoints = [HealthRoute, NewRoute]

export function getRoutes(): Router[] {
  const routes: Router[] = []

  for (const Endpoint of Endpoints) routes.push(new Endpoint().build())

  return routes
}
