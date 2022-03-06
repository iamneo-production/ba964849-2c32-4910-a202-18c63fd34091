import Dates from './Dates';
import { useState } from 'react';
import Slots from './Slots';
import styles from './AvailableSlots.module.css';
function AvailableSlots(props){
  const slots = [
    {
        "slotId": 184,
        "date": "2022-03-07",
        "ten": true,
        "eleven": true,
        "twelve": true,
        "thirteen": true,
        "fourteen": true,
        "fifteen": true,
        "sixteen": true,
        "seventeen": true,
        "eighteen": true
    },
    {
        "slotId": 185,
        "date": "2022-03-08",
        "ten": true,
        "eleven": true,
        "twelve": true,
        "thirteen": true,
        "fourteen": false,
        "fifteen": true,
        "sixteen": true,
        "seventeen": true,
        "eighteen": false
    },
    {
        "slotId": 186,
        "date": "2022-03-09",
        "ten": true,
        "eleven": false,
        "twelve": true,
        "thirteen": false,
        "fourteen": true,
        "fifteen": true,
        "sixteen": true,
        "seventeen": false,
        "eighteen": true
    },
    {
        "slotId": 187,
        "date": "2022-03-10",
        "ten": true,
        "eleven": true,
        "twelve": false,
        "thirteen": true,
        "fourteen": true,
        "fifteen": true,
        "sixteen": false,
        "seventeen": true,
        "eighteen": true
    },
    {
        "slotId": 188,
        "date": "2022-03-11",
        "ten": true,
        "eleven": false,
        "twelve": true,
        "thirteen": true,
        "fourteen": true,
        "fifteen": false,
        "sixteen": true,
        "seventeen": true,
        "eighteen": true
    },
    {
        "slotId": 189,
        "date": "2022-03-12",
        "ten": true,
        "eleven": true,
        "twelve": true,
        "thirteen": false,
        "fourteen": true,
        "fifteen": true,
        "sixteen": true,
        "seventeen": true,
        "eighteen": true
    },
    {
        "slotId": 190,
        "date": "2022-03-13",
        "ten": true,
        "eleven": true,
        "twelve": true,
        "thirteen": true,
        "fourteen": false,
        "fifteen": true,
        "sixteen": true,
        "seventeen": true,
        "eighteen": true
    }];

    const [slotList,setSlotList] = useState([...slots.map(slot=>{
      return {...slot,selected:false}
    })]);

    console.log("slot list: ", slotList);

    const [showSlots,setShowSlots] = useState(false);
    const [slotData,setSlotData] = useState({});
    const [selectedTime, setSelectedTime] = useState({});

    const handleDateClick = (slotData,index) =>{
      setSlotData(slotData);
      setShowSlots(true);
      let tempSlotList = slotList.map((item)=>{
        item.selected = false;
        return item;
      })
      tempSlotList[index].selected = true;
      setSlotList(tempSlotList);
    }

    const handleOnClickNext = ()=>{
      let selectedDate = slotList.filter(item=>{
        return item.selected == true;
      });

      console.log(selectedDate, selectedTime);

      alert("Selected Date: "+selectedDate[0].date+"\nSelected Time: "+selectedTime.time);
    }

  return (
    <div className={styles.main}>
      <div className={styles.Dates}>
      {
        slotList.map((item,index)=>{
          return <Dates date={item.date} slotData={item}  key={item.slotId} index={index} handleDateClick={handleDateClick}/>
        })
      }
      </div>
      <div className={styles.slots}>
        {showSlots && <Slots slotData={slotData} setSelectedTime={setSelectedTime}/>}
      </div>
      <button className={styles.button} onClick={()=>handleOnClickNext()}>Next</button>
    </div>
  )
}

export default AvailableSlots;
