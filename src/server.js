import { Application, Router} from "./deps.js";
import { applyGraphQL, gql, GQLError } from './deps.js';
import { PORT } from './config.ts';
const app = new Application();

const typeDefs = gql`
    type Mercadoria{
        codUn: String
        nomeUn: String
        vendaUn: Float
        custoUn: FLoat
        estoqueUn: Int
        codCj: String
        nomeCj: String
        VendaCj: Float 
        custoCj: Float
        estoqueCj: Int
        qtdPorCj: Int
        ST: Int
        compra: Float
        codForn: Int
        depart: String
        acesso: Int
    }

    type Query{
        mercadorias: [Mercadoria]
        Mercadoria: Mercadoria
    }
`;

const resolvers = {
    Query:{
        
    }
};

const GraphQLService = await applyGraphQL({
    path: '/graphql',
    typeDefs,
    resolvers
})

app.use(GraphQLService.routes(),
        GraphQLService.allowedMethods());
console.log('Server running int port ' + PORT);
await app.listen({ port: PORT })