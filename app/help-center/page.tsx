import BottomBar from "../components/BottomBar";
import FAQ from "../components/FAQ";
import GetTheApp from "../components/GetTheApp";

export default function Page(){
    return (<div className="bg-white flex flex-col">
         <div className="flex flex-col bg-white items-center justify-center p-[20px]  sm:p-[133px] w-full gap-[80px] w-full bg-red-200">
            
            <GetTheApp/>
        </div>
        
        <BottomBar/>
    </div>)
}