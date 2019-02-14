import updateOneMeal from '../controllers/updateOneMeal';
import router from './router';

router.put('/meals/<mealid>', updateOneMeal);

export default router;
