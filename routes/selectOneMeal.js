import selectOneMeal from '../controllers/selectOneMeal';
import router from './router';

router.get('/orders', selectOneMeal);

export default router;
