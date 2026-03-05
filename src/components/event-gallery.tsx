"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { events } from "../data/events";
import EventModal from "./event-modal";
import type { Event } from "../data/events";

export default function EventGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild
      ? (scrollRef.current.firstElementChild as HTMLElement).offsetWidth + 28
      : 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="pb-28 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header da seção */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-sm font-medium text-blue-700">
              Nossos Eventos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Galeria de Eventos
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Confira alguns dos eventos que a Climatização Rio já atendeu com excelência.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Setas desktop */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 hover:bg-blue-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 hover:bg-blue-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-7 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          >
            {events.map((event, index) => (
              <div
                key={index}
                onClick={() => setSelectedEvent(event)}
                className="group flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[380px] snap-start cursor-pointer"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Imagem de capa */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={event.images[0]}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 85vw, (max-width: 768px) 60vw, 380px"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Badge fotos */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                      {event.images.length} fotos
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <div className={`mt-3 h-1 w-0 bg-gradient-to-r ${event.gradient} rounded-full group-hover:w-16 transition-all duration-500`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </section>
  );
}
