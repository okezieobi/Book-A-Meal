import getMenus from '../controllers/getMenus';
import router from './router';

router.get('/menus', getMenus);

export default router;
