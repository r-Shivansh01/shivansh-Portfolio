"use client";
import { useRef } from "react";
import useCurSection from "@/hooks/use-cur-section";
import data from "@/data";
import { Award, BookOpen, Star } from "lucide-react";

export default function CertificatesSection() {
  const ref = useRef(null);
  useCurSection(ref, 0.5);

  return (
    <div ref={ref} id="certificates" className="w-full py-12 my-32 bg-muted text-sm md:text-base border-y">
      <div className="container mx-auto px-5">
        <h1 className="text-center text-3xl md:text-5xl mb-12">
          <span className="text-gradient-primary">{"-{ "}</span>
          Certifications & Achievements
          <span className="text-gradient-primary">{" }-"}</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certificates */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-primary-foreground" />
              <span className="text-gradient-secondary">Certificates</span>
            </h2>
            <div className="space-y-4">
              {data.certificates.map((cert, idx) => (
                <div key={idx} className="bg-background p-4 rounded-lg border hover:border-primary/50 transition-all flex justify-between items-center group">
                  <div>
                    <h3 className="font-semibold group-hover:text-primary-foreground transition-colors">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {/* Training */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="text-primary-foreground" />
                <span className="text-gradient-secondary">Training</span>
              </h2>
              {data.training.map((train, idx) => (
                <div key={idx} className="bg-background p-6 rounded-lg border hover:border-primary/50 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{train.title}</h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{train.duration}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{train.description}</p>
                  <p className="mt-4 font-medium text-sm text-primary-foreground">{train.grade}</p>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Star className="text-primary-foreground" />
                <span className="text-gradient-secondary">Achievements</span>
              </h2>
              <ul className="space-y-4">
                {data.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3 items-start bg-background p-4 rounded-lg border">
                    <Star className="text-yellow-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
