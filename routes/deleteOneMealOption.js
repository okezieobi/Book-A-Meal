import deleteOneMeal from '../controllers/deleteOneMealOption';
import router from './router';

router.delete('/meals/<mealid>', deleteOneMeal);

export default router;
