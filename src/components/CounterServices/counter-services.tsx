import { dataCounter } from "../../../data";
import CountUp from "react-countup";

const CounterServices = () => {
    return (
        <div className="grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-12 md:flex md:grid-cols-4 md:gap-6 ">
            {dataCounter.map(({ id, endCounter, text, lineRight }, index) => (
                <div key={id} className={`${lineRight && 'ltr'}`}>
                    <div className={`flex flex-col items-center justify-center relative ${lineRight && 'px-4'}`}>
                        <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-whiteColor">
                            {index === dataCounter.length - 1 ? (
                            <>
                                <CountUp end={endCounter} start={0} duration={5} />%
                            </>
                            ) : (
                            <>
                                + <CountUp end={endCounter} start={0} duration={5} />
                            </>
                            )}
                        </p>
                        <p className="text-xs uppercase whitespace-nowrap text-counterServices">
                            {text}
                        </p>
                        {lineRight && (
                            <div className="absolute top-0 right-0 h-full border-r-2 text-whiteColor hidden md:block"></div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CounterServices;
