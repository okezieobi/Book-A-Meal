import addOneMeal from '../controllers/addOneMealOption';
import router from './router';

router.post('/meals', addOneMeal);

export default router;
