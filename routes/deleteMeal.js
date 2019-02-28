import deleteMeal from '../controllers/deleteMeal';
import router from './router';

router.delete('/meals/:id', deleteMeal);

export default router;
