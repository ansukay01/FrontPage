import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "../CollectedData";

export const NewsDetails=()=>{
    const {id}=useParams();

    //Find the data with the given ID
    const storage = Data.find((x)=>x.id === Number(id));

    //If the data doesn't exist, return an error
    if(!storage){
        return<div>The requested data doesn't exist in our database</div>
    }

    //If the data exists, render 
    const {Image, Header} = storage;


    return (
        <div className="newspage">
        <h3 className="detailsFont">{Header}</h3>
        <img src={Image} className="imageDetails" alt={Header} />
        <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Mauris ultrices eros in cursus. Nulla facilisi cras fermentum odio eu. At elementum eu facilisis sed. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Duis ultricies lacus sed turpis tincidunt. Iaculis urna id volutpat lacus. Senectus et netus et malesuada fames ac turpis egestas. Dignissim cras tincidunt lobortis feugiat vivamus at. Leo vel fringilla est ullamcorper eget nulla. Donec ac odio tempor orci dapibus. Non arcu risus quis varius quam quisque. Feugiat in fermentum posuere urna nec tincidunt praesent. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Id leo in vitae turpis. At varius vel pharetra vel turpis nunc eget lorem dolor.

Tellus integer feugiat scelerisque varius morbi enim nunc. Velit dignissim sodales ut eu sem. Sed viverra tellus in hac habitasse. Laoreet id donec ultrices tincidunt arcu non sodales. Elit pellentesque habitant morbi tristique senectus et. Ligula ullamcorper malesuada proin libero nunc consequat. Sollicitudin tempor id eu nisl nunc. Congue nisi vitae suscipit tellus mauris a diam. Nunc vel risus commodo viverra maecenas. Purus sit amet volutpat consequat. Sit amet purus gravida quis blandit. Vestibulum lorem sed risus ultricies tristique. Massa enim nec dui nunc mattis enim ut tellus. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Nibh cras pulvinar mattis nunc sed blandit. Quis commodo odio aenean sed adipiscing diam. Aliquet lectus proin nibh nisl.

At consectetur lorem donec massa sapien faucibus et molestie. Leo duis ut diam quam nulla. Tortor dignissim convallis aenean et tortor at risus viverra. Vitae turpis massa sed elementum. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Aenean et tortor at risus viverra adipiscing at. Neque egestas congue quisque egestas diam in arcu cursus. Lacus suspendisse faucibus interdum posuere lorem. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Accumsan tortor posuere ac ut consequat semper viverra. Felis eget nunc lobortis mattis. Enim lobortis scelerisque fermentum dui. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Id diam vel quam elementum. Turpis egestas sed tempus urna et pharetra. Duis at tellus at urna condimentum. Quam viverra orci sagittis eu volutpat odio facilisis. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. At in tellus integer feugiat scelerisque varius morbi. Faucibus vitae aliquet nec ullamcorper sit amet risus.

Amet purus gravida quis blandit turpis cursus. Lorem sed risus ultricies tristique nulla aliquet. Sollicitudin nibh sit amet commodo. Accumsan tortor posuere ac ut consequat. Eget magna fermentum iaculis eu non. Enim diam vulputate ut pharetra sit amet aliquam id. Semper viverra nam libero justo laoreet sit amet. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Justo donec enim diam vulputate. Egestas sed tempus urna et. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Et netus et malesuada fames ac turpis egestas. Lacinia at quis risus sed vulputate. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin.
    </p>
 </div>
    );
}

