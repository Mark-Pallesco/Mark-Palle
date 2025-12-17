import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-transparent relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <h2 className="text-5xl md:text-9xl font-bold font-heading mb-16 leading-[0.9] tracking-tighter text-slate-900 dark:text-white">
                        Want to create <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">amazing stuff?</span>
                    </h2>

                    <motion.a
                        href="mailto:hello@johndoe.com"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block text-2xl md:text-3xl font-medium border-b-2 border-primary pb-1 hover:text-primary transition-colors text-slate-900 dark:text-white"
                    >
                        Start a project request
                    </motion.a>

                    <div className="mt-32 flex flex-col md:flex-row justify-between items-center text-lg font-medium text-slate-600 dark:text-text-secondary">
                        <p>© 2024 John Doe.</p>
                        <div className="flex gap-12 mt-8 md:mt-0">
                            <a href="#" className="hover:text-primary dark:hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-primary dark:hover:text-white transition-colors">Twitter</a>
                            <a href="mailto:hello@johndoe.com" className="hover:text-primary dark:hover:text-white transition-colors">hello@johndoe.com</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
