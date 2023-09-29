import { useState } from "react";
import { colors } from "./constant";

const App = () => {
    const [color, setColor] = useState("black");
    return (
        <div className={`h-screen w-screen`} style={{ backgroundColor: color }}>
            <h1 className="text-center bg-white opacity-60 w-fit absolute left-1/2 -translate-x-1/2 top-4 p-4 text-3xl font-semibold rounded-md border border-black">
                BG Changer
            </h1>
            <div className="bg-white border border-black w-fit absolute left-1/2 -translate-x-1/2 bottom-10 p-4 rounded-md flex items-center justify-center gap-3">
                {colors.map((btnColor) => (
                    <button
                        key={btnColor}
                        onClick={() => {
                            setColor(btnColor);
                        }}
                        disabled={color === btnColor}
                        className={`capitalize px-3 py-2 rounded font-semibold ${
                            btnColor === "white"
                                ? "border border-black"
                                : "border-none"
                        } ${
                            btnColor === "white" ||
                            btnColor === "lavender" ||
                            btnColor === "yellow"
                                ? "text-black"
                                : "text-white"
                        }`}
                        style={{ backgroundColor: btnColor }}
                    >
                        {btnColor}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default App;
