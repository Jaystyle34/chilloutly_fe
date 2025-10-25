"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function HomeFeatures(){
    const pathname = usePathname();
    
    return(
        <div className="flex bg-[#6F87F840]/100 py-[7px] px-[49px] rounded-[22px] gap-[36px]">
            <FeatureItem title="Home" selected={pathname==="/"}/>
            <FeatureItem title="About" selected={pathname==="/about"} href="/about"/>
            <FeatureItem title="Feature" selected={pathname==="/features"} href="/features"/>
            <FeatureItem title="FAQ" selected={pathname==="/faq"} href="/faq"/>
            <FeatureItem title="Help Center" selected={pathname==="/help-center"} href="/help-center"/>

        </div>
    );
}
function FeatureItem({title, selected= false, href ='/'}: {
    title: string,
    selected?: boolean,
    href?: string
}){
    return (<Link href={href}>
    <div className={`text-[14px] font-normal ${!selected? " text-white ":"text-[#84ECBF]"}`}>{title}</div>
    </Link>);
}
//#84ECBF