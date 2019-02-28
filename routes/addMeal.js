import addMeal from '../controllers/addMeal';
import router from './router';

router.post('/meals', addMeal);

export default router;
