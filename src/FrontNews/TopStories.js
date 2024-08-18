import React from "react";
import CollectedStories from "./CollectedStories";
import { Data } from "../CollectedData";
import './TopandCollectedStories.css';



export const TopStories =()=>{

    return (
        <>
        <div className="newsFrame">
        <div className="borderLine">
        <CollectedStories 
         {...Data[0]}
        />
        </div>
        <div className="borderLine">
        <CollectedStories 
         {...Data[1]} 
         />
         </div>
         <div className="borderLine">
         <CollectedStories 
         {...Data[2]} />
         </div>
         <div className="borderLine">
        <CollectedStories 
         {...Data[3]}
        />
        </div>
        <div className="borderLine">
        <CollectedStories 
         {...Data[4]} 
         />
         </div>
         <div className="borderLine">
         <CollectedStories 
         {...Data[5]} />
         </div>
         <div className="borderLine">
        <CollectedStories 
         {...Data[6]}
        />
        </div>
        <div className="borderLine">
        <CollectedStories 
         {...Data[7]} 
         />
         </div>
         <div className="borderLine">
         <CollectedStories 
         {...Data[8]} />
         </div>
         <div className="borderLine">
        <CollectedStories 
         {...Data[9]}
        />
        </div>
        <div className="borderLine">
        <CollectedStories 
         {...Data[10]} 
         />
         </div>
         <div className="borderLine">
         <CollectedStories 
         {...Data[11]} />
         </div>
         <div className="borderLine">
         <CollectedStories 
         {...Data[12]}
        />
        </div>
        <div className="borderLine">
        <CollectedStories 
         {...Data[13]} 
         />
         </div>
         <div className="borderLine">  
         <CollectedStories 
         {...Data[14]} />
         </div>
         <div className="borderLine">
        <CollectedStories 
         {...Data[15]}
        />
        </div>
        <div className="borderLine">
        <CollectedStories 
         {...Data[16]} 
         />
         </div>
         <div className="borderLine">
         <CollectedStories 
         {...Data[17]} />
         </div>
        </div>
        </>
    )
}