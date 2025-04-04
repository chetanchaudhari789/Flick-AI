"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { signIn, signOut, useSession } from "next-auth/react"
import { CgMenuGridR } from "react-icons/cg";
import UsageCount from "./UsageCount"
import Link from "next/link";


export default function Profile() {
    const { data: session } = useSession()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:border-none focus:outline-none">
                {
                    session?.user ? (
                        <Avatar className="max-sm:w-6 max-sm:h-6">
                            <AvatarImage src="/p8.png" alt="profile" />
                            <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                    ) : <CgMenuGridR className="w-5 h-5 hover:scale-110 transition-all duration-300" />
                }
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit">
                <DropdownMenuLabel><UsageCount /></DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    session?.user ? (
                        <>
                            <Link href='/history'>
                                <DropdownMenuItem>
                                    History
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
                        </>
                    ) : <DropdownMenuItem onClick={() => signIn('google')}>SignIn</DropdownMenuItem>
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}