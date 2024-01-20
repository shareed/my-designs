import { Box, Slide } from '@mui/material';
import { MessageText, PromotionsContainer } from '../../styles/promotions';
import messages from './messages';
import { useEffect, useRef, useState } from 'react';

const Promotions = () => {
    const containerRef = useRef();
    const [messageIndex, setMessageIndex] = useState(0);
    const [show, setShow] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 3000)

        //to cancel whne component not in use
        const intervalID = setInterval(() => {
            //adds 1 to current index
            setMessageIndex(i => (i + 1) % messages.length)//% it with messages.length so the array wont over flow

            setShow(true)

            setTimeout(() => {
                setShow(false)
            }, 3000)
        }, 4000)//every 4 seconds

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
        <PromotionsContainer ref={containerRef}>
     


        </PromotionsContainer>
    )
}

export default Promotions