import BottomBar from "../components/BottomBar";
import FAQ from "../components/FAQ";
import GetTheApp from "../components/GetTheApp";

export default function Page(){
    return (<div className="bg-white flex flex-col">
         <div className="flex flex-col bg-white items-center justify-center p-[20px]  sm:p-[133px] w-full gap-[80px] w-full bg-red-200">
            <span className="text-center text-[#3A3A3A] font-normal text-[18px]">Save, invest, borrow, and grow on one trusted platform, built for your financial success.</span>
            <FAQ/>
            <GetTheApp/>
        </div>
        
        <BottomBar/>
    </div>)
}