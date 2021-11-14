
import {Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};

const Item = ({ keyName, keyImage, isSelected, onClick, style }) => {
    const borderDarkMode = useColorModeValue('#ddddddba', '#2a2a2aba')
    const boxShadowDarkMode = useColorModeValue('1px 1px 5px #505050', 'black 1px 1px 5px')
    return (
    <li className="item-bubble" onClick={onClick} style={style}>
        {isSelected && (
            <motion.div
                layoutId="outline"
                className="outline"
                initial={false}
                animate={{ borderColor: borderDarkMode, boxShadow: boxShadowDarkMode }}
                transition={spring}
            >
            </motion.div>
        )}
        <Image src={keyImage} boxSize="100%" borderRadius="50%" p="2px"></Image>
    </li>
)};

const BubbleList = ({ width, style, list, setObjectSelected, objectSelected  }) => {
    const MotionFlex = motion(Flex);
    const borderDarkMode = useColorModeValue('2px solid #e9e9e9', '3px solid #181818');

    return (
        <AnimateSharedLayout>
            <MotionFlex className="test" style={style}>
                {list.map(listObject => {
                return (<Item
                    key={listObject.keyName}
                    keyName={listObject.keyName}
                    isSelected={ objectSelected.keyName === listObject.keyName }
                    onClick={() => setObjectSelected(listObject)}
                    keyImage={listObject.keyImage}
                    style={{ border: borderDarkMode}}
                >
                </Item>)
                })}
            </MotionFlex>
        </AnimateSharedLayout>
    )
}

export default BubbleList;