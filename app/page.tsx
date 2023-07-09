import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

// img

import { currentUser } from '@clerk/nextjs';


import logo3 from "../assets/img/notes2.png"
import discordLogo from "../assets/img/discord.svg"
import githubLogo from "../assets/img/github.svg"
import Image from "next/image";
import {Button} from "../components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {Activity, CalendarDays, Megaphone, Terminal, User, UserCircle2} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "../components/ui/avatar";
import {ClerkProvider, SignIn, SignInButton, UserButton} from "@clerk/nextjs";
import Link from 'next/link'


export default async function Home() {

    const user = await currentUser();


  return (
    <main className="flex min-h-screen flex-col bg-white items-center justify-start p-8">
        <Alert className={"mb-8"}>
            <Megaphone className="h-4 w-4"/>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                Thank you kindly for your understanding as we work on developing Notes. Please be aware that certain features may not function as expected during this process.
            </AlertDescription>
        </Alert>
        <div className={"flex flex-row justify-between w-full h-fit px-8 z-10"}>
            <a href={"/"} className="flex flex-row items-center text-[1.2vw] mt-0 pt-0 font-extrabold text-[#222] text-center" style={
                {
                    letterSpacing: "-1px"
                }
            } >
                    <Image src={logo3} alt="Notes Logo" width={35} height={35} className={"mr-2"} />
                    Notes
            </a>


            <div className={"flex flex-row"}>

                <div className={"flex flex-row justify-between mr-8"}>
                    <HoverCard >
                        <HoverCardTrigger href={"https://github.com"} target={"_blank"} className={"flex items-center justify-center"}>
                            <Image src={githubLogo} alt="Github Logo" width={18} height={18} className={"mx-2"}/>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <div className="flex justify-between space-x-4">
                                <Avatar>
                                    <AvatarImage src={githubLogo} />
                                    <AvatarFallback>GH</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">@github</h4>
                                    <p className="text-sm">
                                        Please feel free to have a look at the Notes source code on Github.
                                    </p>
                                    <div className="flex items-center pt-2">
                                        <Activity className="mr-2 h-4 w-4 opacity-70" />{" "}
                                        <span className="text-xs text-muted-foreground">
                Maintained by the Notes team
              </span>
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard >
                        <HoverCardTrigger href={"https://discord.gg/nrcTd8UWA4"} target={"_blank"} className={"flex items-center justify-center"}>
                            <Image src={discordLogo} alt="Discord Logo" width={18} height={18} className={"mx-2"}/>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <div className="flex justify-between space-x-4">
                                <Avatar>
                                    <AvatarImage src={discordLogo} />
                                    <AvatarFallback>DC</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">@discord</h4>
                                    <p className="text-sm">
                                        Gathering spot for delightful conversations with the Notes community.
                                    </p>
                                    <div className="flex items-center pt-2">
                                        <Activity className="mr-2 h-4 w-4 opacity-70" />{" "}
                                        <span className="text-xs text-muted-foreground">
                Maintained by the Notes team
              </span>
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </div>

                    {
                        !user ? <>
                        <SignInButton mode={"modal"}>
                            <Button variant={"outline"} className={"mx-1"}>
                                <UserCircle2 className={"h-4 w-4 mr-2"} />
                                Jump In
                            </Button>
                        </SignInButton>
                        </> : <>
                            <UserButton />
                        </>
                    }

            </div>
        </div>
        

        <Link href={"/editor"}>
            <Button>
                To the Editor!
            </Button>
        </Link>
        <Link href={"/presentations"}>
            <Button>
                To the Presentations!
            </Button>
        </Link>


    </main>
  )
}
