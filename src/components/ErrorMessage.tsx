import type { PropsWithChildren } from "react";

export default function ErrorMessage({children}: PropsWithChildren) {
    return (
        <div className="text-center my-4 bg-red-300 text-white font-bold p-3 uppercase">
            {children}
        </div>
    )
}
