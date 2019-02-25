import selectOneMeal from '../controllers/selectOneMeal';
import router from './router';

router.post('/orders', selectOneMeal);

export default router;
