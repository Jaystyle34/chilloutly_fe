export default function HomeFeatures(){
    return(
        <div>
            <FeatureItem title="Home"/>

        </div>
    );
}
function FeatureItem({title}: {title: string}){
    return (<div>{title}</div>);
}