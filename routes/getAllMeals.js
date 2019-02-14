import getAllMeals from '../controllers/getAllMeals';
import router from './router';

router.get('/meals', getAllMeals);

export default router;
