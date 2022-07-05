// To parse this data:
//
//   import { Convert, IPackage } from "./file";
//
//   const iPackage = Convert.toIPackage(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface IPackageJson {
  author?: IPersonObject | string
  bin?: { [key: string]: string } | string

  /**
   * The url to your project's issue tracker and / or the email address to which issues should
   * be reported. These are helpful for people who encounter issues with your package.
   */
  bugs?: IBugsObject | string

  /**
   * Array of package names that will be bundled when publishing the package.
   */
  bundledDependencies?: string[] | boolean

  /**
   * DEPRECATED: This field is honored, but "bundledDependencies" is the correct field name.
   */
  bundleDependencies?: string[] | boolean

  /**
   * A 'config' hash can be used to set configuration parameters used in package scripts that
   * persist across upgrades.
   */
  config?: { [key: string]: any }

  /**
   * A list of people who contributed to this package.
   */
  contributors?: Array<IPersonObject | string>

  /**
   * Specify that your code only runs on certain cpu architectures.
   */
  cpu?: string[]
  dependencies?: { [key: string]: string }

  /**
   * This helps people discover your package, as it's listed in 'npm search'.
   */
  description?: string
  devDependencies?: { [key: string]: string }
  directories?: IDirectories
  dist?: IDist
  engines?: IEngines
  engineStrict?: boolean

  /**
   * A module ID with untranspiled code that is the primary entry point to your program.
   */
  esnext?: IESNextObject | string

  /**
   * The "exports" field is used to restrict external access to non-exported module files,
   * also enables a module to import itself using "name".
   */
  exports?:
    | Array<IPackageExportsEntryPackageExportsEntryObject | null | string>
    | IExportsPackageExportsEntryObject
    | null
    | string

  /**
   * The 'files' field is an array of files to include in your project. If you name a folder
   * in the array, then it will also include the files inside that folder.
   */
  files?: string[]
  funding?: Array<IFundingWay | string> | IFundingWay | string

  /**
   * The url to the project homepage.
   */
  homepage?: string

  /**
   * This helps people discover your package as it's listed in 'npm search'.
   */
  keywords?: string[]

  /**
   * You should specify a license for your package so that people know how they are permitted
   * to use it, and any restrictions you're placing on it.
   */
  license?: string

  /**
   * DEPRECATED: Instead, use SPDX expressions, like this: { "license": "ISC" } or {
   * "license": "(MIT OR Apache-2.0)" } see:
   * 'https://docs.npmjs.com/files/package.json#license'.
   */
  licenses?: ILicense[]

  /**
   * The main field is a module ID that is the primary entry point to your program.
   */
  main?: string

  /**
   * A list of people who maintains this package.
   */
  maintainers?: Array<IPersonObject | string>

  /**
   * Specify either a single file or an array of filenames to put in place for the man program
   * to find.
   */
  man?: string[] | string

  /**
   * An ECMAScript module ID that is the primary entry point to your program.
   */
  module?: string

  /**
   * The name of the package.
   */
  name?: string
  optionalDependencies?: { [key: string]: string }

  /**
   * Specify which operating systems your module will run on.
   */
  os?: string[]

  /**
   * Defines which package manager is expected to be used when working on the current project.
   * This field is currently experimental and needs to be opted-in; see
   * https://nodejs.org/api/corepack.html
   */
  packageManager?: string
  peerDependencies?: { [key: string]: string }

  /**
   * When a user installs your package, warnings are emitted if packages specified in
   * "peerDependencies" are not already installed. The "peerDependenciesMeta" field serves to
   * provide more information on how your peer dependencies are utilized. Most commonly, it
   * allows peer dependencies to be marked as optional. Metadata for this field is specified
   * with a simple hash of the package name to a metadata object.
   */
  peerDependenciesMeta?: { [key: string]: IPeerDependenciesMeta }

  /**
   * DEPRECATED: This option used to trigger an npm warning, but it will no longer warn. It is
   * purely there for informational purposes. It is now recommended that you install any
   * binaries as local devDependencies wherever possible.
   */
  preferGlobal?: boolean

  /**
   * If set to true, then npm will refuse to publish it.
   */
  private?: boolean | PrivateEnum
  publishConfig?: IPublishConfig
  readme?: string

  /**
   * Specify the place where your code lives. This is helpful for people who want to
   * contribute.
   */
  repository?: IRepositoryObject | string

  /**
   * Resolutions is used to support selective version resolutions, which lets you define
   * custom package versions or ranges inside your dependencies. See:
   * https://classic.yarnpkg.com/en/docs/selective-version-resolutions
   */
  resolutions?: { [key: string]: any }

  /**
   * The 'scripts' member is an object hash of script commands that are run at various times
   * in the lifecycle of your package. The key is the lifecycle event, and the value is the
   * command to run at that point.
   */
  scripts?: IScripts

  /**
   * When set to "module", the type field allows a package to specify all .js files within are
   * ES modules. If the "type" field is omitted or set to "commonjs", all .js files are
   * treated as CommonJS.
   */
  type?: Type

  /**
   * Set the types property to point to your bundled declaration file.
   */
  types?: string

  /**
   * The "typesVersions" field is used since TypeScript 3.1 to support features that were only
   * made available in newer TypeScript versions.
   */
  typesVersions?: { [key: string]: ITypesVersion }

  /**
   * Note that the "typings" field is synonymous with "types", and could be used as well.
   */
  typings?: string

  /**
   * Version must be parseable by node-semver, which is bundled with npm as a dependency.
   */
  version?: string

  /**
   * Allows packages within a directory to depend on one another using direct linking of local
   * files. Additionally, dependencies within a workspace are hoisted to the workspace root
   * when possible to reduce duplication. Note: It's also a good idea to set "private" to true
   * when using this feature.
   */
  workspaces?: string[] | IWorkspacesObject
}

export interface IPersonObject {
  email?: string
  name: string
  url?: string
}

export interface IBugsObject {
  /**
   * The email address to which issues should be reported.
   */
  email?: string

  /**
   * The url to your project's issue tracker.
   */
  url?: string
}

export interface IDirectories {
  /**
   * If you specify a 'bin' directory, then all the files in that folder will be used as the
   * 'bin' hash.
   */
  bin?: string

  /**
   * Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.
   */
  doc?: string

  /**
   * Put example scripts in here. Someday, it might be exposed in some clever way.
   */
  example?: string

  /**
   * Tell people where the bulk of your library is. Nothing special is done with the lib
   * folder in any way, but it's useful meta info.
   */
  lib?: string

  /**
   * A folder that is full of man pages. Sugar to generate a 'man' array by walking the folder.
   */
  man?: string
  test?: string
}

export interface IDist {
  shasum?: string
  tarball?: string
}

export interface IEngines {
  node?: string
}

export interface IESNextObject {
  browser?: string
  main?: string
}

/**
 * Used to specify conditional exports, note that Conditional exports are unsupported in
 * older environments, so it's recommended to use the fallback array option if support for
 * those environments is a concern.
 *
 * The module path that is resolved when the module specifier matches "name", shadows the
 * "main" field.
 */
export interface IPackageExportsEntryPackageExportsEntryObject {
  /**
   * The module path that is resolved when no other export type matches.
   */
  default?:
    | Array<IPackageExportsEntryPackageExportsEntryObject | null | string>
    | IPackageExportsEntryPackageExportsEntryObject
    | null
    | string

  /**
   * The module path that is resolved when this specifier is imported as an ECMAScript module
   * using an `import` declaration or the dynamic `import(...)` function.
   */
  import?:
    | Array<IPackageExportsEntryPackageExportsEntryObject | null | string>
    | IPackageExportsEntryPackageExportsEntryObject
    | null
    | string

  /**
   * The module path that is resolved when this environment is Node.js.
   */
  node?:
    | Array<IPackageExportsEntryPackageExportsEntryObject | null | string>
    | IPackageExportsEntryPackageExportsEntryObject
    | null
    | string

  /**
   * The module path that is resolved when this specifier is imported as a CommonJS module
   * using the `require(...)` function.
   */
  require?:
    | Array<IPackageExportsEntryPackageExportsEntryObject | null | string>
    | IPackageExportsEntryPackageExportsEntryObject
    | null
    | string
}

/**
 * Used to specify conditional exports, note that Conditional exports are unsupported in
 * older environments, so it's recommended to use the fallback array option if support for
 * those environments is a concern.
 *
 * The module path that is resolved when the module specifier matches "name", shadows the
 * "main" field.
 */
export interface IExportsPackageExportsEntryObject {
  /**
   * The module path that is resolved when the module specifier matches "name", shadows the
   * "main" field.
   */
  '.'?:
    | Array<IPackageExportsEntryPackageExportsEntryObject | null | string>
    | IPackageExportsEntryPackageExportsEntryObject
    | null
    | string

  /**
   * The module path that is resolved when no other export type matches.
   */
  default?:
    | Array<IPackageExportsEntryPackageExportsEntryObject | null | string>
    | IPackageExportsEntryPackageExportsEntryObject
    | null
    | string

  /**
   * The module path that is resolved when this specifier is imported as an ECMAScript module
   * using an `import` declaration or the dynamic `import(...)` function.
   */
  import?:
    | Array<IPackageExportsEntryPackageExportsEntryObject | null | string>
    | IPackageExportsEntryPackageExportsEntryObject
    | null
    | string

  /**
   * The module path that is resolved when this environment is Node.js.
   */
  node?:
    | Array<IPackageExportsEntryPackageExportsEntryObject | null | string>
    | IPackageExportsEntryPackageExportsEntryObject
    | null
    | string

  /**
   * The module path that is resolved when this specifier is imported as a CommonJS module
   * using the `require(...)` function.
   */
  require?:
    | Array<IPackageExportsEntryPackageExportsEntryObject | null | string>
    | IPackageExportsEntryPackageExportsEntryObject
    | null
    | string
}

/**
 * Used to inform about ways to help fund development of the package.
 */
export interface IFundingWay {
  /**
   * The type of funding or the platform through which funding can be provided, e.g. patreon,
   * opencollective, tidelift or github.
   */
  type?: string
  url: string
}

export interface ILicense {
  type?: string
  url?: string
}

export interface IPeerDependenciesMeta {
  /**
   * Specifies that this peer dependency is optional and should not be installed automatically.
   */
  optional?: boolean
}

export enum PrivateEnum {
  False = 'false',
  True = 'true'
}

export interface IPublishConfig {
  access?: Access
  registry?: string
  tag?: string
}

export enum Access {
  Public = 'public',
  Restricted = 'restricted'
}

export interface IRepositoryObject {
  directory?: string
  type?: string
  url?: string
}

/**
 * The 'scripts' member is an object hash of script commands that are run at various times
 * in the lifecycle of your package. The key is the lifecycle event, and the value is the
 * command to run at that point.
 */
export interface IScripts {
  // For any custom/user-defined scripts.
  [key: string]: string | undefined

  /** Run AFTER the package is installed. */
  install?: string

  /**
   * Run code quality tools, e.g. ESLint, TSLint, etc.
   */
  lint?: string
  postinstall?: string

  /**
   * Run AFTER the tarball has been generated and moved to its final destination.
   */
  postpack?: string
  postpublish?: string
  postrestart?: string
  poststart?: string
  poststop?: string
  posttest?: string

  /**
   * Run AFTER the package is uninstalled.
   */
  postuninstall?: string

  /**
   * Run AFTER bump the package version.
   */
  postversion?: string

  /**
   * Run BEFORE the package is installed.
   */
  preinstall?: string

  /**
   * run BEFORE a tarball is packed (on npm pack, npm publish, and when installing git
   * dependencies).
   */
  prepack?: string

  /**
   * Run both BEFORE the package is packed and published, and on local npm install without any
   * arguments. This is run AFTER prepublish, but BEFORE prepublishOnly.
   */
  prepare?: string

  /**
   * Run BEFORE the package is published (Also run on local npm install without any arguments).
   */
  prepublish?: string

  /**
   * Run BEFORE the package is prepared and packed, ONLY on npm publish.
   */
  prepublishOnly?: string
  prerestart?: string
  prestart?: string
  prestop?: string
  pretest?: string
  preuninstall?: string
  preversion?: string

  /**
   * Publishes a package to the registry so that it can be installed by name. See
   * https://docs.npmjs.com/cli/v8/commands/npm-publish
   */
  publish?: string
  restart?: string

  /**
   * Start dev server to serve application files
   */
  serve?: string
  start?: string
  stop?: string
  test?: string
  uninstall?: string
  version?: string
}

/**
 * When set to "module", the type field allows a package to specify all .js files within are
 * ES modules. If the "type" field is omitted or set to "commonjs", all .js files are
 * treated as CommonJS.
 */
export enum Type {
  Commonjs = 'commonjs',
  Module = 'module'
}

/**
 * Contains overrides for the TypeScript version that matches the version range matching the
 * property key.
 */
export interface ITypesVersion {
  /**
   * Maps all file paths to the file paths specified in the array.
   */
  '*'?: string[]
}

export interface IWorkspacesObject {
  /**
   * Packages to block from hoisting to the workspace root. Currently only supported in Yarn
   * only.
   */
  nohoist?: string[]

  /**
   * Workspace package paths. Glob patterns are supported.
   */
  packages?: string[]
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toIPackage(json: string): IPackageJson {
    return cast(JSON.parse(json), r('IPackage'))
  }

  public static iPackageToJson(value: IPackageJson): string {
    return JSON.stringify(uncast(value, r('IPackage')), null, 2)
  }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
  if (key) {
    throw Error(
      `Invalid value for key "${key}". Expected type ${JSON.stringify(
        typ
      )} but got ${JSON.stringify(val)}`
    )
  }
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`)
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {}
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }))
    typ.jsonToJS = map
  }
  return typ.jsonToJS
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {}
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }))
    typ.jsToJSON = map
  }
  return typ.jsToJSON
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val
    return invalidValue(typ, val, key)
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length
    for (let i = 0; i < l; i++) {
      const typ = typs[i]
      try {
        return transform(val, typ, getProps)
      } catch (_) {}
    }
    return invalidValue(typs, val)
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val
    return invalidValue(cases, val)
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue('array', val)
    return val.map(el => transform(el, typ, getProps))
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null
    }
    const d = new Date(val)
    if (isNaN(d.valueOf())) {
      return invalidValue('Date', val)
    }
    return d
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue('object', val)
    }
    const result: any = {}
    Object.getOwnPropertyNames(props).forEach(key => {
      const prop = props[key]
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined
      result[prop.key] = transform(v, prop.typ, getProps, prop.key)
    })
    Object.getOwnPropertyNames(val).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key)
      }
    })
    return result
  }

  if (typ === 'any') return val
  if (typ === null) {
    if (val === null) return val
    return invalidValue(typ, val)
  }
  if (typ === false) return invalidValue(typ, val)
  while (typeof typ === 'object' && typ.ref !== undefined) {
    typ = typeMap[typ.ref]
  }
  if (Array.isArray(typ)) return transformEnum(typ, val)
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty('props')
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val)
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(val)
  return transformPrimitive(typ, val)
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps)
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps)
}

function a(typ: any) {
  return { arrayItems: typ }
}

function u(...typs: any[]) {
  return { unionMembers: typs }
}

function o(props: any[], additional: any) {
  return { props, additional }
}

function m(additional: any) {
  return { props: [], additional }
}

function r(name: string) {
  return { ref: name }
}

const typeMap: any = {
  IPackage: o(
    [
      {
        json: 'author',
        js: 'author',
        typ: u(undefined, u(r('PersonObject'), ''))
      },
      { json: 'bin', js: 'bin', typ: u(undefined, u(m(''), '')) },
      { json: 'bugs', js: 'bugs', typ: u(undefined, u(r('BugsObject'), '')) },
      {
        json: 'bundledDependencies',
        js: 'bundledDependencies',
        typ: u(undefined, u(a(''), true))
      },
      {
        json: 'bundleDependencies',
        js: 'bundleDependencies',
        typ: u(undefined, u(a(''), true))
      },
      { json: 'config', js: 'config', typ: u(undefined, m('any')) },
      {
        json: 'contributors',
        js: 'contributors',
        typ: u(undefined, a(u(r('PersonObject'), '')))
      },
      { json: 'cpu', js: 'cpu', typ: u(undefined, a('')) },
      { json: 'dependencies', js: 'dependencies', typ: u(undefined, m('')) },
      { json: 'description', js: 'description', typ: u(undefined, '') },
      {
        json: 'devDependencies',
        js: 'devDependencies',
        typ: u(undefined, m(''))
      },
      {
        json: 'directories',
        js: 'directories',
        typ: u(undefined, r('Directories'))
      },
      { json: 'dist', js: 'dist', typ: u(undefined, r('Dist')) },
      { json: 'engines', js: 'engines', typ: u(undefined, r('Engines')) },
      { json: 'engineStrict', js: 'engineStrict', typ: u(undefined, true) },
      {
        json: 'esnext',
        js: 'esnext',
        typ: u(undefined, u(r('EsnextObject'), ''))
      },
      {
        json: 'exports',
        js: 'exports',
        typ: u(
          undefined,
          u(
            a(u(r('PackageExportsEntryPackageExportsEntryObject'), null, '')),
            r('ExportsPackageExportsEntryObject'),
            null,
            ''
          )
        )
      },
      { json: 'files', js: 'files', typ: u(undefined, a('')) },
      {
        json: 'funding',
        js: 'funding',
        typ: u(undefined, u(a(u(r('FundingWay'), '')), r('FundingWay'), ''))
      },
      { json: 'homepage', js: 'homepage', typ: u(undefined, '') },
      { json: 'keywords', js: 'keywords', typ: u(undefined, a('')) },
      { json: 'license', js: 'license', typ: u(undefined, '') },
      { json: 'licenses', js: 'licenses', typ: u(undefined, a(r('License'))) },
      { json: 'main', js: 'main', typ: u(undefined, '') },
      {
        json: 'maintainers',
        js: 'maintainers',
        typ: u(undefined, a(u(r('PersonObject'), '')))
      },
      { json: 'man', js: 'man', typ: u(undefined, u(a(''), '')) },
      { json: 'module', js: 'module', typ: u(undefined, '') },
      { json: 'name', js: 'name', typ: u(undefined, '') },
      {
        json: 'optionalDependencies',
        js: 'optionalDependencies',
        typ: u(undefined, m(''))
      },
      { json: 'os', js: 'os', typ: u(undefined, a('')) },
      { json: 'packageManager', js: 'packageManager', typ: u(undefined, '') },
      {
        json: 'peerDependencies',
        js: 'peerDependencies',
        typ: u(undefined, m(''))
      },
      {
        json: 'peerDependenciesMeta',
        js: 'peerDependenciesMeta',
        typ: u(undefined, m(r('PeerDependenciesMeta')))
      },
      { json: 'preferGlobal', js: 'preferGlobal', typ: u(undefined, true) },
      {
        json: 'private',
        js: 'private',
        typ: u(undefined, u(true, r('PrivateEnum')))
      },
      {
        json: 'publishConfig',
        js: 'publishConfig',
        typ: u(undefined, r('PublishConfig'))
      },
      { json: 'readme', js: 'readme', typ: u(undefined, '') },
      {
        json: 'repository',
        js: 'repository',
        typ: u(undefined, u(r('RepositoryObject'), ''))
      },
      { json: 'resolutions', js: 'resolutions', typ: u(undefined, m('any')) },
      { json: 'scripts', js: 'scripts', typ: u(undefined, r('Scripts')) },
      { json: 'type', js: 'type', typ: u(undefined, r('Type')) },
      { json: 'types', js: 'types', typ: u(undefined, '') },
      {
        json: 'typesVersions',
        js: 'typesVersions',
        typ: u(undefined, m(r('TypesVersion')))
      },
      { json: 'typings', js: 'typings', typ: u(undefined, '') },
      { json: 'version', js: 'version', typ: u(undefined, '') },
      {
        json: 'workspaces',
        js: 'workspaces',
        typ: u(undefined, u(a(''), r('WorkspacesObject')))
      }
    ],
    'any'
  ),
  PersonObject: o(
    [
      { json: 'email', js: 'email', typ: u(undefined, '') },
      { json: 'name', js: 'name', typ: '' },
      { json: 'url', js: 'url', typ: u(undefined, '') }
    ],
    'any'
  ),
  BugsObject: o(
    [
      { json: 'email', js: 'email', typ: u(undefined, '') },
      { json: 'url', js: 'url', typ: u(undefined, '') }
    ],
    'any'
  ),
  Directories: o(
    [
      { json: 'bin', js: 'bin', typ: u(undefined, '') },
      { json: 'doc', js: 'doc', typ: u(undefined, '') },
      { json: 'example', js: 'example', typ: u(undefined, '') },
      { json: 'lib', js: 'lib', typ: u(undefined, '') },
      { json: 'man', js: 'man', typ: u(undefined, '') },
      { json: 'test', js: 'test', typ: u(undefined, '') }
    ],
    'any'
  ),
  Dist: o(
    [
      { json: 'shasum', js: 'shasum', typ: u(undefined, '') },
      { json: 'tarball', js: 'tarball', typ: u(undefined, '') }
    ],
    'any'
  ),
  Engines: o([{ json: 'node', js: 'node', typ: u(undefined, '') }], ''),
  EsnextObject: o(
    [
      { json: 'browser', js: 'browser', typ: u(undefined, '') },
      { json: 'main', js: 'main', typ: u(undefined, '') }
    ],
    ''
  ),
  PackageExportsEntryPackageExportsEntryObject: o(
    [
      {
        json: 'default',
        js: 'default',
        typ: u(
          undefined,
          u(
            a(u(r('PackageExportsEntryPackageExportsEntryObject'), null, '')),
            r('PackageExportsEntryPackageExportsEntryObject'),
            null,
            ''
          )
        )
      },
      {
        json: 'import',
        js: 'import',
        typ: u(
          undefined,
          u(
            a(u(r('PackageExportsEntryPackageExportsEntryObject'), null, '')),
            r('PackageExportsEntryPackageExportsEntryObject'),
            null,
            ''
          )
        )
      },
      {
        json: 'node',
        js: 'node',
        typ: u(
          undefined,
          u(
            a(u(r('PackageExportsEntryPackageExportsEntryObject'), null, '')),
            r('PackageExportsEntryPackageExportsEntryObject'),
            null,
            ''
          )
        )
      },
      {
        json: 'require',
        js: 'require',
        typ: u(
          undefined,
          u(
            a(u(r('PackageExportsEntryPackageExportsEntryObject'), null, '')),
            r('PackageExportsEntryPackageExportsEntryObject'),
            null,
            ''
          )
        )
      }
    ],
    false
  ),
  ExportsPackageExportsEntryObject: o(
    [
      {
        json: '.',
        js: '.',
        typ: u(
          undefined,
          u(
            a(u(r('PackageExportsEntryPackageExportsEntryObject'), null, '')),
            r('PackageExportsEntryPackageExportsEntryObject'),
            null,
            ''
          )
        )
      },
      {
        json: 'default',
        js: 'default',
        typ: u(
          undefined,
          u(
            a(u(r('PackageExportsEntryPackageExportsEntryObject'), null, '')),
            r('PackageExportsEntryPackageExportsEntryObject'),
            null,
            ''
          )
        )
      },
      {
        json: 'import',
        js: 'import',
        typ: u(
          undefined,
          u(
            a(u(r('PackageExportsEntryPackageExportsEntryObject'), null, '')),
            r('PackageExportsEntryPackageExportsEntryObject'),
            null,
            ''
          )
        )
      },
      {
        json: 'node',
        js: 'node',
        typ: u(
          undefined,
          u(
            a(u(r('PackageExportsEntryPackageExportsEntryObject'), null, '')),
            r('PackageExportsEntryPackageExportsEntryObject'),
            null,
            ''
          )
        )
      },
      {
        json: 'require',
        js: 'require',
        typ: u(
          undefined,
          u(
            a(u(r('PackageExportsEntryPackageExportsEntryObject'), null, '')),
            r('PackageExportsEntryPackageExportsEntryObject'),
            null,
            ''
          )
        )
      }
    ],
    false
  ),
  FundingWay: o(
    [
      { json: 'type', js: 'type', typ: u(undefined, '') },
      { json: 'url', js: 'url', typ: '' }
    ],
    false
  ),
  License: o(
    [
      { json: 'type', js: 'type', typ: u(undefined, '') },
      { json: 'url', js: 'url', typ: u(undefined, '') }
    ],
    'any'
  ),
  PeerDependenciesMeta: o([{ json: 'optional', js: 'optional', typ: u(undefined, true) }], 'any'),
  PublishConfig: o(
    [
      { json: 'access', js: 'access', typ: u(undefined, r('Access')) },
      { json: 'registry', js: 'registry', typ: u(undefined, '') },
      { json: 'tag', js: 'tag', typ: u(undefined, '') }
    ],
    'any'
  ),
  RepositoryObject: o(
    [
      { json: 'directory', js: 'directory', typ: u(undefined, '') },
      { json: 'type', js: 'type', typ: u(undefined, '') },
      { json: 'url', js: 'url', typ: u(undefined, '') }
    ],
    'any'
  ),
  Scripts: o(
    [
      { json: 'install', js: 'install', typ: u(undefined, '') },
      { json: 'lint', js: 'lint', typ: u(undefined, '') },
      { json: 'postinstall', js: 'postinstall', typ: u(undefined, '') },
      { json: 'postpack', js: 'postpack', typ: u(undefined, '') },
      { json: 'postpublish', js: 'postpublish', typ: u(undefined, '') },
      { json: 'postrestart', js: 'postrestart', typ: u(undefined, '') },
      { json: 'poststart', js: 'poststart', typ: u(undefined, '') },
      { json: 'poststop', js: 'poststop', typ: u(undefined, '') },
      { json: 'posttest', js: 'posttest', typ: u(undefined, '') },
      { json: 'postuninstall', js: 'postuninstall', typ: u(undefined, '') },
      { json: 'postversion', js: 'postversion', typ: u(undefined, '') },
      { json: 'preinstall', js: 'preinstall', typ: u(undefined, '') },
      { json: 'prepack', js: 'prepack', typ: u(undefined, '') },
      { json: 'prepare', js: 'prepare', typ: u(undefined, '') },
      { json: 'prepublish', js: 'prepublish', typ: u(undefined, '') },
      { json: 'prepublishOnly', js: 'prepublishOnly', typ: u(undefined, '') },
      { json: 'prerestart', js: 'prerestart', typ: u(undefined, '') },
      { json: 'prestart', js: 'prestart', typ: u(undefined, '') },
      { json: 'prestop', js: 'prestop', typ: u(undefined, '') },
      { json: 'pretest', js: 'pretest', typ: u(undefined, '') },
      { json: 'preuninstall', js: 'preuninstall', typ: u(undefined, '') },
      { json: 'preversion', js: 'preversion', typ: u(undefined, '') },
      { json: 'publish', js: 'publish', typ: u(undefined, '') },
      { json: 'restart', js: 'restart', typ: u(undefined, '') },
      { json: 'serve', js: 'serve', typ: u(undefined, '') },
      { json: 'start', js: 'start', typ: u(undefined, '') },
      { json: 'stop', js: 'stop', typ: u(undefined, '') },
      { json: 'test', js: 'test', typ: u(undefined, '') },
      { json: 'uninstall', js: 'uninstall', typ: u(undefined, '') },
      { json: 'version', js: 'version', typ: u(undefined, '') }
    ],
    ''
  ),
  TypesVersion: o([{ json: '*', js: '*', typ: u(undefined, a('')) }], false),
  WorkspacesObject: o(
    [
      { json: 'nohoist', js: 'nohoist', typ: u(undefined, a('')) },
      { json: 'packages', js: 'packages', typ: u(undefined, a('')) }
    ],
    'any'
  ),
  PrivateEnum: ['false', 'true'],
  Access: ['public', 'restricted'],
  Type: ['commonjs', 'module']
}
