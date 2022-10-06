import { Link } from 'react-router-dom';

function CalculatorsMenu(props) {

    return(
        <section className="main__content main_type_calculators" id="calculators">
            <h2 className="main__title">מחשבוני כושר ובריאות</h2>
            <pre className="main__description">
                תיאור על המחשבונים.
            </pre>
            <ul className="main__menu-list">
                <li className="main__menu-item">
                    <Link to="/">
                        <button type="button" className="main__menu-button main__menu-button_type_main" id="main">עמוד ראשי</button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`/${props.id}/hr-targets-calculate`}>
                        <button type="button" className="main__menu-button main__menu-button_type_hrTargetCalculate" id="hrTargetsCalculate">חישוב דופק מטרה לאימון</button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`/${props.id}/vo2max-cooper-calculate`}>
                        <button type="button" className="main__menu-button main__menu-button_type_vo2maxCooperCalculate" id="vo2maxCooperCalculate">חישוב צח"מ (לפי מבחן שדה)</button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`/${props.id}/vo2max-by-hr-calculate`}>
                        <button type="button" className="main__menu-button main__menu-button_type_vo2maxHrCalculate" id="vo2maxHrCalculate">חישוב צח"מ (לפי דופק)</button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`/${props.id}/fat-percentage-skinfold-calculate`}>
                        <button type="button" className="main__menu-button main__menu-button_type_fatPercentageSkinfoldCalculate" id="fatPercentageSkinfoldCalculate">חישוב אחוז שומן (לפי קפלי עור)</button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`/${props.id}/fat-percentage-calculate`}>
                        <button type="button" className="main__menu-button main__menu-button_type_fatPercentageCalculate" id="fatPercentageCalculate">חישוב אחוז שומן (לפי היקפים)</button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`/${props.id}/bmi-calculate`}>
                        <button type="button" className="main__menu-button main__menu-button_type_bmiCalculate" id="bmiCalculate">חישוב יחס מסת גוף (BMI)</button>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default CalculatorsMenu;