    import React from 'react'
    import { redirect } from 'react-router'

    export async function action({params}){
        await fetch(`http://localhost:3000/blogs/${params.id}`,{
            method:"DELETE"
        })
        return redirect("/blog")
    }