import getAllOrders from '../controllers/getAllOrders';
import router from './router';

router.get('/orders', getAllOrders);

export default router;
