/**
 * @copyright 2025 Mehmet Akif YILDIZ
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 * Custom modules
 */
import { fadeUp, staggerContainer } from '@/lib/animation';

/**
 * Components
 */
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-10 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Developing high-performance and scalable
        applications'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        Software developer in the C# and .NET ecosystem. Focused on developing
        high-performance and scalable applications. Proficient in ASP.NET Core,
        Microsoft Azure Devops, MSSQL and Oracle. Strong knowledge of OOP
        principles, clean code methodologies. Experienced in modern software
        architectures and Agile-Scrum methodologies. Passionate about quickly
        learning and adapting to new technologies.
      </motion.p>

      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        {/* <Button className='mt-5 w-32'>Contact Me</Button> */}
      </motion.div>
    </motion.section>
  );
};
