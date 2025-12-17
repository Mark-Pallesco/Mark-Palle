import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CmsIconFilled, DesignIconFilled, AutomationIconFilled } from './ServiceIcons';

const services = [
    {
        icon: CmsIconFilled,
        title: "CMS Development",
        desc: "Custom WordPress, Webflow, and Squarespace sites tailored to your brand needs. Scalable and easy to manage systems.",
        tags: ["WordPress", "Webflow", "Headless CMS"],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop"
    },
    {
        icon: DesignIconFilled,
        title: "Visual Design",
        desc: "Stunning, pixel-perfect interfaces designed and prototyped in Figma. Creating comprehensive design systems that scale.",
        tags: ["UI Design", "Prototyping", "Design Systems"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
    },
    {
        icon: AutomationIconFilled,
        title: "No-Code Automation",
        desc: "Streamlining workflows and integrating tools to build powerful, automated systems that save you massive amounts of time.",
        tags: ["Zapier", "Make", "Integrations"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-32 bg-transparent relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white">Expertise & <span className="text-accent-purple">Services</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[500px]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <div className="group relative h-full [perspective:1000px]">
                                <div className="relative w-full h-full text-center transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                    {/* Front Face */}
                                    <div className="absolute inset-0 [backface-visibility:hidden] flex flex-col items-center justify-center p-8 rounded-3xl overflow-hidden border border-white/10 shadow-xl bg-surface/30">
                                        {/* Bg Image & Overlay - Always Dark Overlay */}
                                        <div className="absolute inset-0">
                                            <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-midnight-base/80 backdrop-blur-[2px]"></div>
                                        </div>

                                        <div className="relative z-10 flex flex-col items-center">
                                            <div className="mb-8 p-6 bg-white/5 rounded-full text-primary border border-white/10 backdrop-blur-md shadow-sm">
                                                <service.icon className="w-12 h-12" />
                                            </div>
                                            <h3 className="text-3xl font-bold font-heading text-white">{service.title}</h3>
                                            <div className="mt-8 flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider">
                                                See Details <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back Face */}
                                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-8 rounded-3xl overflow-hidden border border-primary/20 shadow-2xl bg-surface-elevated">
                                        <div className="absolute inset-0">
                                            <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-50" />
                                            <div className="absolute inset-0 bg-midnight-base/95 backdrop-blur-md"></div>
                                        </div>

                                        <div className="relative z-10 text-center w-full">
                                            <h3 className="text-2xl font-bold font-heading text-white mb-6 underline decoration-accent-purple underline-offset-8">{service.title}</h3>
                                            <p className="text-white text-lg mb-8 leading-relaxed font-medium">
                                                {service.desc}
                                            </p>
                                            <div className="flex flex-wrap justify-center gap-2">
                                                {service.tags.map((tag, i) => (
                                                    <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-bold text-accent-cyan border border-white/10 backdrop-blur-sm shadow-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
