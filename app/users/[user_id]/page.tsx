"use client"
import { useParams } from "next/navigation"

export default function User() {
    const params = useParams<{user_id:string}>()
    const u_id = params.user_id
    console.log(params)
return <>
        user {u_id}
    </>
}