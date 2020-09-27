import { SayHelloQueryArgs, SayHelloResponse } from 'src/types/graph';

const resolvers = {
    Query: {
        sayHello: (_: any, args: SayHelloQueryArgs): SayHelloResponse => {
            return {
                error: false,
                text: `Hello ${args.name}`,
            };
        },
    },
};

export default resolvers;
