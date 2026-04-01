"use client";
import { useRef } from "react";
import useCurSection from "@/hooks/use-cur-section";
import data from "@/data";
import { GraduationCap, MapPin } from "lucide-react";

export default function EducationSection() {
  const ref = useRef(null);
  useCurSection(ref, 0.5);

  return (
    <div ref={ref} id="education" className="w-full py-12 my-32 container mx-auto text-sm md:text-base px-5">
      <h1 className="text-center text-3xl md:text-5xl mb-12">
        <span className="text-gradient-primary">{"-{ "}</span>
        Education
        <span className="text-gradient-primary">{" }-"}</span>
      </h1>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {data.education.map((edu, idx) => (
          <div key={idx} className="bg-muted p-6 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                <GraduationCap className="text-primary-foreground" />
                {edu.degree}
              </h2>
              <span className="text-muted-foreground mt-2 md:mt-0 px-3 py-1 bg-background rounded-full text-xs">
                {edu.duration}
              </span>
            </div>
            
            <div className="space-y-2">
              <p className="text-lg font-semibold text-secondary-foreground">{edu.institution}</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>{edu.location}</span>
                <span className="mx-2">|</span>
                <span className="font-medium text-foreground">CGPA: {edu.cgpa}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
