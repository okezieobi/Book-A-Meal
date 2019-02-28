import getMeals from '../controllers/getMeals';
import router from './router';

router.get('/meals', getMeals);

export default router;
