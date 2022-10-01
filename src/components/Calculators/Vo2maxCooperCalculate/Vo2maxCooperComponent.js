import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Vo2maxCooperCalculate from './vo2maxCooperCalculate';

function Vo2maxCooperComponent(props) {

    const [showData, setShowData] = useState(false);
    const [gender, setGender] = useState("male");
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [distance, setDistance] = useState(0);
    const [vo2maxResult, setVo2maxResult] = useState(0);
    
    function calculateAndShowData(e) {
        e.preventDefault();
        if (weight > 0 && distance > 0) {
            setShowData(true);
        } else {
            setShowData(false);
        }
    }

    useEffect(() => {
        if (weight > 0 && distance > 0) {
            const vo2maxCooperCalculateInastance = new Vo2maxCooperCalculate(distance, weight, gender, age);
            setVo2maxResult(vo2maxCooperCalculateInastance.compute());
        } else {
            setShowData(false);
        }
    }, [distance, weight, gender, age]);

    return(
        <div className="main__content calculators" id="vo2maxCooperTest">
        
            <div className="BackToMenu_div">
                <Link to="/calculators">
                    <button className="main__back-to-menu_button">חזרה</button>
                </Link>
            </div>

            <h2 className='calculator__title'>חישוב צריכת חמצן מירבית לפי מבחן קופר</h2> 
            <form className='calculator__form' onSubmit={calculateAndShowData}>
                <fieldset className='calculator__form__data'>
                <label>מין:</label>
                    <select 
                    className='calculator__form__input' 
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    >
                    <option className="calculator__form__input-option" type="radio" id="gender-male" name="gender_hrTargets" value="male">זכר</option>
                    <option className="calculator__form__input-option" type="radio" id="gender-female" name="gender_hrTargets" value="female">נקבה</option>
                    </select>
                </fieldset>

                <fieldset className='calculator__form__data'>
                <label>גיל (בשנים):</label>
                    <input 
                    className='calculator__form__input' 
                    type="number" 
                    id="age" 
                    placeholder="0" 
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    />
                </fieldset>
                
                <fieldset className='calculator__form__data'>
                <label>משקל (בק"ג):</label>
                    <input 
                    className='calculator__form__input' 
                    type="number" 
                    id="weight" 
                    placeholder="0" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    />
                </fieldset>
                
                <fieldset className='calculator__form__data'>
                <label>מרחק ריצה ב-12 דקות (במטרים):</label>
                    <input
                    className='calculator__form__input' 
                    type="number" 
                    id="hrTargetsRest" 
                    placeholder="0" 
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    />
                </fieldset>

                <button className='calculator__form__submit-button' type='submit'>חשב</button>

                <fieldset  className="calculator__form__result">
                {
                    showData ? 
                        <p>תוצאה: {vo2maxResult[0]} מ"ל לדקה לק"ג גוף.<br />{vo2maxResult[1]} ליטר חמצן לדקה עבור גוף במשקל {weight} ק"ג.</p>
                    :
                        <p>אנא וודא למלא את כל הפרטים ביחידות מידה הנדרשות. הנתונים צריכים להיות מספרים שלמים וגדולים מאפס.</p>
                }
                
                </fieldset>
            </form>
        </div>
    )
}

export default Vo2maxCooperComponent;