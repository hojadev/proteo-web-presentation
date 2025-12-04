"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { HelpCircle } from "lucide-react";

export default function SlideStrategy() {
    return (
        <SlideWrapper className="bg-slate-900 text-slate-300">
            <div className="max-w-4xl w-full border border-slate-700 p-8 rounded-2xl bg-slate-800/50">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-700">
                    <HelpCircle className="w-6 h-6 text-yellow-500" />
                    <h2 className="text-xl font-mono text-yellow-500 uppercase tracking-widest">
                        Notas Estratégicas para el Presentador
                    </h2>
                </div>

                <ul className="space-y-8">
                    <li className="flex gap-4">
                        <span className="text-2xl font-bold text-slate-500">01</span>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Conexión Emocional</h3>
                            <p className="text-sm leading-relaxed">
                                ¿Existe un término más técnico que "heces de cerdo"? (ej. "Gestión de Efluentes", "Bio-remediación").
                                <span className="text-yellow-500 block mt-1">Acción: Usar su jerga técnica para generar pertenencia.</span>
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="text-2xl font-bold text-slate-500">02</span>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Dato Financiero (D.S. N°67)</h3>
                            <p className="text-sm leading-relaxed">
                                ¿Cuál es su tasa de cotización actual? (¿Están pagando el 2.04%?)
                                <span className="text-yellow-500 block mt-1">Acción: Usar la Slide 4 para mostrar cómo nuestra seguridad les baja la prima.</span>
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="text-2xl font-bold text-slate-500">03</span>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Historial Ambiental</h3>
                            <p className="text-sm leading-relaxed">
                                ¿Han tenido incidentes con la SMA por olores/riles recientemente?
                                <span className="text-yellow-500 block mt-1">Acción: Reforzar la Slide 2 (Contexto) con el dato de las 7,000 UTA.</span>
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="text-2xl font-bold text-slate-500">04</span>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Contexto de Seguridad</h3>
                            <p className="text-sm leading-relaxed">
                                ¿Tenemos datos de la industria sobre accidentes?
                                <span className="text-yellow-500 block mt-1">Acción: Contrastar nuestro "Cero Incidentes" con el promedio de la industria para dar peso dramático.</span>
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="text-2xl font-bold text-slate-500">05</span>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Benchmark de Respuesta</h3>
                            <p className="text-sm leading-relaxed">
                                ¿Cuál es su tiempo de respuesta actual ante crisis?
                                <span className="text-yellow-500 block mt-1">Acción: Preguntar esto antes de mostrar el gráfico de "Tiempo de Respuesta" para maximizar el impacto.</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </SlideWrapper>
    );
}
