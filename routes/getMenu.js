import getMenu from '../controllers/getMenu';
import router from './router';

router.get('/menus', getMenu);

export default router;
