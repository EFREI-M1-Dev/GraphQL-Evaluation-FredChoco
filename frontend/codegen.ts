import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'http://localhost:4000/graphql',
    documents: ['src/**/*.{ts,tsx}'],
    overwrite: true,
    generates: {
        './src/types/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            },
            config: {
                scalars: {
                    Date: 'DateTime',
                    Upload: 'FileUpload'
                },
                avoidOptionals: true
            }
        }
    },
    ignoreNoDocuments: true,
};

export default config;