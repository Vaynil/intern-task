import Vue from 'vue'
import Router from 'vue-router'
import Naslovna from '@/components/Naslovna'
import Anketa from '@/components/Anketa'
import DobivenoVino from '@/components/DobivenoVino'
import Dostava from '@/components/Dostava'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/naslovna',
            name: 'Naslovna',
            component: Naslovna
        },
        {
            path: '/anketa',
            name: 'Anketa',
            component: Anketa
        },
        {
            path: '/dobivenoVino',
            name: 'DobivenoVino',
            component: DobivenoVino
        },
        {
            path: '/dostava',
            name: 'Dostava',
            component: Dostava
        }
    ]
})