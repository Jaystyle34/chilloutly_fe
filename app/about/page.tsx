import BottomBar from "../components/BottomBar";
import GetTheApp from "../components/GetTheApp";

export default function Page(){
    return (<div className="h-full w-full bg-white">
        <div className="flex flex-col  gap-4 bg-no-repeat bg-fill bg-center bg-[#272F57] bg-[url('/img/bg.svg')] w-full">
            <div className="flex items-center justify-center bg-[#0C1332]/90 backdrop-blur-[2px] ">
                <span className="text-white text-center py-[100px] font-normal md:font-semibold  text-[30px] md:text-[64px]">About Chilloutly</span>
            </div>
        </div>

        <div className="flex flex-col bg-white items-center justify-center p-[20px]  sm:p-[133px] w-full gap-[80px] w-full bg-red-200">
            <GetTheApp/>
        </div>

        <BottomBar/>
    </div>)
}