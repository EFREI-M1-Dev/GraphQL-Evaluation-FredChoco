import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'http://localhost:4000/graphql',
    documents: ['src/**/*.{ts,tsx}'],
    generates: {
        './src/types/': {
            preset: 'client',
            plugins: ["typescript", "typescript-resolvers"],
            presetConfig: {
                gqlTagName: 'gql',
            },
            config: {
                scalars: {
                    Date: 'string',
                    Upload: 'File'
                }
            }
        }
    },
    ignoreNoDocuments: true,
};

export default config;