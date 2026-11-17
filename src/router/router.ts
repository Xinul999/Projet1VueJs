import {createRouter, createWebHistory} from 'vue-router'


import MesProduitsHabituels from '../views/MesProduitsHabituels.vue'
import MaListeDuJour from '../views/MaListeDuJour.vue'
import ModifierMesProduitsHabituels from '../views/ModifierMesProduitsHabituels.vue'


const routes = [
    {
        path: '/',
        name: 'mes-produits-habituels',
        component: MesProduitsHabituels
    },
    {
        path: '/ma-liste-du-jour',
        name: 'ma-liste-du-jour',
        component: MaListeDuJour
    },
    {
        path: '/modifier-mes-produits-habituels',
        name: 'modifier-mes-produits-habituels',
        component: ModifierMesProduitsHabituels
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
});
