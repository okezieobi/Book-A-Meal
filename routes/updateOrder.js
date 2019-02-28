import updateOrder from '../controllers/updateOrder';
import router from './router';

router.put('/orders/:id', updateOrder);

export default router;
