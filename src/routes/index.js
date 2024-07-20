import { FooterOnly, HeaderOnly } from '../components/Layouts';
import { Home, HomePage, Login, Register, Test } from '../pages';
import { isAuthenticated } from '../services/authService';
let CompHomePage, LayoutHomePage;
if (isAuthenticated()) {
    CompHomePage = HomePage;
    LayoutHomePage = HeaderOnly;
} else {
    CompHomePage = Home;
    LayoutHomePage = FooterOnly;
}
const publicRoutes = [
    { path: '/', component: CompHomePage, layout: LayoutHomePage },
    { path: '/login', component: Login, layout: FooterOnly },
    { path: '/register', component: Register, layout: FooterOnly },
    { path: '/test', component: Test, layout: FooterOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };

// path / có 2 layout footer only và default layout(tạm thời để HeaderOnly)

// chưa đăng nhập thì pages Home, layout footerOnlym. đăng nhập thì pages HomePage, layout HeaderOnly
