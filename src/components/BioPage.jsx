import React from 'react';
import {motion} from 'framer-motion';
import "../App.css";
import profile from "../images/profile.jpg";

const BioPage = () => {

 return (
    <motion.div className="div">
      <img src={profile} style={{ width: "200px", marginTop: "10px" }} />
     <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ color: "darkred" }}
        >
        Ambreen
     </motion.h1>
     <motion.h3 style={{ 
      color: "purple", 
      fontSize: "25px" }}>
        Biography:
     </motion.h3>
     <motion.p style={{ fontSize: "20px" }}>
        I am a fresh IT graduate, skilled in the role of Frontend Web Development,
        currently looking for better job oppurtunities, <br/> I am proficient in languages
        & frameowrks like React, Laravel, PHP, JavScript etc.
     </motion.p>
     <motion.h3 style={{ 
      color:" #FF1493",
      fontSize: "25px" }}>
        Skills:
     </motion.h3>
     <motion.ul style = {{ listStylePosition: "inside", fontSize: "20px" }} >
        <motion.li>Website Development</motion.li>
        <motion.li>Website Designing</motion.li>
        <motion.li>Prototyping & Wireframing</motion.li>
     </motion.ul>
    </motion.div>
);
}

export default BioPage;