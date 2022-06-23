import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

const Landing = () => {

    const refWolverine = useRef<HTMLDivElement>(null);

    const [btn, setBtn] = useState(false);

    useEffect(() => {
        const refWolverineNode = refWolverine.current;
        refWolverineNode !== null && refWolverineNode.classList.add('startingImg');
        setTimeout(() => {
            refWolverine?.current?.classList.remove('startingImg');
            setBtn(true);
        }, 1000)
    }, []);

    const setLeftClaw = () => {
        refWolverine?.current?.classList.add('leftClaw');
    }

    const setRightClaw = () => {
        refWolverine?.current?.classList.add('rightClaw');
    }


    const clearClaw = () => {
        if (refWolverine?.current?.classList.contains('leftClaw')) {
            refWolverine.current.classList.remove('leftClaw')
        } else if (refWolverine?.current?.classList.contains('rightClaw')) {
            refWolverine.current.classList.remove('rightClaw')
        }
    }

    const displayBtn = btn && (
        <>
            <div className="leftBox"
                 onMouseOver={setLeftClaw}
                 onMouseOut={clearClaw}>
                <Link to="/signup" className="btn-welcome">Inscription</Link>
            </div>
            <div className="rightBox"
                 onMouseOver={setRightClaw}
                 onMouseOut={clearClaw}>
                <Link to="/login" className="btn-welcome">Connection</Link>
            </div>
        </>
    )

    return (
        <main ref={refWolverine} className="welcomePage">
            {displayBtn}
        </main>
    )
}

export default Landing;