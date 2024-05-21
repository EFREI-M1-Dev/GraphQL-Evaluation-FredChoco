import {CodegenConfig} from '@graphql-codegen/cli'
import { Upload, FileUpload } from 'graphql-upload-ts';

const config: CodegenConfig = {
    schema: './src/schema.ts',
    generates: {
        './src/types.ts': {
            plugins: ["typescript", "typescript-resolvers", "typescript-operations"],
            config: {
                contextType: './context#DataSourceContext',
                scalars: {
                    DateTime: 'Date',
                    Upload: 'FileUpload',
                },
            }
        }
    }
}

export default config