'use client'
import isAuthorized from "@/lib/isAuthorized";
import React, { useEffect, useState } from "react";

export const useUser = () => {
    const [email,setEmail] = React.useState(null);
    const [loading,setLoading] = React.useState(true);
    useEffect(()=> {
        const fetchUser = async ()=> {
            const user = await isAuthorized();
            setEmail(user.email);
            setLoading(false)
        }
        fetchUser();
    },[])
    return {email,loading}
}