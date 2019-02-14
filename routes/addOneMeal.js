import addOneMeal from '../controllers/addOneMeal';
import router from './router';

router.post('meals', addOneMeal);

export default router;
