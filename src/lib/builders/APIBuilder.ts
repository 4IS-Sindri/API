/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			⸺ Sindri
 * Project Version	⸺ 1.0.0
 * Project Desc.		⸺ An API for easily generating a new project or individual components.
 * Author						⸺ Devin W. Leaman (4lch4)
 * Company					⸺ 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				⸺ /src/lib/builders/API.ts
 * File Created			⸺ 2022-06-17 @ 07:15:08-05:00
 * Last Modified		⸺ 2022-06-20 @ 13:23:04-05:00
 * Modified By			⸺ Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License      ⸺ https://www.opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */

import { BaseBuilder } from '../bases/index.js'

// interface IFile {
//   path: string
//   content: string[]
// }

// interface IFileMap {
//   [key: string]: IFile
// }

// const Files: IFileMap = {
//   dockerignore: {
//     path: '.dockerignore',
//     content: []
//   },
//   dotenv: {
//     path: '.env',
//     content: []
//   },
//   dotenvTemplate: {
//     path: '.env.template',
//     content: []
//   }
// }

// const files = [
//   '.dockerignore',
//   '.env',
//   '.env.template',
//   '.gitignore',
//   '.npmrc',
//   '.nvmrc',
//   '.prettierignore',
//   '.prettierrc',
//   'Dockerfile',
//   'LICENSE',
//   'Makefile',
//   'package.json',
//   'README.md',
//   'start.sh',
//   'start.template.sh',
//   'tsconfig.json',
//   'src/index.ts',
//   'src/lib/index.ts',
//   'src/lib/bases/index.ts',
//   'src/lib/bases/BaseRoute.ts',
//   'src/interfaces/index.ts',
//   'src/routes/index.ts'
// ]

/** A utility class for building a new API project. */
export class APIBuilder extends BaseBuilder {
  async build(): Promise<void> {
    throw new Error('APIBuilder#build() not yet implemented')
  }
}
