import BottomBar from "../components/BottomBar";
import FAQ from "../components/FAQ";
import GetTheApp from "../components/GetTheApp";

export default function Page(){
    return (<div className="bg-white flex flex-col">
        <div className="flex flex-col  gap-4 bg-no-repeat bg-fill bg-center bg-[#272F57] bg-[url('/img/bg.svg')] w-full">
            <div className="flex items-center justify-center bg-[#0C1332]/90 backdrop-blur-[2px] ">
                <span className="text-white text-center py-[100px] font-normal md:font-semibold  text-[30px] md:text-[64px]">Frequently Asked Questions</span>
            </div>
        </div>
         <div className="flex flex-col bg-white items-center justify-center p-[20px]  sm:p-[133px] w-full gap-[80px] w-full bg-red-200">
            <span className="text-center text-[#3A3A3A] font-normal text-[18px]">Save, invest, borrow, and grow on one trusted platform, built for your financial success.</span>
            <FAQ/>
            <GetTheApp/>
        </div>
        
        <BottomBar/>
    </div>)
}