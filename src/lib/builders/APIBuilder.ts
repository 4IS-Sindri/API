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
