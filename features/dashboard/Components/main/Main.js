import React from "react";
import styles from "./Main.module.css"
function Main() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months=["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
    const d = new Date();
    let dayOfWeek= weekday[d.getDay()];
    let monthCurrent=months[d.getMonth()].slice(0,3)
    let day =d.getDate();
    let hourCurrent=d.getHours();
    var greetingText="";
    if (hourCurrent < 12) {
       greetingText='Good morning'
      } else if (hourCurrent < 18) {
       greetingText='Good afternoon'
      } else {
       greetingText='Good evening'
      }


    return (
        <React.Fragment>
            <div  className={styles.main} >
                <div className={styles.mainHeading}>
                    <p className={styles.greetingText}>{greetingText}</p>
                    <p className={styles.timeofDay}> It 's  {dayOfWeek},{monthCurrent} {day}</p>
                </div>
            </div>
        </React.Fragment>

    );
}

export default Main;