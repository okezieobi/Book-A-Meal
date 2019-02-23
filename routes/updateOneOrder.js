import updateOneOrder from '../controllers/updateOneOrder';
import router from './router';

router.put('/orders/:id', updateOneOrder);

export default router;
