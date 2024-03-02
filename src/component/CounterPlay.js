
import {useState} from 'react';
 
function CounterPlay(props){

    let [num, setNum] = useState(0);

    let date = new Date();

    // console.log(date);

    let [hour,setHour] = useState(date.getHours());
    let [minute,setMin] = useState(date.getMinutes());
    let [second,setSecond] = useState(date.getSeconds());

    function addOne(){

        num++;
        setNum(num);
        // console.log(num);
    }

    function minusOne(){

        num--;
        setNum(num);
        // console.log(num);
    }
    
    function ResetCounter(){

        setNum(0);
    }

    function changeTime(){

        date = new Date();
        setHour(date.getHours());
        setMin(date.getMinutes());
        setSecond(date.getSeconds());

    }

    setInterval(changeTime,1000);

    return(

        <div class="flex flex-col justify-center items-center gap-2 font-extrabold ">

            <div onTimeUpdate={changeTime} class="flex flex-row justify-center items-center gap-2 font-extrabold ">

                <div>{hour}</div>
                <div>{minute}</div>
                <div>{second}</div>
            </div>
            
            <div class="flex flex-row justify-center items-center gap-2 font-extrabold ">

                <div onClick={addOne}>+</div>
                <hr/>
                <div>{num}</div>
                <hr/>
                <div onClick={minusOne}>-</div>

            </div>

            <button onClick={ResetCounter}>Reset!</button>

        </div>
    );
}


export default CounterPlay;