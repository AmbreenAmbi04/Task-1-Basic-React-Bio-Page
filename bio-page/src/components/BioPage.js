import React from 'react';
import {motion} from 'framer-motion';

const BioPage = () => {

 return (
    <div>
     <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
        Ambreen
     </motion.h1>
     <motion.p>
        I am a fresh IT graduate, skilled in the role of Frontend Web Development,
        currently looking for better job oppurtunities, I am proficient in languages 
        & frameowrks like React, Laravel, PHP, JavScript etc.
     </motion.p>
    </div>
);
}

export default BioPage;