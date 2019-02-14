import getMenu from '../controllers/getMenu';
import router from './router';

router.get('/menu', getMenu);

export default router;
