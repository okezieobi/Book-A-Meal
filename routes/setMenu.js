import setMenu from '../controllers/setMenu';
import router from './router';

router.post('/menu', setMenu);

export default router;
