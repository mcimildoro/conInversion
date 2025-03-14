"use client"

import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion-transitions";

export type MotionTransitionProps = {
    children: React.ReactNode;
    className?: string;
    position: 'right' | 'bottom'
    style?: React.CSSProperties;
};

export function MotionTransition(props: MotionTransitionProps) {
    const { children, className, position, style } = props

    return (
        <motion.div
            variants={fadeIn(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}