import { useEffect } from "react";


export const CreateTest = (props) => { 
    let i = props.x; 

    useEffect(() => { 

        const UpdateTimer = () => { 
            console.debug('current gamestate: ' + i);
        }

        let interval = setInterval(UpdateTimer, 100);
    });

    

    return (
        <>

        </>
    );
}