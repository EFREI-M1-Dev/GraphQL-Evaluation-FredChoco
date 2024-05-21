import {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: './src/schema.ts',
    generates: {
        './src/types.ts': {
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                contextType: './context#DataSourceContext',
                scalars: {
                    Date: 'DateTime',
                    Upload: 'File'
                }
            }
        }
    }
}

export default config