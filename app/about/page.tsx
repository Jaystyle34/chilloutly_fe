import BottomBar from "../components/BottomBar";
import GetTheApp from "../components/GetTheApp";

export default function Page(){
    return (<div className="h-full w-full bg-white">
        <div className="flex flex-col pt-[20px] gap-4  bg-no-repeat bg-fill bg-center bg-[#272F57]">
            <span className="text-white text-center py-[100px] font-normal md:font-semibold  text-[30px] md:text-[64px]">About Chilloutly</span>
        </div>

        <div className="flex flex-col bg-white items-center justify-center p-[20px]  sm:p-[133px] w-full gap-[80px] w-full bg-red-200">
            <GetTheApp/>
        </div>

        <BottomBar/>
    </div>)
}