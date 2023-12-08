'use server';
import axios from "axios";
import { Profile } from "./definitions";
import { unstable_noStore } from "next/cache";

export async function fetchRandomUserApi(n:number){
    unstable_noStore();

    const url = 'https://randomuser.me/api/?nat=us&results='+n;
    // const url = 'https://randomuser.me/api/?seed=Arasaka&nat=us&results='+n;
    // const url = 'https://randomuser.me/api/?results='+n;
    try{
        const res = await axios.get(url);
        // console.log(JSON.stringify(res.data));
        const output:Profile[] = [];
        res.data.results.map((profile:any) =>{
            let temp:Profile = {
                "fName": profile.name.first,
                "lName": profile.name.last,
                "imgUrl": profile.picture.large
            }
            output.push(temp);
        })
        // console.log(output);
        return output;
    }catch(e){
        console.error(e);
    }
}