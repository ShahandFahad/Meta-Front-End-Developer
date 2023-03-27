import { useRef } from "react";

export default function UseRefHook() {
    const formInputRef = useRef(null);

    const foucsInput = () => {
        formInputRef.current.focus();
    }
    return (
        <div>
            <h1>Using useRef to access underlying DOM</h1>
            <input ref={formInputRef} type="text" />
            <button onClick={foucsInput}>
                Focus Input
            </button>
        </div>
    );
}