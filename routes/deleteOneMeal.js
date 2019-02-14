import deleteOneMeal from '../controllers/deleteOneMeal';
import router from './router';

router.delete('/meals/<mealid>', deleteOneMeal);

export default router;
