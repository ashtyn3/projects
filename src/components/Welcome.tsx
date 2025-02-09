import smShot from "../assets/sm-shot.png"
import fullShot from "../assets/full-screen.png"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Welcome() {
    return (
        <div className="px-[20%] max-md:px-[5%] font-mono py-2">
            <h1 className="text-center w-full text-3xl font-bold">Projects</h1>
            <p className="text-center pb-5">A collection of my current projects.</p>
            <b>Contact</b>
            <p>email: ashtyn@ashtyn.land</p>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="w-full">
                    <AccordionTrigger>
                        <h2 className="text-xl">Ashtyn's Own Timer (Timey)</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2">
                            <div className="pl-5">
                                A pomodoro timing app for Mac OS.
                                <div className="flex">
                                    <img src={smShot.src} className="w-[50%]" />
                                    <img src={fullShot.src} className="w-[60%]" />
                                </div>
                                <b>Keyboard shortcuts</b>
                                <div className="pl-4">
                                    <p>space - pause timer</p>
                                    <p>n - next timer</p>
                                    <p>command+k - change current time</p>
                                    <p>command+, - change default times</p>
                                </div>
                                <b>Privacy</b>
                                <p>
                                    No information about the user is collected or submitted to a
                                    server. Information about timers and usage is not collected.
                                </p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
