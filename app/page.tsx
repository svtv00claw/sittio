'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, Zap, Calendar, MessageSquare, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const colors = {
  primary: '#1C3829', // Forest green
  accent: '#d4a574',  // Warm amber
  light: '#F5F4F0',   // Soft white
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Home() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold" style={{ color: colors.primary }}>
            sittio.
          </div>
          <div className="flex gap-8 items-center">
            <a href="#como-funciona" className="text-sm text-gray-600 hover:text-gray-900">
              Cómo funciona
            </a>
            <a href="#precios" className="text-sm text-gray-600 hover:text-gray-900">
              Precios
            </a>
            <a href="#contacto" className="text-sm text-gray-600 hover:text-gray-900">
              Contacto
            </a>
            <button
              style={{ backgroundColor: colors.primary }}
              className="px-6 py-2 text-white rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              Comenzar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 gap-12 items-center"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div>
              <h1 className="text-6xl font-bold leading-tight mb-6" style={{ color: colors.primary }}>
                Tu sistema operativo para negocios de servicios
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Webs hermosas. Reservas automáticas. Receptionist IA. Pagos integrados. Sin costos iniciales.
              </p>
              <div className="flex gap-4">
                <button
                  style={{ backgroundColor: colors.primary }}
                  className="px-8 py-3 text-white rounded-lg font-medium hover:opacity-90 transition flex items-center gap-2"
                >
                  Empezar ahora <ArrowRight size={18} />
                </button>
                <button
                  className="px-8 py-3 border-2 rounded-lg font-medium"
                  style={{ borderColor: colors.primary, color: colors.primary }}
                >
                  Ver demo
                </button>
              </div>
            </div>
            <motion.div
              className="h-96 rounded-2xl"
              style={{
                backgroundColor: colors.light,
                border: `2px solid ${colors.accent}`,
              }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            style={{ color: colors.primary }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Cómo funciona
          </motion.h2>

          <div className="grid grid-cols-2 gap-12">
            {[
              {
                icon: <Zap size={32} />,
                title: 'Tu información',
                description: 'Nos cuentas qué hace tu negocio, servicios, horarios y preferencias de diseño.',
              },
              {
                icon: <MessageSquare size={32} />,
                title: 'Diseño profesional',
                description: 'Nuestro agente crea una web hermosa, responsive, sin templates. Real design.',
              },
              {
                icon: <Calendar size={32} />,
                title: 'Reservas automáticas',
                description: 'Tus clientes reservan directamente. Pagos, confirmaciones, recordatorios automáticos.',
              },
              {
                icon: <TrendingUp size={32} />,
                title: 'Panel de control',
                description: 'Gestiona tu calendario, clientes, pagos y análisis desde un solo lugar.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-xl bg-white border border-gray-200 hover:border-gray-300 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div style={{ color: colors.primary }} className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            style={{ color: colors.primary }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Webs que hemos construido
          </motion.h2>

          <div className="grid grid-cols-3 gap-8">
            {[
              { name: 'Centro de Salud', category: 'Clínica', coming: true },
              { name: 'Academia de Inglés', category: 'Educación', coming: true },
              { name: 'Peluquería Centro', category: 'Salón', coming: true },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl overflow-hidden bg-gray-100 h-64 flex items-center justify-center border border-gray-300 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <p className="text-gray-500 font-medium">{item.name}</p>
                  <p className="text-sm text-gray-400 mt-1">{item.category}</p>
                  {item.coming && (
                    <div className="mt-4 text-xs font-semibold" style={{ color: colors.accent }}>
                      Próximamente
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            style={{ color: colors.primary }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Precios transparentes
          </motion.h2>

          <div className="max-w-2xl mx-auto">
            <motion.div
              className="p-12 rounded-2xl bg-white border-2"
              style={{ borderColor: colors.accent }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                No creemos en costos iniciales. Nuestro modelo es simple:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Creamos tu web hermosa: gratis',
                  'La pones en producción: gratis',
                  'Reciben reservas tus clientes: gratis',
                  'Pagas cuando veas valor real: flexible',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={20} style={{ color: colors.primary }} className="mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm border-t pt-6">
                Primeros 3 clientes: plan personalizado. Habla con nosotros para entender tu caso.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: colors.primary }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Sobre nosotros
          </motion.h2>

          <motion.div
            className="text-lg text-gray-700 leading-relaxed space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>
              Sittio nace de una observación simple: los pequeños negocios de servicios en España gastan dinero en herramientas que no se integran entre sí. Un programa para reservas, otro para pagos, otro para WhatsApp, otro para la web.
            </p>
            <p>
              Decidimos construir un único sistema operativo que unifica todo. Una web hermosa que sea el punto de entrada. Automaciones inteligentes que hagan que los clientes se sientan cuidados. Sin costos iniciales. Sin compromisos largos.
            </p>
            <p>
              Somos un equipo pequeño obsesionado con el design y la experiencia real. No hacemos features por hacer features. Cada pieza tiene propósito.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: colors.primary }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Empezamos hoy
          </motion.h2>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre del negocio
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
                placeholder="Ej: Centro Dental Madrid"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tu email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Qué tipo de negocio tienes
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500">
                <option>Selecciona...</option>
                <option>Clínica / Centro médico</option>
                <option>Salón de belleza</option>
                <option>Academia / Educación</option>
                <option>Entrenador personal / Fitness</option>
                <option>Abogado / Consultoría</option>
                <option>Otro</option>
              </select>
            </div>
            <button
              type="submit"
              style={{ backgroundColor: colors.primary }}
              className="w-full py-3 text-white rounded-lg font-medium hover:opacity-90 transition"
            >
              Enviar
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <p className="font-semibold text-white mb-1">sittio.</p>
            <p className="text-sm">Sistema operativo para negocios de servicios</p>
          </div>
          <p className="text-sm">© 2026 Sittio. Valencia, España.</p>
        </div>
      </footer>
    </div>
  )
}
