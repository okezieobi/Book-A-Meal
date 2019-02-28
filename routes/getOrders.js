import getOrders from '../controllers/getOrders';
import router from './router';

router.get('/orders', getOrders);

export default router;
