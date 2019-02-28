import updateMeal from '../controllers/updateMeal';
import router from './router';

router.put('/meals/:id', updateMeal);

export default router;
