// import React, { useEffect, useState } from 'react'

// const timer = () => {

//         const [sec, setSec] = useState(0);
//         const [min,setMin] = useState(0);
//         const [hour,setHour] = useState(0);
//         const [day,setDay] = useState(0);

//         useEffect (()=>{
//             const interConn = setInterval(()=>{
//                 setSec(prevSec => prevSec +1);
//                 if(sec == 9){
//                     setSec(0);
//                     setMin(prevMin => prevMin + 1);
//                 }
//                 if(min >= 59){
//                     setMin(0);
//                     setHour(prevHour => prevHour + 1);
//                 }
//                 if(hour >= 23){
//                     setHour(0);
//                     setDay(prevDay => prevDay + 1);
//                 }
//             },1000)

//             return ()=>{
//                 clearInterval(interConn);
//             };
//         },[]);

//     return (
//         <div>
//             <h1>{day}:{hour}:{min}:{sec}</h1>
//         </div>
//     );
// };

// export default timer

import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);
    const [day, setDay] = useState(0);

    useEffect(() => {
        const interConn = setInterval(() => {
            setSec(prevSec => {
                if (prevSec === 59) {
                    setMin(prevMin => {
                        if (prevMin === 59) {
                            setHour(prevHour => {
                                if (prevHour === 23) {
                                    setDay(prevDay => prevDay + 1);
                                    return 0;
                                }
                                return prevHour + 1;
                            });
                            return 0;
                        }
                        return prevMin + 1;
                    });
                    return 0;
                }
                return prevSec + 1;
            });
        }, 1000);

        return () => {
            clearInterval(interConn);
        };
    }, []);

    return (
        <div>
            <h1>
                {String(day).padStart(2, '0')}:
                {String(hour).padStart(2, '0')}:
                {String(min).padStart(2, '0')}:
                {String(sec).padStart(2, '0')}
            </h1>
        </div>
    );
};

export default Timer;
