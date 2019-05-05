import Vue from 'vue'
import Router from 'vue-router'
import AdminDashboard from '../admin/views/AdminDashboard'
import AdminTables from '../admin/views/AdminTables'
import Hello from '../views/Hello'
import ComicsTable from '../admin/views/ComicsTable'
import AuthorsTable from '../admin/views/AuthorsTable'
import SeriesTable from '../admin/views/SeriesTable'
import PublishersTable from '../admin/views/PublishersTable'
Vue.use(Router)
export default new Router({
    mode: 'history',
  routes: [
    {
        path: '/admin',
        name: 'admin',
        component: AdminDashboard
    },
    {
        path: '/hello',
        name: 'hello',
        component: Hello,
    },
    {
        path: '/admin/tables',
        name: 'adminTables',
        component: AdminTables
    },
        
            {
                path: '/admin/tables/comics',
                name: 'comics',
                component: ComicsTable,
            },
            {
                path: '/authors',
                name: 'authors',
                component: AuthorsTable
            },
            {
                path: '/series',
                component: SeriesTable
            },
            {
                path: '/publisher',
                component: PublishersTable
            }
        
    

]
})