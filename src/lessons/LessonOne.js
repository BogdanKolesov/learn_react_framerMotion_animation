import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LessonOne = () => {
    const pVariants = {
        hidden: {
            x: -1000,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }
    return (
        <>
            <motion.div
                style={{
                    width: 140,
                    height: 140
                }}
                animate={{
                    rotate: 360
                }}
                // initial={{}}
                transition={{
                    delay: 1,
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                    repeatType: 'reverse',
                    type: 'spring',
                    ease: 'easeInOut'
                }}
            >
                <Square />
            </motion.div>
            <motion.p
                initial={'hidden'}
                animate={'visible'}
                transition={{
                    delay: 1
                }}
                variants={pVariants}
            >
                Some Text
            </motion.p>
        </>
    )
}

const Square = styled.div`
    width: 140px;
    height: 140px;
    background-color: red;
    border-radius: 10px;
`

export default LessonOne;


