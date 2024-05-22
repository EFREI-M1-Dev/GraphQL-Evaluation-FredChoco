import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'http://localhost:5009/graphql',
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
                    DateTime: 'Date',
                    Upload: 'File'
                },
                avoidOptionals: true
            }
        }
    },
    ignoreNoDocuments: true,
};

export default config;