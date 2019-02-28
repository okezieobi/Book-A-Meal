import setMenu from '../controllers/setMenus';
import router from './router';

router.post('/menus', setMenu);

export default router;
