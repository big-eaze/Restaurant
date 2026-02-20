import { motion } from "framer-motion";

function NewsletterSec() {
  return (
    <section className="relative overflow-hidden bg-[#050508] py-32">
      {/* Ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-[#C38E5B]/10 blur-[140px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Micro label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.35em] text-xs text-[#C38E5B] mb-6"
        >
          Stay Connected
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-tight text-[#F5F1EB] mb-6"
        >
          An Invitation,
          <br />
          Not a Subscription
        </motion.h2>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-14"
        >
          Occasional notes from the kitchen — seasonal menus,
          special evenings, and stories shaped by fire and time.
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="
              w-full sm:w-[360px]
              bg-transparent
              border-b border-white/20
              py-4 px-2
              text-[#F5F1EB]
              placeholder:text-neutral-500
              focus:outline-none
              focus:border-[#C38E5B]
              transition
            "
          />

          <button
            type="submit"
            className="
              group
              relative overflow-hidden
              px-8 py-4
              text-sm tracking-widest uppercase
              text-[#050508]
              bg-[#C38E5B]
              rounded-full
              transition
              hover:scale-[1.03]
            "
          >
            <span className="relative z-10">Join the List</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition" />
          </button>
        </motion.form>

        {/* Soft reassurance */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 text-xs tracking-wide text-neutral-500"
        >
          No noise. No pressure. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
}

export default NewsletterSec;
