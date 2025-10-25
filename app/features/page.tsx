import BottomBar from "../components/BottomBar";
import GetTheApp from "../components/GetTheApp";
import WhatCanYoudoWithChilloutly from "../components/WhatcanYouDoWithChilloutly";

export default function Page(){
    return (<div className="h-full w-full bg-white">
    
        <div className="flex flex-col items-center justify-center h-full  items-start justify-center">
            <WhatCanYoudoWithChilloutly/>
        </div>

       <div className="flex flex-col bg-white items-center justify-center p-[20px]  sm:p-[133px] w-full gap-[80px] w-full bg-red-200">
         <GetTheApp/>
       </div>

        <BottomBar/>
    </div>)
}