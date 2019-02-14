import updateOneOrder from '../controllers/updateOneOrder';
import router from './router';

router.get('/orders/<orderid>', updateOneOrder);

export default router;
