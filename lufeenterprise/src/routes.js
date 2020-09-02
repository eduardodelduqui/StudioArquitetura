import Home from '../src/views/Home.vue';
import Projetos from '../src/views/Projetos.vue';
import Contato from '../src/views/Contato.vue';
import Cadastro from '../src/views/Cadastro.vue';
import Item from '../src/views/Item.vue';
import Login from '../src/views/Login.vue';

import provedor from './provedor';


export const routes = [
    {path: '', name: 'home', component: Home, titulo: 'Home', menu: true, meta: {publica: true}},
    {path: '/projetos',name: 'projetos', component: Projetos, titulo: 'Projetos', menu: true, meta: {publica: true}},
    {path: '/contato',name: 'contato', component: Contato, titulo: 'Contato', menu: true, meta: {publica: true}},
    {path: '/equipe',name: 'contato', component: Contato, titulo: 'Equipe', menu: true, meta: {publica: true}},
    {path: '/cadastro',name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: false},
    {path: '/editar/:id', name: 'editar', component: Cadastro, titulo: 'Editar', menu: false},
    {path: '/projetos/:id', name: 'item', component: Item, titulo: 'Item', menu: false, meta: {publica: true}},
    {path: '/login', name: 'login', component: Login, titulo: 'Login', menu: false, meta: {publica: true}},
    {path: '*', component: Home, menu: false, meta: {publica: true}}
];




