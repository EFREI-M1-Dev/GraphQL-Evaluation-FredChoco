import { GraphQLSchema } from 'graphql';
import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils';
import { defaultFieldResolver } from 'graphql';

const authDirective = () => {
    return {
        authDirectiveTypeDefs: 'directive @auth on FIELD_DEFINITION',
        authDirectiveTransformer: (schema: GraphQLSchema) =>
            mapSchema(schema, {
                [MapperKind.OBJECT_FIELD](fieldConfig) {
                    const authDirective = getDirective(schema, fieldConfig, 'auth')?.[0];

                    if (authDirective) {
                        const { resolve = defaultFieldResolver } = fieldConfig;

                        fieldConfig.resolve = async function (source, args, context, info) {
                            if (!context.user) {
                                throw new Error('Not authenticated');
                            }

                            return resolve(source, args, context, info);
                        };
                    }

                    return fieldConfig;
                }
            })
    };
}
export default authDirective;