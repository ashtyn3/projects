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
                <AccordionItem value="item-2" className="w-full">
                    <AccordionTrigger>
                        <h2 className="text-xl">The Money Company</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2">
                            <div className="pl-5">
                                <p>A small business finance and account tool.</p>
                                <b>links:</b>
                                <div className="pl-4 flex flex-col">
                                    <a href="https://moneycompany.app" className="text-blue-500" target="_blank">- [The website]</a>
                                    <a href="https://link.excalidraw.com/readonly/ragssmei0IYrG6qU4VEW" className="text-blue-500" target="_blank">- [Thought board]</a>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="w-full">
                    <AccordionTrigger>
                        <h2 className="text-xl">The Wayfinder Advisory</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2">
                            <div className="pl-5">
                                <p>A business coaching and consulting companies website.</p>
                                <b>links:</b>
                                <div className="pl-4 flex flex-col">
                                    <a href="https://www.thewayfinder.co" className="text-blue-500" target="_blank">- [The website]</a>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="h-[.5px] w-full bg-black"></div>
            <div className="my-4">
                <b>Old</b>
            </div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="w-full">
                    <AccordionTrigger>
                        <h2 className="text-xl">Scrubbadub</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2">
                            A car detailing service.
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
