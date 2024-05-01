import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image  
                        src="/reading.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Reading"
                    />
                    <Image  
                        src="/reading-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Reading"
                    />
                </div>
            </div>
        </div>
    )
}