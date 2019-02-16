import updateOneOrder from '../controllers/updateOneOrder';
import router from './router';

router.get('/orders/:id', updateOneOrder);

export default router;
