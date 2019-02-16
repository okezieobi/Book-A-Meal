import updateOneMeal from '../controllers/updateOneMealOption';
import router from './router';

router.put('/meals/:id', updateOneMeal);

export default router;
