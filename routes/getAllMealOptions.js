import getAllMeals from '../controllers/getAllMealOptions';
import router from './router';

router.get('/meals', getAllMeals);

export default router;
