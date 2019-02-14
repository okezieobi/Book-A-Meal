import updateOneMeal from '../controllers/updateOneMealOption';
import router from './router';

router.put('/meals/<mealid>', updateOneMeal);

export default router;
