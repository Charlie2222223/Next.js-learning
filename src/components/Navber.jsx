import { useStateProvider } from '@/context/StateContext';
import React, { useEffect, useState } from 'react'
import FiverrLogo from './FivierrLogo';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5'; 
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { GET_USER_INFO } from '@/utils/constants';

function Navber() {
    const handleLogin = ()=>{

    }

    const handleSignup = ()=>{

    }
    
    const handeleSignup = ()=>{};
    const router = useRouter();
    const [cookies] = useCookies();
    const [isloaded, setisloaded] = useState(true);
    const [isFixed, setFixed] = useState(false);
    const [serchData, setserchData] = useState("");
    const [{showLoginModel,showSigninupModel,userInfo,isSeller},dispatch] = useStateProvider();


    const links = [
        { linkName: "Fiverr Business", handler: "#", type: "link" },
        { linkName: "Explore", handler: "#", type: "link" },
        { linkName: "English", handler: "#", type: "link" },
        { linkName: "Become a Seller", handler: "#", type: "link" },
        { linkName: "Sign in", handler: handleLogin, type: "button" },
        { linkName: "Join", handler: handleSignup, type: "button2" },
    ];

    useEffect(()=> {
        if(cookies.jwt && !userInfo){
            const getUserInfo = async () => {
                try{
                    const {
                        data:{user},
                    } = await axios.post(GET_USER_INFO,{},{withCredentials:true})
                    let projecteduserInfo = {...user};
                }catch(err){
                    console.log(err)
                }
            }
        }
    },[cookies.userinfo]);
    return <>
        {isloaded && (
            <nav className={`top-0 z-30 flex items-center justify-between w-full px-24 py-6 transition-all duration-300 ${
                isFixed || userInfo
                 ? "fixed bg-white border-b border-gray-200" 
                    : "absolute bg-transparent border-transparent" 
                }`}
            >
          <div>
            <Link href="/">
              <FiverrLogo
                fillColor={!isFixed && userInfo ? "#ffffff" : "#404145"}
              />
            </Link>
          </div>
          <div 
            className={`flex ${isFixed || userInfo ? "opacity-100" : "opacity-0"
            }`}
            >
            <input 
                type='text' 
                className='w-[30rem] py-2.5 px-4 border' 
                value={serchData} 
                onChange={(e)=>setserchData(e.target.value)}
                placeholder='What service are you looking for today?'
            />
            <button className='bg-gray-900 py-1.5 text-white w-16 flex justify-center items-center'
                onClick={()=>{setserchData("")
                router.push(`/serch?q=${serchData}`)}}>
                <IoSearchOutline className='w-6 h-6 text-white fill-white' />
            </button>
            </div>
            {!userInfo ?(
                <ul className='flex items-center gap-10'>
                    {links.map(({linkName, handler, type}) =>{
                        return <li key={linkName} className={`${isFixed ? "text-base": "text-white"} font-medium`}>
                            {type==="link" && <Link href={handler}>{linkName}</Link>}
                            {type === "button" && (
                                <button onClick={handler}>{linkName}</button>
                            )}
                            {type === "button2" && (
                                <button onClick={handler} 
                                className={`border text-md font-semibold py-1 px-3 rounded-sm ${isFixed
                                    ? "border-[#1DBF73] text-[#1DBF73]"
                                    : "border-white text-white"
                                    } hover:bg-[#1DBF73] hover:text-white hover:border-[#1DBF73] transition-all duration-500`
                                } 
                            >
                                {linkName}</button>
                            )}

                        </li>
                    })}
                </ul>
            ) : (
                <ul></ul>
            )}
        </nav>
        )}
    </>
}

export default Navber;