import Home from '../src/components/home/Home.vue';
import Projetos from '../src/components/projetos/Projetos.vue';
import Contato from '../src/components/contato/Contato.vue';

export const routes =[
    {path: '/',component: Home, titulo: 'HOME'},
    {path: '/projetos',component: Projetos, titulo: 'PROJETOS'},
    {path: '/contato',component: Contato, titulo: 'CONTATO'}
]



