// components/SplitPage.tsx
import React from 'react';
import styles from './SplitPage.module.css';

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
}

interface StepProps {
  title: string;
}

const Step: React.FC<StepProps> = ({ title }) => (
  <li className="flex items-center mt-2 text-white"> {/* Set text color to white */}
    <CheckIcon />
    <span className="ml-2">{title}</span>
  </li>
);

const SplitPage: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* About Me Section */}
      <div className={styles.leftDiv}>
        <h1 className="text-3xl font-sans font-bold text-white mt-2">What I've Done</h1>
        <div className="text-white text-2xl font-sans mt-4"> {/* Set text color to white */}
          With over <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-yellow-500 to-red-500">5</span> years of experience,
          and after developing programs used/viewed more than <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">250,000</span> times,
          I'm a developer passionate about making an <em>impact</em>.
        </div>
      </div>

      {/* Description Section */}
      <div className={styles.rightDiv}>
        <h1 className="text-3xl font-sans font-bold text-white mt-2">About Me</h1>
        <div className="text-white text-2xl font-sans mt-4"> {/* Set text color to white */}
          As a passionate developer and a strong advocate for continuous learning, I strive to harness technology to create solutions that address real-world challenges. 
          Through my work, I aim to further my interests, career, and set an example for those to come.
        </div>
      </div>
    </div>
  );
};

export default SplitPage;
