import makeOrder from '../controllers/makeOrder';
import router from './router';

router.post('/orders', makeOrder);

export default router;
