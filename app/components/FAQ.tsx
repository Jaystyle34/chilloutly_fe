"use client"
import Image from "next/image";

import { useState } from "react";

const questions = [
    {
        title: "How do I join or create an event?",
        answer: "Sign up, tap Create Event, add your details, and wait for admin approval. You can also explore events in your area or use a private code to join one."
    },
    {
        title: "How do private events work?",
        answer: "Sign up, tap Create Event, add your details, and wait for admin approval. You can also explore events in your area or use a private code to join one."
    },
    {
        title: "How and when are funds released?",
        answer: "Sign up, tap Create Event, add your details, and wait for admin approval. You can also explore events in your area or use a private code to join one."
    },
    {
        title: "Can the organizer collect the  money instead?",
        answer: "Sign up, tap Create Event, add your details, and wait for admin approval. You can also explore events in your area or use a private code to join one."
    },
    {
        title: "How does the app ensure the money is safe before the event?",
        answer: "Sign up, tap Create Event, add your details, and wait for admin approval. You can also explore events in your area or use a private code to join one."
    },
    {
        title: "Can I get a refund if any event does not happen?",
        answer: "Sign up, tap Create Event, add your details, and wait for admin approval. You can also explore events in your area or use a private code to join one."
    },
    {
        title: "Are events verified?",
        answer: "Sign up, tap Create Event, add your details, and wait for admin approval. You can also explore events in your area or use a private code to join one."
    },
    {
        title: "Is the app free?",
        answer: "Sign up, tap Create Event, add your details, and wait for admin approval. You can also explore events in your area or use a private code to join one."
    }
];
export default function FAQ(){
    return(<div className="flex flex-col gap-[14px] w-full">
        {
            questions.map((q)=><FAQItem key={q.title} title={q.title} answer= {q.answer}/>)
        }
    </div>)
}

function FAQItem({title, answer}:{
    title: string, 
    answer: string
}){
    const [open, setOpen] = useState(false);
    return(<div  onClick={()=> setOpen(!open)}
        className={`flex flex-col  py-[21px] px-[26px] rounded-[7px] gap-[18px] w-full ${open? "bg-[#09EDEB]/8":"bg-[#B9B9B91A]"}`} >
        <div className="flex items-center justify-between">
            <span className="text-black font-semibold text-[18px]">{title}</span>
            {
                !open? <Image
                src={`${ "/img/arrow-right-green.png"}`}
                alt="Image"
                height={24}
                width={20}
            />:<Image
                src={`${ "/img/arrow-down-green.png"}`}
                alt="Image"
                height={24}
                width={24}
            />
            }

        </div>
      {open &&  <span className="text-[#3A3A3A] font-normal text-[16px]">{answer}</span>}
    </div>)
}