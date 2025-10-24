export default function HomeFeatures(){
    return(
        <div className="flex bg-[#6F87F840]/100 py-[7px] px-[49px] rounded-[22px] gap-[36px]">
            <FeatureItem title="Home"/>
            <FeatureItem title="About"/>
            <FeatureItem title="Feature"/>
            <FeatureItem title="FAQ"/>
            <FeatureItem title="Help Center"/>

        </div>
    );
}
function FeatureItem({title}: {title: string}){
    return (<div className="text-[14px] font-normal text-white ">{title}</div>);
}