import deleteOneMeal from '../controllers/deleteOneMealOption';
import router from './router';

router.delete('/meals/:id', deleteOneMeal);

export default router;
