import { HeaderOnly } from '../components/Layouts';
import { Home, Test } from '../pages';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/test', component: Test, layout: HeaderOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
