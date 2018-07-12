import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import FormPage from './components/pages/FormPage';
import DynamicRoutePage from './components/pages/DynamicRoutePage';
import NotFoundPage from './components/pages/NotFoundPage';
import PanelLeftPage from './components/pages/PanelLeftPage';
import PanelRightPage from './components/pages/PanelRightPage';
import CallPage from './components/pages/Call';
import DialpadPage from './components/pages/Dialpad';
import PresencesPage from './components/pages/Presences';
import ToolbarPage from './components/pages/ToolbarPage';
import ContactPage from './components/pages/ContactPage';
import HistoryPage from './components/pages/History';
import SessionsPage from './components/pages/Sessions';
import MessagePage from './components/pages/Message';
import ConferencePage from './components/pages/Conference';
import FavoritesPage from './components/pages/Favorites';
import SettingsPage from './components/pages/Settings';
import actionSheetPage from './components/pages/ActionSheet';
import loginScreen from './components/pages/LoginScreen';
export default [
  {
    path: '/',
    component: FavoritesPage,
  },
  {
    path: '/home/',
    component: HomePage,
  },  
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/presences/',
    component: PresencesPage,
  },    
  {
    path: '/call/',
    component: CallPage,
  }, 
  {
    path: '/dialpad/',
    component: DialpadPage,
  },   
  {
    path: '/toolbar/',
    component: ToolbarPage,
  },   
  {
    path: '/contact/',
    component: ContactPage,
  },
  {
    path: '/history/',
    component: HistoryPage,
  },  
  {
    path: '/sessions/',
    component: SessionsPage,
  },    
  {
    path: '/settings/',
    component: SettingsPage,
  },    
  {
    path: '/message/',
    component: MessagePage,
  },
  {
    path: '/favorites/',
    component: FavoritesPage,
  },    
  {
    path: '/conference/',
    component: ConferencePage,
  },    
  {
    path: '/actionsheet/',
    component: actionSheetPage,
  },
  {
    path: '/login/',
    component: loginScreen,
  },   
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
