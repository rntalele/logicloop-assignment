
import '../css/Card.css'
import { getFormattedDate,getRating } from '../utils/Format';
const Card = ({game})=>{


    return (
            <div className='card d-flex flex-row mb-2'>
                <div className="card-image"></div>
                <div className='card-body d-flex'>
                        <div>
                            <h4>{game.name}</h4>
                            <p>Release Date:{getFormattedDate(new Date(game.first_release_date))}</p>
                            <p>{game.summary}</p>
                        </div>
                </div>
                <div className='rating'>{getRating(game.rating)}</div>
            </div>
    )

}

export default Card;
