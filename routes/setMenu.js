import setMenu from '../controllers/setMenu';
import router from './router';

router.post('/menus', setMenu);

export default router;
