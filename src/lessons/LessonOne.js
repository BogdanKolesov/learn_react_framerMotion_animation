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


    const items = [
        'Text1',
        'Text2',
        'Text3'
    ]

    const listVarians = {
        visible: i => ({
            opacity: 1,
            transition: {
                delay: i * 0.5
            }
        }),
        hidden: { opacity: 0 }
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
            <motion.a
                href="#"
                whileHover={{
                    fontSize: 20,
                    color: 'red'
                }}
            >
                Link to some
            </motion.a>
            {
                items.map((item, i) => {
                    return (
                        <motion.li
                            variants={listVarians}
                            initial='hidden'
                            animate='visible'
                            custom={i}
                            key={i}>
                            {item}
                        </motion.li>
                    )
                })
            }
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


