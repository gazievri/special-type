import './addReviewButton.sass'
import { useNavigate } from 'react-router-dom';

export const AddReviewButton = () => {
    const navigate = useNavigate();
    return(
        <button className='add-button' type="submit" onClick={() => navigate('/reviews/add-review')}>Добавить отзыв</button>
    )
}